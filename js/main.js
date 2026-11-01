/* ============================================================
   Lexy's BLOGS — 交互脚本
   闪光粒子 / 光标拖尾 / 时钟 / 访客计数器 / 留言板
   ============================================================ */

// ----- 全屏闪光粒子 -----
const SPARK_CHARS = ["✿", "❀", "✧", "⋆", "✦", "♡", "✨", "🌸"];
const SPARK_COLORS = ["#ff7fb8", "#f2b84b", "#d18bff", "#ff5f9e", "#ff9fcf"];
(function makeSparkles() {
  const box = document.getElementById("sparkles");
  const count = 60;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.className = "spark";
    s.textContent = SPARK_CHARS[Math.floor(Math.random() * SPARK_CHARS.length)];
    s.style.color = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.fontSize = (10 + Math.random() * 18) + "px";
    s.style.setProperty("--dur", (1.6 + Math.random() * 2.6) + "s");
    s.style.animationDelay = (Math.random() * 4) + "s";
    box.appendChild(s);
  }
})();

// ----- 光标拖尾闪光 -----
(function cursorTrail() {
  const trail = document.getElementById("cursor-trail");
  const chars = ["✿", "✧", "♡", "✦"];
  let last = 0;
  window.addEventListener("mousemove", (e) => {
    const now = Date.now();
    if (now - last < 40) return; // 节流，避免过多元素
    last = now;
    const t = document.createElement("span");
    t.className = "trail";
    t.textContent = chars[Math.floor(Math.random() * chars.length)];
    t.style.left = e.clientX + "px";
    t.style.top = e.clientY + "px";
    trail.appendChild(t);
    setTimeout(() => t.remove(), 1000);
  });
})();

// ----- 数字时钟 -----
(function clock() {
  const el = document.getElementById("clock");
  const tick = () => {
    const d = new Date();
    const p = (n) => String(n).padStart(2, "0");
    el.textContent = `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
  };
  tick();
  setInterval(tick, 1000);
})();

// ----- 访客计数器（保存在本地浏览器，模拟复古 odometer）-----
(function visitorCounter() {
  const KEY = "lexy-visits";
  let visits = Number(localStorage.getItem(KEY));
  if (!visits) visits = 10483; // 初始看起来很“有历史”
  visits += 1;
  localStorage.setItem(KEY, String(visits));

  const el = document.getElementById("odometer");
  const digits = String(visits).padStart(6, "0");
  el.innerHTML = "";
  for (const ch of digits) {
    const d = document.createElement("span");
    d.textContent = ch;
    el.appendChild(d);
  }
})();

// ----- 留言板（localStorage）-----
(function guestbook() {
  const KEY = "lexy-guestbook";
  const list = document.getElementById("gb-list");
  const form = document.getElementById("guestbook-form");
  const nameInput = document.getElementById("gb-name");
  const msgInput = document.getElementById("gb-msg");

  let entries = [];
  try { entries = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { entries = []; }

  if (entries.length === 0) {
    entries = [
      { name: "Lexy", msg: "欢迎光临我的小窝～欢迎在留言板留下你的脚印！", time: "2026-11-01 13:00" },
      { name: "访客A", msg: "路过打卡！网站好闪亮，喜欢这种复古感 ✨", time: "2026-11-01 14:20" }
    ];
  }

  function render() {
    list.innerHTML = "";
    entries.forEach((e) => {
      const li = document.createElement("li");
      li.className = "gb-item";
      const head = document.createElement("div");
      head.className = "gb-head";
      const name = document.createElement("span");
      name.className = "gb-name";
      name.textContent = e.name;
      const time = document.createElement("span");
      time.className = "gb-time";
      time.textContent = e.time;
      const msg = document.createElement("p");
      msg.className = "gb-msg";
      msg.textContent = e.msg;
      head.append(name, time);
      li.append(head, msg);
      list.appendChild(li);
    });
  }

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const now = new Date();
    const p = (n) => String(n).padStart(2, "0");
    const stamp = `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())} ${p(now.getHours())}:${p(now.getMinutes())}`;
    entries.unshift({ name: nameInput.value.trim() || "匿名", msg: msgInput.value.trim(), time: stamp });
    if (entries.length > 50) entries = entries.slice(0, 50); // 最多保留 50 条
    localStorage.setItem(KEY, JSON.stringify(entries));
    render();
    msgInput.value = "";
    nameInput.value = "";
  });

  render();
})();
