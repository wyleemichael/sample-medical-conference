:root {
  --ink: #12262c;
  --teal: #0f5b62;
  --teal-deep: #0a3d43;
  --gold: #b8892e;
  --gold-soft: #e8d5a3;
  --cream: #f3eee4;
  --paper: #fbfaf7;
  --muted: #5d6c71;
  --line: #ddd4c6;
  --white: #ffffff;
  --danger: #9b2c2c;
  --ok: #1f6b4a;
  --shadow: 0 18px 50px rgba(18, 38, 44, 0.1);
  --radius: 18px;
  --max: 1120px;
  --serif: "Source Serif 4", Georgia, serif;
  --sans: "Outfit", "Segoe UI", sans-serif;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--ink);
  background: var(--paper);
  font-family: var(--sans);
  line-height: 1.55;
}
img { max-width: 100%; }
a { color: var(--teal); }
.skip {
  position: absolute;
  left: -999px;
}
.skip:focus {
  left: 12px;
  top: 12px;
  z-index: 50;
  background: #fff;
  padding: 8px 12px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(251, 250, 247, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}
.header-inner, .footer-inner, .wrap {
  width: min(var(--max), calc(100% - 40px));
  margin: 0 auto;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 72px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--ink);
}
.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(160deg, var(--teal), var(--teal-deep));
  color: var(--gold-soft);
  display: grid;
  place-items: center;
  font-weight: 700;
  letter-spacing: 0.04em;
  font-size: 12px;
}
.brand strong { display: block; font-size: 15px; }
.brand span { display: block; color: var(--muted); font-size: 12px; }

nav.primary {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  align-items: center;
}
nav.primary a {
  text-decoration: none;
  color: var(--ink);
  font-size: 14px;
  padding: 6px 0;
  border-bottom: 2px solid transparent;
}
nav.primary a.active,
nav.primary a:hover { border-bottom-color: var(--gold); }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 11px 20px;
  text-decoration: none;
  font: inherit;
  font-size: 14px;
  cursor: pointer;
}
.btn-gold {
  background: var(--gold);
  color: #1c1406;
}
.btn-gold:hover { filter: brightness(1.05); }
.btn-teal {
  background: var(--teal);
  color: #fff;
}
.btn-ghost {
  background: transparent;
  border-color: var(--line);
  color: var(--ink);
}
.btn-row { display: flex; flex-wrap: wrap; gap: 10px; }

.hero {
  background:
    radial-gradient(circle at 80% 10%, rgba(184, 137, 46, 0.18), transparent 28%),
    linear-gradient(165deg, #08343a 0%, #0f5b62 48%, #12262c 100%);
  color: #f7f3ea;
  padding: 72px 0 80px;
  position: relative;
  overflow: hidden;
}
.hero::after {
  content: "";
  position: absolute;
  inset: auto -10% -40% 40%;
  height: 280px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='120' fill='none'%3E%3Cpath d='M0 60h40l10-28 12 56 14-80 12 90 10-38h302' stroke='%23e8d5a3' stroke-opacity='.25' stroke-width='3'/%3E%3C/svg%3E") center / cover no-repeat;
  opacity: 0.9;
  pointer-events: none;
}
.kicker {
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--gold-soft);
  margin: 0 0 12px;
}
.hero h1, h1, h2, h3 { font-family: var(--serif); font-weight: 600; }
.hero h1 {
  font-size: clamp(36px, 6vw, 62px);
  line-height: 1.05;
  margin: 0 0 12px;
  max-width: 14ch;
}
.hero p.lede {
  font-size: 20px;
  max-width: 42ch;
  color: #e6efe8;
}
.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin: 28px 0;
  font-size: 14px;
}
.meta-row strong { display: block; color: var(--gold-soft); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; }

.section { padding: 72px 0; }
.section.alt { background: var(--cream); }
.section-head {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: end;
  margin-bottom: 28px;
}
.section-head h2 { margin: 0; font-size: 34px; }
.section-head p { margin: 0; color: var(--muted); max-width: 46ch; }

