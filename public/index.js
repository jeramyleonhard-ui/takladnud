const shops = [
  { stall: 'A1', name: 'ข้าวเหนียวมะม่วงลุงสม', category: 'ของหวาน', emoji: '🥭', rating: '4.8', description: 'มะม่วงน้ำดอกไม้หวานฉ่ำ กะทิหอมมัน ข้าวเหนียวนุ่มทำใหม่ทุกเช้า', hours: '06:00–11:30', kind: 'food', color: '#f5dfb5' },
  { stall: 'A2', name: 'กาแฟดริปดอยสุเทพ', category: 'เครื่องดื่ม', emoji: '☕', rating: '4.9', description: 'กาแฟคั่วมือจากดอยสูง หอมละมุน ดริปแก้วต่อแก้วโดยพี่เอก', hours: '06:00–12:00', kind: 'goods', color: '#d7e3d2' },
  { stall: 'A3', name: 'ไส้อั่วแม่อุ๊ย', category: 'ของคาว', emoji: '🌭', rating: '4.7', description: 'ไส้อั่วสมุนไพรย่างเตาถ่าน หอมข้ามซอย สูตรแม่อุ๊ยทำเอง', hours: '06:30–12:00', kind: 'food', color: '#f1d4c3' },
  { stall: 'A4', name: 'น้ำปั่นสวนลำไย', category: 'เครื่องดื่ม', emoji: '🥤', rating: '4.6', description: 'น้ำผลไม้ปั่นสดจากสวน หวานน้อยได้ สดชื่นหลังเดินหลาด', hours: '06:00–11:00', kind: 'goods', color: '#d7e6db' },
  { stall: 'B1', name: 'ขนมจีนน้ำเงี้ยวป้าบัว', category: 'ของคาว', emoji: '🍜', rating: '4.8', description: 'น้ำเงี้ยวเครื่องแน่น เลือดนุ่ม มะเขือเทศสด กินกับผักฟรีไม่อั้น', hours: '06:00–10:30', kind: 'food', color: '#f2d9c4' },
  { stall: 'B2', name: 'ข้าวซอยป้าจันทร์', category: 'ของคาว', emoji: '🥣', rating: '4.9', description: 'น้ำแกงเข้มข้น เส้นกรอบให้ไม่อั้น สูตรลับกว่าสามสิบปี', hours: '06:00–11:30', kind: 'food', color: '#f0d8c0' },
  { stall: 'B3', name: 'ขนมครกเตาถ่าน', category: 'ของหวาน', emoji: '🥥', rating: '4.7', description: 'ขนมครกเตาถ่าน ขอบกรอบไส้ฉ่ำ หอมกะทิ กินตอนร้อน ๆ อร่อยที่สุด', hours: '06:00–10:00', kind: 'food', color: '#f3e1c5' },
  { stall: 'B4', name: 'ผักปลอดสารป้าศรี', category: 'ของฝาก', emoji: '🥬', rating: '4.8', description: 'ผักสดจากสวนชุมชน เก็บเช้ามาขายเช้า ปลอดสารและปลอดภัย', hours: '05:30–10:00', kind: 'goods', color: '#d4e2cf' },
  { stall: 'C1', name: 'หมูปิ้งไม้ละสิบ', category: 'ของคาว', emoji: '🍢', rating: '4.6', description: 'หมูหมักนมสดย่างเตาถ่าน หอมหวานกำลังดี ข้าวเหนียวร้อน ๆ พร้อม', hours: '06:00–11:00', kind: 'food', color: '#f1d5c0' },
  { stall: 'C2', name: 'กล้วยทอดยายแป้น', category: 'ของหวาน', emoji: '🍌', rating: '4.9', description: 'กล้วยน้ำว้าสวนหลังบ้าน ชุบแป้งบางกรอบ ทอดใหม่ตลอดเช้า', hours: '06:00–11:30', kind: 'food', color: '#f1e3b9' },
  { stall: 'C3', name: 'น้ำพริกหนุ่มบ้านป้า', category: 'ของฝาก', emoji: '🌶️', rating: '4.8', description: 'น้ำพริกหนุ่มย่างสด ทำวันต่อวัน มีแคบหมูและผักนึ่งครบชุด', hours: '06:00–12:00', kind: 'goods', color: '#dbe2c8' },
  { stall: 'C4', name: 'ข้าวแต๋นน้ำแตงโม', category: 'ของฝาก', emoji: '🍘', rating: '4.5', description: 'ข้าวแต๋นโฮมเมด กรอบเบา หวานน้ำอ้อย ของฝากติดไม้ติดมือ', hours: '06:00–12:00', kind: 'goods', color: '#e7dfca' },
  { stall: 'D1', name: 'ชาไทยรถเข็นลุงปัน', category: 'เครื่องดื่ม', emoji: '🧋', rating: '4.6', description: 'ชาไทยสูตรเข้ม หอมชาจริง ปรับหวานได้ทุกระดับ', hours: '06:00–11:30', kind: 'goods', color: '#ecd5c1' },
  { stall: 'D2', name: 'ดอกไม้สดบ้านสวน', category: 'ของฝาก', emoji: '💐', rating: '4.7', description: 'ดอกไม้ตัดใหม่จากสวน จัดช่อเล็ก ๆ ให้ไหว้พระหรือฝากคนพิเศษ', hours: '05:30–10:00', kind: 'goods', color: '#ead9dc' },
  { stall: 'D3', name: 'ไข่ป่ามป้าหมื่น', category: 'ของคาว', emoji: '🍳', rating: '4.8', description: 'ไข่ป่ามหอมใบตอง ใส่ต้นหอมกับพริกหนุ่ม ย่างเตาถ่านทุกเช้า', hours: '06:00–10:30', kind: 'food', color: '#f1e2bc' },
  { stall: 'D4', name: 'ขนมวงสูตรโบราณ', category: 'ของหวาน', emoji: '🍩', rating: '4.6', description: 'ขนมวงทอดใหม่ เคลือบน้ำอ้อยหอม ๆ สูตรที่ทำต่อกันมาสามรุ่น', hours: '06:00–11:00', kind: 'food', color: '#f0d7c2' }
];
const stallGrid = document.querySelector('#stall-grid');
const shopGrid = document.querySelector('#shop-grid');
const searchInput = document.querySelector('#shop-search');
const dialog = document.querySelector('#shop-dialog');
let activeCategory = 'ทั้งหมด';
let zoom = 100;
let toastTimer;

