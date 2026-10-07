name: Daily FPL Data Refresh

on:
  schedule:
    - cron: "0 6 * * *"
  workflow_dispatch:

permissions:
  contents: write

jobs:
  refresh-data:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.12"

      - name: Refresh player and fixture data
        run: python3 scripts/update_fpl_data.py

      - name: Commit refreshed data
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add data
          if git diff --cached --quiet; then
            echo "No data changes to commit."
          else
            git commit -m "chore: refresh FPL data"
            git push
          fi
