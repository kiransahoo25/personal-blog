/* =========================================================
   1. DATA
   ========================================================= */
const DATA = {
  name: "Kiran Kumar Sahoo",
  initials: "KKS",
  role: "B.Tech CSE Student · Reel Creator · Aspiring Developer",
  bio: "Computer Science undergrad from Bargarh, Odisha. I code during the day, make reels for fun at night, and use this little corner of the internet to document the journey.",
  location: "Bargarh, Odisha — 768028",
  email: "kirankumarsahoo998@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/kiransahoo25" },
    { label: "Instagram", url: "https://www.instagram.com/real.kirannnnn/" },
  ],
  liveProjects: [
    {
      id: "lp1",
      title: "MEIL BRSR Portal",
      url: "https://meil-brsr-frontend.vercel.app",
      description:
        "A production-grade full-stack ESG compliance platform digitizing SEBI's BRSR workflow for 11 reporting units.",
      points: [
        "Built with React, FastAPI, and Neon PostgreSQL to digitize SEBI's complex BRSR workflow.",
        "Features a 5-role access hierarchy, 13 BRSR sections (~290 data points per unit), and evidence file versioning.",
        "Includes a carbon footprint calculator, cryptographic blockchain verification, AI-powered gap analysis, and automated 26-page PDF generation.",
        "Gained deep hands-on experience in full-stack system architecture, cloud deployment (Vercel, Render), SHA-256 tamper detection, and modern JWT authentication.",
        "Developed a strong understanding of ESG frameworks, SEBI BRSR mandates, NGRBC principles, and Scope 1/2/3 emission factor calculations.",
        "Overcame significant challenges: Intel Mac environment setup, Python version mismatches, passlib/bcrypt dependency conflicts, CORS errors, and free-tier cold starts.",
        "Engineered robust database schemas to balance rigid SEBI requirements with multi-tenant flexibility, and optimized 26-page PDF generation layouts.",
      ],
      features: [
        "5-role access control",
        "13 BRSR sections",
        "~290 data points",
        "Blockchain verification",
        "AI gap analysis",
        "26-page PDF generation",
      ],
    },
    {
      id: "lp2",
      title: "EduReal",
      url: "https://edureal.vercel.app",
      description:
        "A full-stack tutoring marketplace connecting students with local teachers for physical and virtual sessions.",
      points: [
        "Developed a feature-rich platform including role-based dashboards (Student, Teacher, Admin) and an advanced search system with autocomplete.",
        "Built secure video uploads, automated email notifications, and a visually striking 'Spatial UI' utilizing glassmorphism and dark-mode aesthetics.",
        "Gained hands-on experience with Next.js App Router, TypeScript strict typing, Supabase (PostgreSQL), and deploying production-ready apps on Vercel.",
        "Implemented Row Level Security (RLS) to protect user data and generated dynamic Google Calendar and Google Maps links.",
        "Solved a critical 'double-booking' race condition by writing custom atomic PostgreSQL transactions to lock database rows in real-time.",
        "Troubleshot and resolved a frustrating Next.js routing bug caused by a dual app folder structure that was throwing 404 errors.",
        "Learned that building a real-world app requires a delicate balance of beautiful design, strict error handling, and deep database security.",
      ],
      features: [
        "Role-based dashboards",
        "Advanced search",
        "Secure video uploads",
        "Email notifications",
        "Glassmorphism UI",
        "Google Calendar/Maps links",
      ],
    },
  ],
  skills: [
    { name: "Reel Creation & Video Editing", level: 90 },
    { name: "Programming (C / C++ / Java)", level: 85 },
    { name: "Data Structures & Algorithms", level: 80 },
    { name: "Web Development (HTML/CSS/JS)", level: 76 },
  ],
  timeline: [
    {
      year: "Present",
      text: "Pursuing B.Tech in Computer Science Engineering.",
    },
    { year: "2024", text: "Passed 12th grade and started my B.Tech journey." },
    { year: "2022", text: "Passed 10th grade." },
    { year: "2006", text: "Born. The journey begins." },
  ],
};

/* =========================================================
   2. HELPERS
   ========================================================= */
const el = (s, r = document) => r.querySelector(s);
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

/* =========================================================
   3. RENDER PROFILE & SIDEBAR CARDS
   ========================================================= */