function render() {
  const term = searchInput.value.trim().toLocaleLowerCase('th');
  const matches = shop => (activeCategory === 'ทั้งหมด' || shop.category === activeCategory) && `${shop.name} ${shop.category} ${shop.stall}`.toLocaleLowerCase('th').includes(term);
  stallGrid.replaceChildren();
  shops.forEach(shop => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `stall ${shop.kind}${matches(shop) ? '' : ' filtered-out'}`;
    button.dataset.stall = shop.stall;
    button.setAttribute('aria-label', `แผง ${shop.stall} ${shop.name}`);
    button.innerHTML = `<span class="stall-icon">${shop.emoji}</span><span class="stall-name">${shop.name}</span><span class="stall-number">${shop.stall}</span>`;
    button.addEventListener('click', () => openShop(shop));
    stallGrid.append(button);
  });
  shopGrid.replaceChildren();
  shops.filter(matches).forEach((shop, index) => {
    const card = document.createElement('article');
    card.className = 'shop-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `ดูรายละเอียด ${shop.name}`);
    card.innerHTML = `<div class="shop-picture" style="background:${shop.color}"><small>แผง ${shop.stall}</small><span>${shop.emoji}</span></div><div class="card-copy"><div class="rating">★★★★★ <span>${shop.rating} · ${shop.category}</span></div><h3>${shop.name}</h3><p>${shop.description}</p><div class="card-bottom"><span>◷ ${shop.hours}</span><b>ดูร้าน ↗</b></div></div>`;
    card.addEventListener('click', () => openShop(shop));
    card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openShop(shop); } });
    card.style.animationDelay = `${index * 45}ms`;
    shopGrid.append(card);
  });
  document.querySelector('#no-results').hidden = shopGrid.children.length !== 0;
}

