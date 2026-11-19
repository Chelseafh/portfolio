import base64
import json
import pathlib
import shutil
import socket
import struct
import subprocess
import tempfile
import time
import urllib.request

CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe"
PORT = 9339
URL = "file:///c:/Users/chels/Documents/GitHub/portfolio/index.html"
VERIFY_JS = pathlib.Path("c:/Users/chels/Documents/GitHub/portfolio/js/verify-portfolio.js").read_text(encoding="utf-8")


def recv_ws(sock):
    def read_exact(n):
        data = b""
        while len(data) < n:
            chunk = sock.recv(n - len(data))
            if not chunk:
                raise EOFError("ws closed")
            data += chunk
        return data

    b1, b2 = read_exact(2)
    length = b2 & 0x7F
    if length == 126:
        length = struct.unpack("!H", read_exact(2))[0]
    elif length == 127:
        length = struct.unpack("!Q", read_exact(8))[0]
    payload = read_exact(length)
    return json.loads(payload.decode("utf-8"))


def send_ws(sock, obj):
    payload = json.dumps(obj).encode("utf-8")
    mask = b"\x12\x34\x56\x78"
    hdr = bytearray([0x81])
    n = len(payload)
    if n < 126:
        hdr.append(0x80 | n)
    elif n < 65536:
        hdr.append(0x80 | 126)
        hdr.extend(struct.pack("!H", n))
    else:
        hdr.append(0x80 | 127)
        hdr.extend(struct.pack("!Q", n))
    masked = bytes(b ^ mask[i % 4] for i, b in enumerate(payload))
    sock.sendall(bytes(hdr) + mask + masked)


def cdp(sock, req_id, method, params=None):
    send_ws(sock, {"id": req_id, "method": method, "params": params or {}})
    while True:
        msg = recv_ws(sock)
        if msg.get("id") == req_id:
            return msg


td = tempfile.mkdtemp()
proc = None
try:
    proc = subprocess.Popen(
        [
            CHROME,
            "--headless=new",
            "--no-sandbox",
            "--disable-gpu",
            "--window-size=1440,900",
            "--remote-allow-origins=*",
            f"--remote-debugging-port={PORT}",
            f"--user-data-dir={td}",
            "--no-first-run",
            URL,
        ],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    ws_url = None
    last_err = None
    for _ in range(50):
        try:
            tabs = json.loads(urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json", timeout=2).read())
            ws_url = next((t.get("webSocketDebuggerUrl") for t in tabs if t.get("type") == "page" and t.get("webSocketDebuggerUrl")), None)
            if ws_url:
                break
            last_err = f"tabs={tabs}"
        except Exception as e:
            last_err = repr(e)
        time.sleep(0.15)
    if not ws_url:
        proc.terminate()
        out, err = proc.communicate(timeout=5)
        raise AssertionError(f"Chrome CDP WebSocket not ready. last_err={last_err} rc={proc.returncode} err={err.decode(errors='ignore')[:400]}")
    host_port, path = ws_url.replace("ws://", "").split("/", 1)
    host, port = host_port.split(":")
    s = socket.create_connection((host, int(port)), timeout=20)
    key = base64.b64encode(b"0123456789abcdef").decode()
    s.sendall(
        f"GET /{path} HTTP/1.1\r\nHost: {host_port}\r\nUpgrade: websocket\r\n"
        f"Connection: Upgrade\r\nSec-WebSocket-Key: {key}\r\nSec-WebSocket-Version: 13\r\n\r\n".encode()
    )
    buf = b""
    while b"\r\n\r\n" not in buf:
        buf += s.recv(4096)

    time.sleep(1.0)
    cdp(s, 1, "Runtime.evaluate", {"expression": VERIFY_JS, "returnByValue": True})
    res = cdp(s, 2, "Runtime.evaluate", {"expression": "window.__runPortfolioVerification()", "returnByValue": True})
    val = res["result"]["result"]["value"]
    passed = sum(1 for r in val["results"] if r["pass"])
    total = len(val["results"])
    print(f"SYNC_TESTS: {passed}/{total} passed (keys={list(val.keys())})")
    for r in val["results"]:
        if not r["pass"]:
            print("  FAIL:", r)

    # Check CV iframe src explicitly
    cv_check = cdp(
        s,
        3,
        "Runtime.evaluate",
        {
            "expression": "(function(){ window.openCvModal(document.getElementById('cvActionBtn')); const f=document.querySelector('#cvModal iframe.modal-cv-frame'); const src=f?f.getAttribute('src'):''; document.getElementById('cvModalClose').click(); return src; })()",
            "returnByValue": True,
        },
    )
    print("CV_IFRAME_SRC:", cv_check["result"]["result"]["value"])
    s.close()
finally:
    if proc:
        proc.terminate()
        try:
            proc.wait(timeout=5)
        except Exception:
            proc.kill()
    shutil.rmtree(td, ignore_errors=True)
