#!/usr/bin/env python3

import os

html = """
<!doctype html>
<html lang="no">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>FPL Projections</title>
<style>
body{
    font-family:system-ui;
    background:#0e131c;
    color:white;
    margin:0;
    padding:40px;
}
</style>
</head>
<body>
<h1>FPL Projections</h1>
<p>Neste versjon bygges nå.</p>
</body>
</html>
"""

os.makedirs("dist", exist_ok=True)

with open("dist/index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Nettside bygget")