function renderChrome() {
  el("#avatar").textContent = DATA.initials;
  el("#name").textContent = DATA.name;
  el("#name").setAttribute("data-text", DATA.name);
  el("#role").textContent = DATA.role;
  el("#bio").textContent = DATA.bio;
  el("#footerName").textContent = DATA.name;
  el("#year").textContent = new Date().getFullYear();

  // Title of the tab
  document.title = DATA.name;

  el("#socials").innerHTML = DATA.socials
    .map(
      (s) =>
        `<a class="btn" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`,
    )
    .join("");

  el("#aboutCard").innerHTML = `
    <h3>USER_DATA</h3>
    <ul class="facts">
      <li><span>[LOC]</span><span>${esc(DATA.location)}</span></li>
      <li><span>[ROLE]</span><span>${esc(DATA.role)}</span></li>
      <li><span>[MAIL]</span><a href="mailto:${esc(DATA.email)}">${esc(DATA.email)}</a></li>
    </ul>`;

  el("#skillsCard").innerHTML = `
    <h3>SKILL_MATRIX</h3>
    ${DATA.skills
      .map(
        (s) => `
      <div class="skill">
        <div class="skill-head"><span>${esc(s.name)}</span><span class="pct">${s.level}%</span></div>
        <div class="bar"><i data-level="${s.level}"></i></div>
      </div>`,
      )
      .join("")}`;

  el("#timelineCard").innerHTML = `
    <h3>CHRONO_LOG</h3>
    <ul class="timeline">
      ${DATA.timeline.map((t) => `<li><span class="year">${esc(t.year)}</span><p>${esc(t.text)}</p></li>`).join("")}
    </ul>`;
}

/* =========================================================
   4. RENDER LIVE PROJECTS
   ========================================================= */
function renderProjects() {
  el("#liveProjectsCard").innerHTML = `
    <h3>ACTIVE_PROJECTS</h3>
    ${DATA.liveProjects
      .map(
        (p) => `
      <div class="live-project">
        <div class="live-project-header">
          <a class="live-project-title" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)}</a>
        </div>
        <p class="live-project-desc">${esc(p.description)}</p>
        <ul class="project-points">
          ${p.points.map((point) => `<li>${esc(point)}</li>`).join("")}
        </ul>
        <div class="live-project-features">
          ${p.features.map((f) => `<span>${esc(f)}</span>`).join("")}
        </div>
        <a class="live-project-open-btn" href="${esc(p.url)}" target="_blank" rel="noopener">
          INITIALIZE_PROJECT ↗
        </a>
      </div>`,
      )
      .join("")}
  `;
}

/* =========================================================
   5. CYBERPUNK GEO-LOCATION TRACKER
   ========================================================= */
const scanBtn = el("#scanBtn");
const mapContent = el("#mapContent");

scanBtn.addEventListener("click", () => {
  mapContent.innerHTML = `<div class="map-loaded">SCANNING_LOCATION...</div>`;

  if (!navigator.geolocation) {
    fallbackLocation();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`,
        );
        const data = await res.json();

        const city =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.county ||
          "UNKNOWN_SECTOR";
        const country = data.address.country || "UNKNOWN_REGION";

        mapContent.innerHTML = `
          <div class="map-loaded">
            <span class="map-city">${city.toUpperCase()}</span>
            <span class="map-country">${country.toUpperCase()}</span>
            <span class="map-coords">LAT: ${lat.toFixed(4)} // LON: ${lon.toFixed(4)}</span>
          </div>
        `;
      } catch (error) {
        mapContent.innerHTML = `<div class="map-loaded">CONNECTION_ERROR</div>`;
      }
    },
    (error) => {
      fallbackLocation();
    },
  );
});

function fallbackLocation() {
  setTimeout(() => {
    mapContent.innerHTML = `
      <div class="map-loaded">
        <span class="map-city">BARGARH</span>
        <span class="map-country">ODISHA, INDIA</span>
        <span class="map-coords">LAT: 21.3333 // LON: 83.6167</span>
      </div>
    `;
  }, 1000);
}

/* =========================================================
   6. SCROLL PROGRESS & REVEAL ANIMATIONS
   ========================================================= */
addEventListener(
  "scroll",
  () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    el("#progressBar").style.width = pct + "%";
  },
  { passive: true },
);

function observeReveals() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");

        entry.target.querySelectorAll(".bar > i").forEach((bar) => {
          bar.style.width = bar.dataset.level + "%";
        });

        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll(".reveal").forEach((node) => io.observe(node));
}

/* =========================================================
   7. BOOT
   ========================================================= */
renderChrome();
renderProjects();
observeReveals();
