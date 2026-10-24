/* =========================================================
   1. YOUR DATA — EDIT EVERYTHING IN THIS OBJECT
   ========================================================= */
const DATA = {
  name: "Kiran Kumar Sahoo",
  initials: "KKS", // Changed to KKS
  avatarUrl: "", // Cleared to use text initials instead of an image
  role: "B.Tech CSE Student · Reel Creator · Aspiring Developer",
  bio: "Computer Science undergrad from Bargarh, Odisha. I code during the day, make reels for fun at night, and use this little corner of the internet to document the journey — one post, one project, one lesson at a time.",
  location: "Bargarh, Odisha — 768028",
  email: "kirankumarsahoo998@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/kiransahoo25" },
    { label: "Instagram", url: "https://www.instagram.com/real.kirannnnn/" },
  ],

  /* Live deployed projects */
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

  /* UPDATED TIMELINE */
  timeline: [
    {
      year: "Present",
      text: "Pursuing B.Tech in Computer Science Engineering.",
    },
    { year: "2024", text: "Passed 12th grade and started my B.Tech journey." },
    { year: "2022", text: "Passed 10th grade." },
    { year: "2006", text: "Born. The journey begins." },
  ],

  posts: [
    {
      id: "p1",
      title: "Why I started making reels (and what it taught me about coding)",
      date: "2026-02-18",
      likes: 32,
      tags: ["Reels", "Life"],
      excerpt:
        "I didn't start making reels for followers. I started because I was bored on a Sunday. Turns out it made me a better programmer.",
      body: `
        <p>I didn't start making reels because I wanted followers. I started because I was bored on a Sunday and wanted to see if I could make something that looked <em>good</em>.</p>
        <p>The first one took four hours for fifteen seconds of video. The second took three. By the tenth I could do it in about an hour.</p>
        <blockquote>The fastest way to learn anything is to make it repeatedly — badly, then slightly less badly.</blockquote>
        <p>What surprised me was how much it improved my coding. Editing forces you to think about structure, pacing, and cutting everything that doesn't earn its place. Turns out that's the same instinct that turns a bloated script into a clean function.</p>
        <p>If you're a student staring at your IDE all day, go make something in a different medium. It rewires your brain.</p>
      `,
    },
    {
      id: "p2",
      title: "My DSA study system — no burnout, no shortcuts",
      date: "2026-01-30",
      likes: 47,
      tags: ["DSA", "Habits"],
      excerpt:
        "I tried every roadmap on the internet. Most left me exhausted by week three. Here's the boring system that actually stuck.",
      body: `
        <p>I tried every DSA roadmap on the internet. Every single one left me exhausted by week three.</p>
        <p>So I built my own system. It's boring. It's slow. It works.</p>
        <p><strong>1.</strong> One problem a day. Not three, not ten. One, understood completely.<br>
           <strong>2.</strong> If I can't solve it in 30 minutes, I read the solution — then rewrite it from scratch the next day.<br>
           <strong>3.</strong> Sundays are revision only. No new problems.</p>
        <p>After six months: 180 problems, most of which I can solve again from memory. Quality beats volume, every single time.</p>
      `,
    },
    {
      id: "p3",
      title: "My first year of B.Tech: 5 things I wish I knew",
      date: "2025-12-12",
      likes: 58,
      tags: ["College", "Career"],
      excerpt:
        "College is not what the brochures promised. That's not a bad thing — just something nobody warned me about.",
      body: `
        <p>College is not what the brochures promised. That's not a bad thing — just something nobody warned me about.</p>
        <p><strong>1.</strong> Nobody is going to push you. You have to push yourself.<br>
           <strong>2.</strong> Attendance is not the same as learning.<br>
           <strong>3.</strong> Your CGPA matters — but your projects matter more.<br>
           <strong>4.</strong> Find one friend who codes. It changes everything.<br>
           <strong>5.</strong> Sleep is not optional.</p>
        <p>If I could tell first-year me anything, it would be this: start building <em>now</em>. Even the smallest project teaches you more than a whole semester of theory.</p>
      `,
    },
    {
      id: "p4",
      title: "Building my first web project from scratch",
      date: "2025-11-05",
      likes: 22,
      tags: ["Code", "Web"],
      excerpt:
        "Inline styles, no structure, and a stray div that broke everything. And I loved every minute of it.",
      body: `
        <p>My first web project was a mess — inline styles, no structure, and a stray <code>&lt;div&gt;</code> that broke everything. But it was <em>mine</em>.</p>
        <p>What I learned in the first week:</p>
        <p>• Start with the HTML skeleton. Get the structure right before the pretty stuff.<br>
           • CSS Grid will save you hours if you actually learn it.<br>
           • JavaScript is not scary once you build something real with it.<br>
           • Version control from day one. Trust me.</p>
        <blockquote>Every polished project you admire started as something ugly that someone refused to give up on.</blockquote>
        <p>Next up: rebuilding this blog with real features — a dark mode, a search bar, and maybe a comments section. One commit at a time.</p>
      `,
    },
  ],
};