function openShop(shop) {
  document.querySelector('#dialog-emoji').textContent = shop.emoji;
  document.querySelector('#dialog-category').textContent = `${shop.category} · เปิด ${shop.hours}`;
  document.querySelector('#dialog-name').textContent = shop.name;
  document.querySelector('#dialog-description').textContent = shop.description;
  document.querySelector('#dialog-stall').textContent = shop.stall;
  document.querySelector('#dialog-rating').textContent = shop.rating;
  document.querySelector('#dialog-hours').textContent = shop.hours;
  document.querySelector('#dialog-map').dataset.stall = shop.stall;
  document.querySelectorAll('.stall').forEach(node => node.classList.toggle('selected', node.dataset.stall === shop.stall));
  dialog.showModal();
}
function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

document.querySelector('#category-list').addEventListener('click', event => {
  const chip = event.target.closest('[data-category]');
  if (!chip) return;
  activeCategory = chip.dataset.category;
  document.querySelectorAll('[data-category]').forEach(item => item.classList.toggle('active', item === chip));
  render();
});
searchInput.addEventListener('input', render);
document.querySelector('.search-box').addEventListener('click', event => { if (event.target.tagName !== 'INPUT') searchInput.focus(); });
document.addEventListener('keydown', event => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); searchInput.focus(); }
  if (event.key === 'Escape' && dialog.open) dialog.close();
});
document.querySelector('#zoom-in').addEventListener('click', () => setZoom(Math.min(130, zoom + 10)));
document.querySelector('#zoom-out').addEventListener('click', () => setZoom(Math.max(80, zoom - 10)));
function setZoom(value) { zoom = value; document.querySelector('#map-canvas').style.transform = `scale(${zoom / 100})`; document.querySelector('#zoom-label').textContent = `${zoom}%`; }
document.querySelector('#locate-button').addEventListener('click', () => showToast('คุณอยู่บริเวณทางเข้าตลาด — เดินตรงไปได้เลยเน้อ'));
document.querySelector('#surprise-button').addEventListener('click', () => openShop(shops[Math.floor(Math.random() * shops.length)]));
document.querySelectorAll('[data-open-stall]').forEach(button => button.addEventListener('click', () => openShop(shops.find(shop => shop.stall === button.dataset.openStall))));
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.querySelector('#dialog-map').addEventListener('click', () => {
  const stall = document.querySelector('#dialog-map').dataset.stall;
  dialog.close();
  document.querySelector('#map').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => document.querySelector(`.stall[data-stall="${stall}"]`)?.focus({ preventScroll: true }), 450);
});
render();

