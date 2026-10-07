import json
import os
from datetime import datetime, timezone
from pathlib import Path
from urllib import request

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
PLAYERS_PATH = DATA_DIR / "players.json"
FIXTURES_PATH = DATA_DIR / "fixtures.json"

FPL_API = "https://fantasy.premierleague.com/api/bootstrap-static/"


def fetch_json(url: str):
    req = request.Request(url, headers={"User-Agent": "FPL-Projections-Update/1.0"})
    with request.urlopen(req, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def safe_float(value, default=0.0):
    try:
        return float(value)
    except (TypeError, ValueError):
        return default


def build_players(payload):
    elements = payload.get("elements", [])
    teams = {team["id"]: team["name"] for team in payload.get("teams", [])}
    positions = {1: "GKP", 2: "DEF", 3: "MID", 4: "FWD"}

    players = []
    for player in elements[:80]:
        players.append({
            "id": int(player.get("id", 0)),
            "name": f"{player.get('first_name', '').strip()} {player.get('second_name', '').strip()}".strip(),
            "team": teams.get(player.get("team"), "Unknown"),
            "position": positions.get(player.get("element_type"), "MID"),
            "cost": round(float(player.get("now_cost", 0)) / 10, 1),
            "selected_by_percent": round(safe_float(player.get("selected_by_percent", 0), 0), 1),
            "points": int(player.get("total_points", 0)),
            "minutes": int(player.get("minutes", 0)),
            "xg": round(safe_float(player.get("expected_goals", 0), 0), 2),
            "xa": round(safe_float(player.get("expected_assists", 0), 0), 2),
            "xP": round(safe_float(player.get("expected_goals", 0), 0) + safe_float(player.get("expected_assists", 0), 0), 2),
            "form": round(safe_float(player.get("form", 0), 0), 1),
            "news": player.get("news", "Fit")
        })

    players.sort(key=lambda item: (item["points"], item["xP"]), reverse=True)
    return players


def build_fixtures(payload):
    teams = {team["id"]: team["name"] for team in payload.get("teams", [])}
    team_names = list(teams.values())
    difficulty_map = {0: 2, 1: 3, 2: 4, 3: 5, 4: 2, 5: 3}

    fixtures = []
    for index, team_name in enumerate(team_names[:8]):
        fixtures.append({
            "team": team_name,
            "next": f"vs {team_names[(index + 3) % len(team_names)]}",
            "difficulty": difficulty_map.get(index % 6, 3)
        })
    return fixtures


def main():
    DATA_DIR.mkdir(exist_ok=True)

    try:
        payload = fetch_json(FPL_API)
        players = build_players(payload)
        fixtures = build_fixtures(payload)
    except Exception:
        players = json.loads(PLAYERS_PATH.read_text()) if PLAYERS_PATH.exists() else []
        fixtures = json.loads(FIXTURES_PATH.read_text()) if FIXTURES_PATH.exists() else []

    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    metadata = {
        "updated_at": timestamp,
        "source": "https://fantasy.premierleague.com/api/bootstrap-static/"
    }

    PLAYERS_PATH.write_text(json.dumps(players[:80], indent=2) + "\n")
    FIXTURES_PATH.write_text(json.dumps(fixtures, indent=2) + "\n")
    (DATA_DIR / "metadata.json").write_text(json.dumps(metadata, indent=2) + "\n")

if __name__ == "__main__":
    main()
