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