/* RGB cursor light + card spotlight */
(() => {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.append(glow);
  let x = 0, y = 0, queued = false;
  document.addEventListener('pointermove', event => {
    x = event.clientX; y = event.clientY;
    glow.classList.add('on');
    const card = event.target.closest?.('.shop-card');
    if (card) {
      const box = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - box.left}px`);
      card.style.setProperty('--my', `${event.clientY - box.top}px`);
    }
    if (!queued) { queued = true; requestAnimationFrame(() => { glow.style.transform = `translate(${x}px,${y}px)`; queued = false; }); }
  }, { passive: true });
  document.addEventListener('pointerleave', () => glow.classList.remove('on'));
})();

/* Shooter-game background: warp starfield, drifting enemies, auto-fired RGB lasers, explosions. Click anywhere to fire. */
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cv = document.createElement('canvas');
  cv.className = 'fx-canvas'; cv.setAttribute('aria-hidden', 'true');
  document.body.prepend(cv);
  const ctx = cv.getContext('2d');
  const COLORS = ['#ff2d55', '#2dff7a', '#3d8bff', '#ffe600', '#00e5ff', '#c13dff'];
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = () => COLORS[(Math.random() * COLORS.length) | 0];
  let W, H;
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize(); addEventListener('resize', resize);

  const stars = Array.from({ length: 120 }, () => ({ x: Math.random(), y: Math.random(), z: rand(.2, 1) }));
  const enemies = [], bolts = [], sparks = [], rings = [];
  let warp = 0, lastScroll = scrollY, spawnT = 0, fireT = 0, last = performance.now();
  addEventListener('scroll', () => { warp = Math.min(warp + Math.abs(scrollY - lastScroll) * .03, 7); lastScroll = scrollY; }, { passive: true });

  function explode(x, y, c, power = 1) {
    if (sparks.length > 360) sparks.splice(0, 40);
    for (let i = 0; i < 24 * power; i++) {
      const a = rand(0, Math.PI * 2), s = rand(40, 260) * power;
      sparks.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: rand(.45, 1), age: 0, c: Math.random() < .3 ? '#fff' : c });
    }
    rings.push({ x, y, r: 4, c, age: 0, life: .55 });
  }
  function shoot(tx, ty, sx, c, hitAtTarget) {
    const sy = H + 10, dx = tx - sx, dy = ty - sy, d = Math.hypot(dx, dy) || 1, speed = 1100;
    bolts.push({ x: sx, y: sy, vx: dx / d * speed, vy: dy / d * speed, c, tx, ty, hitAtTarget });
  }

  addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    const c = pick();
    shoot(event.clientX, event.clientY, W * (event.clientX < W / 2 ? .3 : .7), c, true);
    rings.push({ x: event.clientX, y: event.clientY, r: 8, c: '#fff', age: 0, life: .35, cross: true });
  }, { passive: true });

  function frame(now) {
    const dt = Math.min((now - last) / 1000, .05); last = now;
    warp *= Math.pow(.02, dt);
    spawnT -= dt; fireT -= dt;
    if (spawnT <= 0 && enemies.length < 7) {
      enemies.push({ x: rand(40, W - 40), y: -30, vx: rand(-25, 25), vy: rand(28, 60), s: rand(11, 19), c: pick(), r: rand(0, 6.28), vr: rand(-1.4, 1.4), n: Math.random() < .5 ? 3 : 4 });
      spawnT = rand(.8, 1.6);
    }
    if (fireT <= 0) {
      const live = enemies.filter(e => e.y > 30 && e.y < H * .8);
      if (live.length) {
        const e = live[(Math.random() * live.length) | 0], sx = Math.min(W - 20, Math.max(20, e.x + rand(-160, 160)));
        const t = (H - e.y) / 1100;
        shoot(e.x + e.vx * t, e.y + e.vy * t, sx, e.c, false);
      }
      fireT = rand(.45, 1.1);
    }

    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';

    for (const s of stars) {
      s.y += (.02 + s.z * .12 + warp * s.z * .35) * dt;
      if (s.y > 1) { s.y = 0; s.x = Math.random(); }
      const px = s.x * W, py = s.y * H, len = 1 + s.z * 2 + warp * s.z * 14;
      ctx.strokeStyle = `rgba(190,215,255,${.25 + s.z * .55})`;
      ctx.lineWidth = .6 + s.z * 1.2;
      ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, py - len); ctx.stroke();
    }

    for (let i = enemies.length - 1; i >= 0; i--) {
      const e = enemies[i];
      e.x += e.vx * dt; e.y += e.vy * dt; e.r += e.vr * dt;
      if (e.y > H + 40 || e.x < -40 || e.x > W + 40) { enemies.splice(i, 1); continue; }
      ctx.beginPath();
      for (let k = 0; k <= e.n; k++) {
        const a = e.r + k * Math.PI * 2 / e.n;
        ctx[k ? 'lineTo' : 'moveTo'](e.x + Math.cos(a) * e.s, e.y + Math.sin(a) * e.s);
      }
      ctx.strokeStyle = e.c + '40'; ctx.lineWidth = 7; ctx.stroke();
      ctx.strokeStyle = e.c; ctx.lineWidth = 1.8; ctx.stroke();
    }

    for (let i = bolts.length - 1; i >= 0; i--) {
      const b = bolts[i];
      b.x += b.vx * dt; b.y += b.vy * dt;
      let hit = false;
      if (b.hitAtTarget) {
        if (Math.hypot(b.x - b.tx, b.y - b.ty) < 22 || b.y < b.ty - 30) { explode(b.tx, b.ty, b.c, 1.3); hit = true; }
        enemies.forEach((e, j) => { if (Math.hypot(e.x - b.x, e.y - b.y) < e.s + 8) { explode(e.x, e.y, e.c, 1.2); enemies.splice(j, 1); hit = true; } });
      } else {
        const j = enemies.findIndex(e => Math.hypot(e.x - b.x, e.y - b.y) < e.s + 10);
        if (j > -1) { explode(enemies[j].x, enemies[j].y, enemies[j].c); enemies.splice(j, 1); hit = true; }
      }
      if (hit || b.y < -40 || b.x < -40 || b.x > W + 40) { bolts.splice(i, 1); continue; }
      const tx = b.x - b.vx * .05, ty = b.y - b.vy * .05;
      ctx.lineCap = 'round';
      ctx.strokeStyle = b.c + '55'; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(b.x, b.y); ctx.lineTo(tx, ty); ctx.stroke();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(b.x, b.y); ctx.lineTo(b.x - b.vx * .02, b.y - b.vy * .02); ctx.stroke();
    }

    for (let i = rings.length - 1; i >= 0; i--) {
      const r = rings[i]; r.age += dt;
      const p = r.age / r.life;
      if (p >= 1) { rings.splice(i, 1); continue; }
      ctx.globalAlpha = 1 - p; ctx.strokeStyle = r.c; ctx.lineWidth = 2;
      if (r.cross) {
        const g = 8 + p * 10, h = 6;
        ctx.beginPath();
        ctx.moveTo(r.x - g - h, r.y); ctx.lineTo(r.x - g, r.y); ctx.moveTo(r.x + g, r.y); ctx.lineTo(r.x + g + h, r.y);
        ctx.moveTo(r.x, r.y - g - h); ctx.lineTo(r.x, r.y - g); ctx.moveTo(r.x, r.y + g); ctx.lineTo(r.x, r.y + g + h);
        ctx.stroke();
      } else { ctx.beginPath(); ctx.arc(r.x, r.y, r.r + p * 70, 0, Math.PI * 2); ctx.stroke(); }
      ctx.globalAlpha = 1;
    }

    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i]; s.age += dt;
      if (s.age >= s.life) { sparks.splice(i, 1); continue; }
      s.x += s.vx * dt; s.y += s.vy * dt; s.vx *= .96; s.vy *= .96;
      ctx.globalAlpha = 1 - s.age / s.life; ctx.fillStyle = s.c;
      ctx.fillRect(s.x - 1.2, s.y - 1.2, 2.4, 2.4);
      ctx.globalAlpha = 1;
    }
    ctx.globalCompositeOperation = 'source-over';
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

/* Laser-eyes duo: two cut-out photos as background, beams fired from their eyes (RGB hue-cycle, ~2 Hz pulse). */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let saved = null;
  try { saved = localStorage.getItem('fx-laser'); } catch (e) {}
  let on = saved ? saved === 'on' : !reduced;

  const SRC = {
    man:  { src: '/images/man.webp',  cls: 'duo-man',  eyes: [[.5317, .1728], [.6605, .1880]] },
    logo: { src: '/images/logo.webp', cls: 'duo-logo', eyes: [[.4202, .2137], [.5119, .2121]] }
  };
  const duos = Object.values(SRC).map(d => {
    const box = document.createElement('div');
    box.className = `duo ${d.cls}`; box.setAttribute('aria-hidden', 'true');
    const img = new Image(); img.src = d.src; img.alt = ''; img.decoding = 'async';
    box.append(img); d.box = box; return d;
  });
  const cv = document.createElement('canvas');
  cv.className = 'laser-canvas'; cv.setAttribute('aria-hidden', 'true');
  document.body.prepend(cv);
  document.body.prepend(...duos.map(d => d.box));
  const ctx = cv.getContext('2d');

  const btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'fx-toggle';
  document.body.append(btn);

  let W, H, px = null, py = null, lastMove = -9, boost = 0, running = false;
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize(); addEventListener('resize', resize);
  addEventListener('pointermove', e => { px = e.clientX; py = e.clientY; lastMove = performance.now() / 1000; }, { passive: true });
  addEventListener('pointerdown', () => { boost = 1; }, { passive: true });

  function beam(x, y, ang, hue, width, alpha, len) {
    const x2 = x + Math.cos(ang) * len, y2 = y + Math.sin(ang) * len;
    ctx.lineCap = 'round';
    [[width * 3.2, .16, 60], [width * 1.6, .34, 58], [width * .45, .95, 92]].forEach(([w, a, l]) => {
      ctx.strokeStyle = `hsla(${hue},100%,${l}%,${a * alpha})`;
      ctx.lineWidth = w;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y2); ctx.stroke();
    });
  }
  function flare(x, y, r, hue, t) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `hsla(${hue},100%,95%,.95)`);
    g.addColorStop(.25, `hsla(${hue},100%,60%,.55)`);
    g.addColorStop(1, `hsla(${hue},100%,50%,0)`);
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = `hsla(${hue},100%,85%,.7)`; ctx.lineWidth = 1.5;
    for (let k = 0; k < 2; k++) {
      const a = t * .8 + k * Math.PI / 2;
      ctx.beginPath(); ctx.moveTo(x - Math.cos(a) * r * 1.8, y - Math.sin(a) * r * 1.8); ctx.lineTo(x + Math.cos(a) * r * 1.8, y + Math.sin(a) * r * 1.8); ctx.stroke();
    }
  }

  function frame(now) {
    if (!on) { running = false; return; }
    const t = now / 1000, dt = 1 / 60;
    boost = Math.max(0, boost - dt * 1.6);
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    const follow = px !== null && t - lastMove < 2.5;
    const tx = follow ? px : W * (.5 + .46 * Math.sin(t * .7));
    const ty = follow ? py : H * (.5 + .4 * Math.sin(t * 1.1 + 1));
    const pulse = .78 + .22 * Math.sin(t * Math.PI * 4);      /* 2 flashes per second */
    const len = Math.hypot(W, H) * 1.2;
    let n = 0;
    duos.forEach(d => {
      const r = d.box.getBoundingClientRect();
      if (r.right < 0 || r.left > W) return;
      d.eyes.forEach(([fx, fy], i) => {
        const ex = r.left + fx * r.width, ey = r.top + fy * r.height;
        if (ey < -50 || ey > H + 50) { n++; return; }
        const hue = (t * 160 + n * 90 + i * 40) % 360;
        const base = Math.atan2(ty - ey, tx - ex);
        const w = (5 + boost * 7) * pulse;
        beam(ex, ey, base, hue, w, pulse, len);
        if (boost > .02) [-.34, -.17, .17, .34].forEach((o, k) => beam(ex, ey, base + o * boost, (hue + 60 * (k + 1)) % 360, w * .6, boost, len));
        for (let k = 0; k < 7; k++) {
          const p = (t * .8 + k / 7 + n * .13) % 1, dx = ex + Math.cos(base) * p * len * .6, dy = ey + Math.sin(base) * p * len * .6;
          ctx.fillStyle = `hsla(${(hue + k * 25) % 360},100%,85%,${.8 * (1 - p)})`;
          ctx.beginPath(); ctx.arc(dx, dy, 2.6, 0, Math.PI * 2); ctx.fill();
        }
        flare(ex, ey, (24 + 14 * pulse) * (1 + boost * .8), hue, t);
        n++;
      });
    });
    ctx.globalCompositeOperation = 'source-over';
    requestAnimationFrame(frame);
  }
  function apply() {
    document.body.classList.toggle('fx-off', !on);
    btn.textContent = on ? '⚡ เลเซอร์ตา: เปิด' : '⚡ เลเซอร์ตา: ปิด';
    btn.setAttribute('aria-pressed', String(on));
    if (on && !running) { running = true; requestAnimationFrame(frame); }
    if (!on) ctx.clearRect(0, 0, W, H);
  }
  btn.addEventListener('click', () => {
    on = !on;
    try { localStorage.setItem('fx-laser', on ? 'on' : 'off'); } catch (e) {}
    apply();
  });
  apply();
})();
