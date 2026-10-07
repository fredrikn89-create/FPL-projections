* {
  box-sizing: border-box;
}

:root {
  --bg: #070d17;
  --bg-alt: #0f1725;
  --panel: rgba(19, 30, 46, 0.92);
  --panel-soft: rgba(25, 39, 58, 0.75);
  --border: rgba(148, 163, 184, 0.18);
  --primary: #7dd3fc;
  --primary-strong: #38bdf8;
  --accent: #a78bfa;
  --success: #4ade80;
  --warning: #fbbf24;
  --danger: #f87171;
  --text: #e5eefb;
  --muted: #94a3b8;
  --shadow: 0 18px 40px rgba(2, 6, 23, 0.38);
  --radius: 18px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 25%),
    linear-gradient(180deg, #050b12 0%, #0b1220 100%);
  color: var(--text);
}

button,
input,
select {
  font: inherit;
}

.app-shell {
  width: min(1200px, calc(100% - 24px));
  margin: 0 auto;
  padding: 20px 0 40px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 6px 22px;
}

.eyebrow,
.section-tag {
  margin: 0 0 6px;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 700;
}

.topbar h1,
.hero h2,
.panel-header h3 {
  margin: 0;
}

.topbar h1 {
  font-size: clamp(2rem, 5vw, 3rem);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.18);
  color: #cdfad7;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
}

.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 16px rgba(74, 222, 128, 0.9);
}

.page {
  display: grid;
  gap: 20px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.hero {
  display: grid;
  gap: 20px;
  padding: 20px;
}

.hero-copy h2 {
  font-size: clamp(1.7rem, 4vw, 2.8rem);
  line-height: 1.08;
  margin-bottom: 12px;
}

.hero-copy p {
  margin: 0;
  color: var(--muted);
  line-height: 1.55;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 12px;
}

.metric-card {
  background: rgba(15, 23, 37, 0.9);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.metric-card span,
.stat-card .stat-label,
.team-summary span {
  color: var(--muted);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.metric-card strong,
.stat-card strong,
.team-summary strong {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.stat-card {
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.two-column-layout,
.bottom-grid {
  display: grid;
  gap: 20px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 18px 18px 0;
  margin-bottom: 12px;
}

.panel-header.compact {
  padding: 18px 18px 0;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

select,
input {
  border: 1px solid var(--border);
  background: rgba(15, 23, 37, 0.9);
  color: var(--text);
  border-radius: 12px;
  padding: 10px 12px;
}

input::placeholder {
  color: var(--muted);
}

.table-wrap {
  overflow-x: auto;
  padding: 0 0 8px;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 620px;
}

th,
td {
  text-align: left;
  padding: 12px 14px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
}

th {
  font-size: 0.72rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

tbody tr:hover {
  background: rgba(125, 211, 252, 0.05);
}

.player-name {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.player-name strong {
  font-size: 0.96rem;
}

.player-name span {
  font-size: 0.75rem;
  color: var(--muted);
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  min-width: 42px;
  padding: 5px 9px;
  background: rgba(167, 139, 250, 0.16);
  border: 1px solid rgba(167, 139, 250, 0.2);
  color: #ddd6fe;
  font-size: 0.78rem;
  font-weight: 700;
}

.action-button,
.ghost-button {
  border: 0;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.action-button {
  background: linear-gradient(135deg, var(--primary-strong), var(--accent));
  color: #081018;
  border-radius: 10px;
  padding: 9px 12px;
  font-weight: 700;
}

.ghost-button {
  background: rgba(148, 163, 184, 0.08);
  color: var(--text);
  border: 1px solid var(--border);
  padding: 8px 12px;
  border-radius: 10px;
}

.action-button:hover,
.ghost-button:hover {
  transform: translateY(-1px);
}

.team-panel {
  padding-bottom: 18px;
}

.team-summary {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 0 18px 16px;
}

.team-list {
  display: grid;
  gap: 10px;
  padding: 0 18px;
}

.team-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 12px;
  background: rgba(15, 23, 37, 0.8);
  border: 1px solid var(--border);
  padding: 10px 12px;
}

.team-player {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.team-player strong {
  font-size: 0.85rem;
}

.team-player span {
  color: var(--muted);
  font-size: 0.72rem;
}

.fixture-list,
.xp-list {
  display: grid;
  gap: 12px;
  padding: 0 18px 18px;
}

.fixture-item,
.xp-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 37, 0.7);
}

.fixture-meta,
.xp-meta {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.fixture-meta strong,
.xp-meta strong {
  font-size: 0.92rem;
}

.fixture-meta span,
.xp-meta span {
  color: var(--muted);
  font-size: 0.76rem;
}

.difficulty-pill {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
}

.diff-1,
.diff-2 {
  background: rgba(74, 222, 128, 0.14);
  color: #c9f9d9;
}

.diff-3,
.diff-4 {
  background: rgba(251, 191, 36, 0.14);
  color: #f7e7b5;
}

.diff-5 {
  background: rgba(248, 113, 113, 0.16);
  color: #fecaca;
}

.xp-score {
  font-weight: 800;
  color: var(--primary);
}

@media (min-width: 760px) {
  .two-column-layout {
    grid-template-columns: 1.7fr 1fr;
  }

  .bottom-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero {
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
  }

  .summary-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 479px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-metrics {
    grid-template-columns: 1fr;
  }

  .panel-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .filters {
    width: 100%;
    justify-content: stretch;
  }

  .filters > * {
    width: 100%;
  }
}