.highlights {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: -42px;
  position: relative;
  z-index: 2;
}
.stat {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 22px;
  box-shadow: var(--shadow);
}
.stat b {
  display: block;
  font-family: var(--serif);
  font-size: 32px;
  color: var(--teal);
}
.welcome {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 36px;
  align-items: start;
}
.quote {
  background: var(--teal-deep);
  color: #f4efe6;
  border-radius: var(--radius);
  padding: 28px;
}
.quote p { font-family: var(--serif); font-size: 22px; line-height: 1.35; }
.quote cite { color: var(--gold-soft); font-style: normal; font-size: 14px; }

.grid-3, .grid-2, .sponsor-grid {
  display: grid;
  gap: 16px;
}
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-2 { grid-template-columns: 1fr 1fr; }

.card, .speaker, .tier-card, .form-card, .dash-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px;
}
.speaker {
  cursor: pointer;
  text-align: left;
  width: 100%;
  font: inherit;
  color: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.speaker:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--teal);
  color: var(--gold-soft);
  font-weight: 650;
  margin-bottom: 12px;
}
.speaker h3, .card h3 { margin: 8px 0 4px; font-size: 20px; }
.muted { color: var(--muted); }
.small { font-size: 13px; }

.page-hero {
  padding: 48px 0 28px;
  background: var(--cream);
  border-bottom: 1px solid var(--line);
}
.page-hero h1 { margin: 0 0 8px; font-size: clamp(32px, 4vw, 46px); }

.tabs { display: flex; gap: 8px; margin: 8px 0 24px; flex-wrap: wrap; }
.tab {
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 999px;
  padding: 8px 14px;
  cursor: pointer;
  font: inherit;
}
.tab[aria-selected="true"] {
  background: var(--teal);
  color: #fff;
  border-color: var(--teal);
}

.timeline { display: grid; gap: 12px; }
.slot {
  display: grid;
  grid-template-columns: 140px 1fr auto;
  gap: 12px;
  padding: 14px 16px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
}
.badge {
  align-self: start;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: var(--cream);
  padding: 4px 8px;
  border-radius: 999px;
}

form { display: grid; gap: 14px; }
label { display: grid; gap: 6px; font-size: 14px; }
input, select, textarea {
  font: inherit;
  padding: 11px 12px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: #fff;
}
textarea { min-height: 120px; resize: vertical; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.notice {
  padding: 12px 14px;
  border-radius: 12px;
  background: #e8f4ee;
  color: var(--ok);
}
.notice.error { background: #fdecec; color: var(--danger); }
.hidden { display: none !important; }

.modal {
  position: fixed;
  inset: 0;
  background: rgba(12, 28, 32, 0.55);
  display: grid;
  place-items: center;
  padding: 24px;
  z-index: 40;
}
.modal-card {
  width: min(560px, 100%);
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  position: relative;
}
.modal-card h2 { margin: 0 0 4px; }
.close {
  position: absolute;
  top: 12px;
  right: 12px;
  border: 0;
  background: var(--cream);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
}

.sponsor-grid { grid-template-columns: repeat(3, 1fr); }
.sponsor-link {
  display: block;
  text-decoration: none;
  color: inherit;
  min-height: 120px;
}
.sponsor-link:hover { border-color: var(--gold); }
.logo-type {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--teal-deep);
}

.dash-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 16px;
}
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
.table th, .table td {
  text-align: left;
  padding: 10px 8px;
  border-bottom: 1px solid var(--line);
}

.site-footer {
  background: var(--teal-deep);
  color: #e7efe9;
  padding: 36px 0;
  margin-top: 40px;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}
.site-footer a { color: var(--gold-soft); }

@media (max-width: 900px) {
  .highlights, .grid-3, .welcome, .dash-grid, .form-grid, .sponsor-grid { grid-template-columns: 1fr 1fr; }
  .slot { grid-template-columns: 1fr; }
  nav.primary { display: none; }
  nav.primary.open {
    display: flex;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: var(--paper);
    padding: 12px 20px 20px;
    border-bottom: 1px solid var(--line);
    flex-direction: column;
  }
  .menu-btn { display: inline-flex; }
}
@media (max-width: 640px) {
  .highlights, .grid-3, .welcome, .dash-grid, .form-grid, .sponsor-grid, .grid-2 { grid-template-columns: 1fr; }
}
.menu-btn {
  display: none;
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 10px;
  padding: 8px 10px;
  cursor: pointer;
}
.auth-status { font-size: 13px; color: var(--muted); }