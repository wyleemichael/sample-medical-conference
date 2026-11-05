const NAV = [
  ["index.html", "Home", "home"],
  ["registration.html", "Registration", "registration"],
  ["programme.html", "Programme", "programme"],
  ["faculty.html", "Faculty", "faculty"],
  ["abstracts.html", "Abstracts", "abstracts"],
  ["sponsors.html", "Sponsors", "sponsors"],
  ["login.html", "Login", "login"],
];

function currentUser() {
  try {
    return JSON.parse(localStorage.getItem("hkimc_session") || "null");
  } catch {
    return null;
  }
}

function redirectTarget() {
  return new URLSearchParams(location.search).get("next") || "dashboard.html";
}

function accountUrl(next) {
  return `account.html?next=${encodeURIComponent(next)}`;
}

function loginUrl(next) {
  return `login.html?next=${encodeURIComponent(next)}`;
}

function requireAccount(nextPage) {
  if (currentUser()) return true;
  location.href = accountUrl(nextPage);
  return false;
}

function renderLayout(active) {
  const user = currentUser();
  const loginLabel = user ? "Dashboard" : "Login";
  const loginHref = user ? "dashboard.html" : "login.html";
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  header.className = "site-header";
  header.innerHTML = `
    <div class="header-inner">
      <a class="brand" href="index.html">
        <div class="brand-mark">HK</div>
        <div>
          <strong>${CONFERENCE.shortName}</strong>
          <span>${CONFERENCE.dates}</span>
        </div>
      </a>
      <button class="menu-btn" type="button" aria-label="Open menu">Menu</button>
      <nav class="primary" aria-label="Primary">
        ${NAV.map(([href, label, id]) => {
          const isLogin = id === "login";
          const isFaculty = id === "faculty";
          const link = isLogin ? loginHref : href;
          const text = isLogin ? loginLabel : label;
          const on =
            (isLogin && (active === "login" || active === "account" || active === "dashboard") && (user ? active === "dashboard" : active === "login" || active === "account")) ||
            (isFaculty && (active === "faculty" || active === "committee" || active === "speakers")) ||
            (!isLogin && !isFaculty && id === active) ||
            (id === "registration" && (active === "registration" || active === "register")) ||
            (id === "abstracts" && (active === "abstracts" || active === "abstract-submit"));
          if (isFaculty) {
            return `<span class="nav-group ${on ? "active" : ""}"><a href="faculty.html#committee">Organising Committee</a><a href="faculty.html#speakers">Invited Speakers</a></span>`;
          }
          return `<a href="${link}" class="${on ? "active" : ""}">${text}</a>`;
        }).join("")}
      </nav>
    </div>
  `;

  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="footer-inner">
      <div>
        <strong>${CONFERENCE.name}</strong>
        <p class="small">${CONFERENCE.venue}<br>${CONFERENCE.city}</p>
      </div>
      <div>
        <p class="small">Secretariat<br><a href="mailto:${CONFERENCE.email}">${CONFERENCE.email}</a></p>
        <p class="small">Create an account before conference registration or abstract submission. This demo stores data in your browser only.</p>
      </div>
    </div>
  `;

  const btn = header.querySelector(".menu-btn");
  const nav = header.querySelector("nav.primary");
  btn.addEventListener("click", () => nav.classList.toggle("open"));
}