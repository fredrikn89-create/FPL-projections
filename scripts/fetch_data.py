#!/usr/bin/env python3

import json
import urllib.request

URL = "https://fantasy.premierleague.com/api/bootstrap-static/"

with urllib.request.urlopen(URL) as response:
    data = json.loads(response.read().decode())

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False)

print("Data hentet fra FPL")