/* =========================================================
   2. HELPERS
   ========================================================= */
const el = (s, r = document) => r.querySelector(s);
const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem(k);
      return v ? JSON.parse(v) : d;
    } catch {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch {}
  },
};
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const fmtDate = (d) =>
  new Date(d).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
const readingTime = (html) => {
  const words = html
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

/* =========================================================
   3. STATE
   ========================================================= */
const state = { q: "", tag: "All", open: new Set() };
let liked = new Set(store.get("blog-liked", []));

/* =========================================================
   4. THEME
   ========================================================= */
const THEME_KEY = "blog-theme";
let theme =
  store.get(THEME_KEY, null) ||
  (window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  el("#themeBtn").textContent = t === "dark" ? "☀️ Light" : "🌙 Dark";
  store.set(THEME_KEY, t);
}
el("#themeBtn").addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  applyTheme(theme);
});

/* =========================================================
   5. RENDER HEADER + SIDEBAR
   ========================================================= */
function renderChrome() {
  const avatarEl = el("#avatar");
  // If avatarUrl is empty, it defaults to the text initials (KKS)
  if (DATA.avatarUrl) {
    avatarEl.innerHTML = `<img src="${esc(DATA.avatarUrl)}" alt="${esc(DATA.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:30px;">`;
  } else {
    avatarEl.textContent = DATA.initials;
  }

  el("#name").textContent = DATA.name;
  el("#role").textContent = DATA.role;
  el("#bio").textContent = DATA.bio;
  el("#footerName").textContent = DATA.name;
  el("#year").textContent = new Date().getFullYear();
  document.title = `${DATA.name} — Personal Blog`;

  el("#socials").innerHTML = DATA.socials
    .map(
      (s) =>
        `<a class="btn" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`,
    )
    .join("");

  el("#aboutCard").innerHTML = `
    <h3>About</h3>
    <ul class="facts">
      <li><span>📍</span><span>${esc(DATA.location)}</span></li>
      <li><span>🎓</span><span>${esc(DATA.role)}</span></li>
      <li><span>✉️</span><a href="mailto:${esc(DATA.email)}">${esc(DATA.email)}</a></li>
      <li><span>📚</span><span>${DATA.posts.length} posts published</span></li>
    </ul>`;

  // Render live projects one by one with pointwise details
  el("#liveProjectsCard").innerHTML = `
    <h3>Featured Projects</h3>
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
          Open Project ↗
        </a>
      </div>`,
      )
      .join("")}
  `;

  el("#skillsCard").innerHTML = `
    <h3>Skills</h3>
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
    <h3>Timeline</h3>
    <ul class="timeline">
      ${DATA.timeline.map((t) => `<li><span class="year">${esc(t.year)}</span><p>${esc(t.text)}</p></li>`).join("")}
    </ul>`;
}

/* =========================================================
   6. RENDER TAG CHIPS
   ========================================================= */
function renderChips() {
  const all = ["All", ...new Set(DATA.posts.flatMap((p) => p.tags))];
  el("#tags").innerHTML = all
    .map(
      (t) =>
        `<button class="chip${state.tag === t ? " active" : ""}" data-tag="${esc(t)}">${esc(t)}</button>`,
    )
    .join("");
}
el("#tags").addEventListener("click", (e) => {
  const chip = e.target.closest("[data-tag]");
  if (!chip) return;
  state.tag = chip.dataset.tag;
  renderChips();
  renderPosts();
});

/* =========================================================
   7. RENDER POSTS
   ========================================================= */
function postHTML(p) {
  const isLiked = liked.has(p.id);
  const count = (p.likes || 0) + (isLiked ? 1 : 0);
  return `
  <article class="post card" data-id="${esc(p.id)}">
    <div class="post-meta">
      <time datetime="${esc(p.date)}">${fmtDate(p.date)}</time>
      <span>•</span>
      <span>${readingTime(p.body)} min read</span>
    </div>
    <h2 class="post-title">${esc(p.title)}</h2>
    <p class="excerpt">${esc(p.excerpt)}</p>
    <div class="tags">${p.tags.map((t) => `<span class="tag">#${esc(t)}</span>`).join("")}</div>
    <div class="post-body"><div class="post-body-inner">${p.body}</div></div>
    <div class="post-actions">
      <button class="btn like${isLiked ? " liked" : ""}" data-like="${esc(p.id)}" aria-pressed="${isLiked}">
        <span class="heart">${isLiked ? "♥" : "♡"}</span>
        <span class="count">${count}</span>
      </button>
      <button class="btn ghost read-more">Read more ↓</button>
    </div>
  </article>`;
}

function renderPosts() {
  const q = state.q.trim().toLowerCase();
  const list = DATA.posts.filter((p) => {
    const tagOK = state.tag === "All" || p.tags.includes(state.tag);
    const hay = (
      p.title +
      " " +
      p.excerpt +
      " " +
      p.tags.join(" ") +
      " " +
      p.body
    ).toLowerCase();
    return tagOK && (!q || hay.includes(q));
  });

  const host = el("#posts");

  if (!list.length) {
    host.innerHTML = `<div class="card empty">No posts match <strong>“${esc(state.q || state.tag)}”</strong>.<br>Try another search or tag.</div>`;
    return;
  }

  host.innerHTML = list.map(postHTML).join("");

  state.open.forEach((id) => {
    const body = host.querySelector(
      `.post[data-id="${CSS.escape(id)}"] .post-body`,
    );
    if (!body) return;
    const article = body.closest(".post");
    article.classList.add("open");
    body.style.maxHeight = body.scrollHeight + "px";
    article.querySelector(".read-more").textContent = "Show less ↑";
  });
}

/* =========================================================
   8. POST INTERACTIONS
   ========================================================= */
function togglePost(article) {
  const body = article.querySelector(".post-body");
  const btn = article.querySelector(".read-more");
  const isOpen = article.classList.toggle("open");

  if (isOpen) {
    body.style.maxHeight = body.scrollHeight + "px";
    state.open.add(article.dataset.id);
    btn.textContent = "Show less ↑";
  } else {
    body.style.maxHeight = body.scrollHeight + "px";
    requestAnimationFrame(() => {
      body.style.maxHeight = "0px";
    });
    state.open.delete(article.dataset.id);
    btn.textContent = "Read more ↓";
  }
}

function toggleLike(btn) {
  const id = btn.dataset.like;
  const post = DATA.posts.find((p) => p.id === id);
  if (!post) return;

  if (liked.has(id)) liked.delete(id);
  else liked.add(id);
  store.set("blog-liked", [...liked]);

  const isLiked = liked.has(id);
  btn.classList.toggle("liked", isLiked);
  btn.setAttribute("aria-pressed", String(isLiked));
  btn.querySelector(".heart").textContent = isLiked ? "♥" : "♡";
  btn.querySelector(".count").textContent =
    (post.likes || 0) + (isLiked ? 1 : 0);

  btn.classList.remove("pop");
  void btn.offsetWidth;
  btn.classList.add("pop");
}

el("#posts").addEventListener("click", (e) => {
  const likeBtn = e.target.closest("[data-like]");
  if (likeBtn) {
    toggleLike(likeBtn);
    return;
  }

  const article = e.target.closest(".post");
  if (!article) return;
  if (e.target.closest(".read-more") || e.target.closest(".post-title")) {
    togglePost(article);
  }
});

/* =========================================================
   9. SEARCH
   ========================================================= */
let searchTimer;
el("#search").addEventListener("input", (e) => {
  const value = e.target.value;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.q = value;
    renderPosts();
  }, 140);
});

document.addEventListener("keydown", (e) => {
  const tag = document.activeElement.tagName;
  if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
    e.preventDefault();
    el("#search").focus();
  }
});

/* =========================================================
   10. SCROLL PROGRESS
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

/* =========================================================
   11. REVEAL + SKILL BARS ON SCROLL
   ========================================================= */
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
   12. KEEP OPEN ELEMENTS SIZED ON RESIZE
   ========================================================= */
let resizeTimer;
addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.querySelectorAll(".post.open .post-body").forEach((body) => {
      body.style.maxHeight = body.scrollHeight + "px";
    });
  }, 120);
});

/* =========================================================
   13. BOOT
   ========================================================= */
applyTheme(theme);
renderChrome();
renderChips();
renderPosts();
observeReveals();
