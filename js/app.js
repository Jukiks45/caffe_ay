// Removed legacy mobile menu toggle that used the `hidden` class.

// ── State ────────────────────────────────────────────────────────────────────
let cart = {};
let currentCategory = 'food';
let currentPage = 1;
const itemsPerPage = 8;

let shippingCost = 0;
let customerLocation = null;
let selectedDistrict = '';
let selectedVillage = '';
let selectedHamlet = '';

const foodCategories = ['heavy', 'soupy', 'snack', 'additional', 'special'];

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatRp(amount) {
  return 'Rp' + amount.toLocaleString('id-ID');
}

function getCategoryIconSvg(category) {
  if (category === 'drinks') {
    return `<svg class="w-16 h-16 text-cream" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>`;
  } else if (category === 'soupy') {
    return `<svg class="w-16 h-16 text-cream" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 2v4M8 2v4M16 2v4M2 18a8 8 0 0 0 16 0H2zM4 22h12"/></svg>`;
  } else {
    return `<svg class="w-16 h-16 text-cream" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 2v20M17 5v14M7 5v14"/></svg>`;
  }
}

// ── Render Menu Cards ─────────────────────────────────────────────────────────
function renderMenu() {
  const query = document.getElementById('menuSearch').value.toLowerCase();
  const grid = document.getElementById('menuItemsGrid');
  const empty = document.getElementById('menuEmptyState');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = menuData.filter(item => {
    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      (item.desc && item.desc.toLowerCase().includes(query)) ||
      (item.sub && item.sub.toLowerCase().includes(query));
    const matchesCategory =
      currentCategory === 'food'
        ? foodCategories.includes(item.category)
        : item.category === currentCategory;
    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  const start = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(start, start + itemsPerPage);

  paginatedItems.forEach(item => {
    let optionHtml = '';
    let initialPrice = item.price;

    if (item.options) {
      if (item.options.type === 'select') {
        optionHtml = `
          <div class="mt-2 flex items-center justify-between gap-2">
            <span class="text-[10px] font-body text-warm/70">${item.options.name}:</span>
            <select id="opt-${item.id}" class="bg-foam text-mocha text-[11px] font-body px-2 py-1 rounded-md border border-latte/30 outline-none max-w-[125px]">
              ${item.options.list.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
            </select>
          </div>`;
      } else if (item.options.type === 'split-price') {
        initialPrice = item.options.list[0].price;
        optionHtml = `
          <div class="mt-2 flex items-center justify-between gap-2">
            <span class="text-[10px] font-body text-warm/70">${item.options.name}:</span>
            <select id="opt-${item.id}" onchange="changeMenuVariant('${item.id}', this)" class="bg-foam text-mocha text-[11px] font-body px-2 py-1 rounded-md border border-latte/30 outline-none max-w-[125px]">
              ${item.options.list.map(opt => `<option value="${opt.name}" data-price="${opt.price}" data-img="${opt.img || ''}">${opt.name} (${opt.price}K)</option>`).join('')}
            </select>
          </div>`;
      } else if (item.options.type === 'image-select') {
        optionHtml = `
          <div class="mt-2 flex items-center justify-between gap-2">
            <span class="text-[10px] font-body text-warm/70">${item.options.name}:</span>
            <select id="opt-${item.id}" onchange="changeMenuVariant('${item.id}', this)" class="bg-foam text-mocha text-[11px] font-body px-2 py-1 rounded-md border border-latte/30 outline-none max-w-[125px]">
              ${item.options.list.map(opt => `<option value="${opt.name}" data-img="${opt.img || ''}">${opt.name}</option>`).join('')}
            </select>
          </div>`;
      }
    }

    const displaySub = item.sub
      ? `<span class="bg-cream/90 text-mocha text-[9px] font-semibold px-2 py-0.5 rounded-full self-start mb-2">${item.sub}</span>`
      : '';

    const card = document.createElement('div');
    card.className = 'menu-card bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between border border-latte/15 p-4';
    card.innerHTML = `
      <div>
        <div class="rounded-2xl h-28 bg-gradient-to-br ${item.gradient} relative mb-3 flex items-center justify-center overflow-hidden">
          <span class="font-display text-cream font-bold text-lg ${item.img ? 'opacity-0' : 'opacity-25'} select-none uppercase tracking-widest">${item.category}</span>
          <div class="absolute inset-0 flex items-center justify-center ${item.img ? 'opacity-0' : 'opacity-10'}">
            ${getCategoryIconSvg(item.category)}
          </div>
          ${item.img ? `<img id="img-${item.id}" src="${item.img}" alt="${item.name}" class="absolute inset-0 w-full h-full object-cover" onerror="this.style.display='none'">` : ''}
        </div>
        ${displaySub}
        <div class="flex justify-between items-start mb-1">
          <h4 class="font-display font-bold text-sm text-mocha leading-tight">${item.name}</h4>
          <span id="price-${item.id}" class="font-body font-bold text-sm text-warm shrink-0 ml-2">${initialPrice}K</span>
        </div>
        <p class="font-body text-xs text-warm/70 leading-snug">${item.desc || ''}</p>
      </div>
      <div class="mt-4">
        ${optionHtml}
        <button onclick="handleAddClick('${item.id}')" class="mt-3 w-full bg-mocha text-cream text-xs font-body font-medium py-2 rounded-full hover:bg-espresso transition-all duration-200 flex items-center justify-center gap-1">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          Tambah ke Keranjang
        </button>
      </div>
    `;
    grid.appendChild(card);
  });

  renderPagination(filtered.length);
}

function renderPagination(totalItems) {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let html = `<button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} class="px-3 py-2 rounded-full border border-latte/20 bg-white">←</button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button onclick="changePage(${i})" class="px-4 py-2 rounded-full border ${currentPage === i ? 'bg-mocha text-cream' : 'bg-white text-mocha'}">${i}</button>`;
  }
  html += `<button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''} class="px-3 py-2 rounded-full border border-latte/20 bg-white">→</button>`;
  pagination.innerHTML = html;
}

window.changePage = function (page) {
  const filtered = menuData.filter(item => {
    const matchesCategory =
      currentCategory === 'food'
        ? foodCategories.includes(item.category)
        : item.category === currentCategory;
    return matchesCategory;
  });
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderMenu();
};

window.changeMenuVariant = function(itemId, selectEl) {
  const selected = selectEl.options[selectEl.selectedIndex];
  const img   = selected.dataset.img;
  const price = selected.dataset.price;

  const imageEl = document.getElementById(`img-${itemId}`);
  const priceEl = document.getElementById(`price-${itemId}`);

  if (img && imageEl) {
    imageEl.src = img;
  }
  if (price && priceEl) {
    priceEl.innerText = `${price}K`;
  }
};

window.filterMenu = function (category) {
  currentCategory = category;
  currentPage = 1;
  document.querySelectorAll('.menu-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`tab-${category}`)?.classList.add('active');
  renderMenu();
};

// ── Cart Logic ────────────────────────────────────────────────────────────────
window.handleAddClick = function (itemId) {
  const item = menuData.find(i => i.id === itemId);
  if (!item) return;

  let optionVal = '';
  let finalPrice = item.price;

  const optSelect = document.getElementById(`opt-${itemId}`);
  if (optSelect) {
    optionVal = optSelect.value;
    if (item.options && item.options.type === 'split-price') {
      const chosenOpt = item.options.list.find(o => o.name === optionVal);
      if (chosenOpt) finalPrice = chosenOpt.price;
    }
  }

  const cartKey = `${itemId}_${optionVal}`;
  if (cart[cartKey]) {
    cart[cartKey].quantity += 1;
  } else {
    cart[cartKey] = { id: item.id, name: item.name, option: optionVal, price: finalPrice, quantity: 1, category: item.category };
  }

  renderCart();

  const btn = document.getElementById('floatingCartBtn');
  if (btn) {
    btn.classList.add('scale-110', 'bg-warm', 'text-mocha');
    setTimeout(() => btn.classList.remove('scale-110', 'bg-warm', 'text-mocha'), 200);
  }
};

function renderCart() {
  const cartList = document.getElementById('cartItemsList');
  const cartCount = document.getElementById('cartCountBadge');
  const cartCheckoutArea = document.getElementById('cartCheckoutArea');
  const cartSubtotalEl = document.getElementById('cartSubtotalPrice');
  const cartShippingEl = document.getElementById('cartShippingPrice');
  const cartTotalEl = document.getElementById('cartTotalPrice');
  const shippingDisplayEl = document.getElementById('shippingCostDisplay');
  if (!cartList) return;

  cartList.innerHTML = '';

  const keys = Object.keys(cart);
  let totalQty = 0;
  let subtotal = 0;

  if (keys.length === 0) {
    cartList.innerHTML = `
      <div class="text-center py-12 text-warm/60 flex flex-col items-center justify-center">
        <svg class="w-16 h-16 mb-3 opacity-40 text-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
        <p class="font-body text-sm">Keranjang belanja Anda kosong.</p>
      </div>`;
    if (cartCount) cartCount.classList.add('hidden');
    if (cartCheckoutArea) cartCheckoutArea.classList.add('hidden');
    return;
  }

  if (cartCount) cartCount.classList.remove('hidden');
  if (cartCheckoutArea) cartCheckoutArea.classList.remove('hidden');

  keys.forEach(key => {
    const item = cart[key];
    totalQty += item.quantity;
    const itemSubtotal = item.price * item.quantity * 1000;
    subtotal += itemSubtotal;

    const optionBadge = item.option
      ? `<span class="bg-foam text-mocha text-[9px] px-2 py-0.5 rounded-full border border-latte/20 inline-block mt-1">${item.option}</span>`
      : '';

    const cartItemEl = document.createElement('div');
    cartItemEl.className = 'flex items-center justify-between gap-4 p-3 bg-white rounded-2xl border border-latte/10 shadow-xs';
    cartItemEl.innerHTML = `
      <div class="flex-1 min-w-0">
        <h5 class="font-display font-bold text-xs text-mocha leading-tight truncate">${item.name}</h5>
        ${optionBadge}
        <div class="text-warm font-body font-semibold text-xs mt-1">${formatRp(item.price * 1000)}</div>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="updateQuantity('${key}', -1)" class="w-6 h-6 rounded-full bg-foam text-mocha hover:bg-latte hover:text-mocha transition-all flex items-center justify-center text-xs font-bold">-</button>
        <span class="font-body text-xs font-bold text-mocha min-w-[12px] text-center">${item.quantity}</span>
        <button onclick="updateQuantity('${key}', 1)" class="w-6 h-6 rounded-full bg-foam text-mocha hover:bg-latte hover:text-mocha transition-all flex items-center justify-center text-xs font-bold">+</button>
      </div>
      <div class="text-right shrink-0">
        <span class="font-body font-bold text-xs text-mocha">${formatRp(itemSubtotal)}</span>
        <button onclick="removeFromCart('${key}')" class="block text-[10px] text-red-500 hover:underline mt-0.5 ml-auto">Hapus</button>
      </div>`;
    cartList.appendChild(cartItemEl);
  });

  const total = subtotal + shippingCost;
  if (cartCount) cartCount.innerText = totalQty;
  if (cartSubtotalEl) cartSubtotalEl.innerText = formatRp(subtotal);
  if (cartShippingEl) cartShippingEl.innerText = formatRp(shippingCost);
  if (cartTotalEl) cartTotalEl.innerText = formatRp(total);
  if (shippingDisplayEl) shippingDisplayEl.innerText = formatRp(shippingCost);
}

window.updateQuantity = function (key, delta) {
  if (cart[key]) {
    cart[key].quantity += delta;
    if (cart[key].quantity <= 0) delete cart[key];
    renderCart();
  }
};

window.removeFromCart = function (key) {
  if (cart[key]) {
    delete cart[key];
    renderCart();
  }
};

// ── Toggle Checkout (Collapsible) ────────────────────────────────────────────
const checkoutIcon = `<svg class="w-5 h-5 text-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>`;

window.toggleCheckout = function () {
  const formContent = document.getElementById('checkoutFormContent');
  const chevron = document.getElementById('checkoutChevron');
  const label = document.getElementById('checkoutToggleText');
  if (!formContent) return;

  const isOpen = !formContent.classList.contains('hidden');
  if (isOpen) {
    formContent.classList.add('hidden');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
    if (label) label.innerHTML = `${checkoutIcon} Checkout ▼`;
  } else {
    formContent.classList.remove('hidden');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
    if (label) label.innerHTML = `${checkoutIcon} Checkout ▲`;
  }
};

// ── Toggle Cart Drawer ────────────────────────────────────────────────────────
window.toggleCart = function () {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (!drawer) return;
  if (drawer.classList.contains('translate-x-full')) {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('pointer-events-none', 'opacity-0');
    overlay.classList.add('opacity-100');
  } else {
    drawer.classList.add('translate-x-full');
    overlay.classList.add('pointer-events-none', 'opacity-0');
    overlay.classList.remove('opacity-100');
  }
};

// ── Delivery Zone Logic ───────────────────────────────────────────────────────
function loadDistricts() {
  const sel = document.getElementById('districtSelect');
  if (!sel) return;
  sel.innerHTML = '<option value="">-- Pilih Kecamatan --</option>';
  Object.keys(deliveryAreas).forEach(district => {
    const opt = document.createElement('option');
    opt.value = district;
    opt.textContent = district;
    sel.appendChild(opt);
  });
}

window.onDistrictChange = function () {
  selectedDistrict = document.getElementById('districtSelect').value;
  selectedVillage = '';
  selectedHamlet = '';
  shippingCost = 0;
  updateShippingDisplay();

  const villageSel = document.getElementById('villageSelect');
  villageSel.innerHTML = '<option value="">-- Pilih Desa --</option>';

  if (selectedDistrict && deliveryAreas[selectedDistrict]) {
    Object.keys(deliveryAreas[selectedDistrict]).forEach(village => {
      const opt = document.createElement('option');
      opt.value = village;
      opt.textContent = village;
      villageSel.appendChild(opt);
    });
  }

  // Reset hamlet
  resetHamletFields();
  renderCart();
};

window.onVillageChange = function () {
  selectedVillage = document.getElementById('villageSelect').value;
  selectedHamlet = '';
  shippingCost = 0;
  updateShippingDisplay();

  resetHamletFields();

  if (!selectedDistrict || !selectedVillage) { renderCart(); return; }

  const villageData = deliveryAreas[selectedDistrict][selectedVillage];
  if (!villageData) { renderCart(); return; }

  if ('__ALL__' in villageData) {
    // Desa ini punya ongkir flat, tampilkan input manual dusun
    shippingCost = villageData['__ALL__'];
    document.getElementById('hamletSelectContainer').classList.add('hidden');
    document.getElementById('hamletManualContainer').classList.remove('hidden');
  } else {
    // Tampilkan select dusun
    document.getElementById('hamletSelectContainer').classList.remove('hidden');
    document.getElementById('hamletManualContainer').classList.add('hidden');

    const hamletSel = document.getElementById('hamletSelect');
    hamletSel.innerHTML = '<option value="">-- Pilih Dusun --</option>';
    Object.keys(villageData).forEach(hamlet => {
      const opt = document.createElement('option');
      opt.value = hamlet;
      opt.textContent = hamlet;
      hamletSel.appendChild(opt);
    });
  }

  updateShippingDisplay();
  renderCart();
};

window.onHamletChange = function () {
  selectedHamlet = document.getElementById('hamletSelect').value;

  if (selectedDistrict && selectedVillage && selectedHamlet) {
    const cost = deliveryAreas[selectedDistrict][selectedVillage][selectedHamlet];
    shippingCost = (cost !== undefined) ? cost : 0;
  } else {
    shippingCost = 0;
  }

  updateShippingDisplay();
  renderCart();
};

function resetHamletFields() {
  const hamletSel = document.getElementById('hamletSelect');
  if (hamletSel) hamletSel.innerHTML = '<option value="">-- Pilih Dusun --</option>';
  const hamletManual = document.getElementById('hamletManual');
  if (hamletManual) hamletManual.value = '';
  document.getElementById('hamletSelectContainer')?.classList.remove('hidden');
  document.getElementById('hamletManualContainer')?.classList.add('hidden');
}

function updateShippingDisplay() {
  const el = document.getElementById('shippingCostDisplay');
  if (el) el.innerText = formatRp(shippingCost);
  const cartShippingEl = document.getElementById('cartShippingPrice');
  if (cartShippingEl) cartShippingEl.innerText = formatRp(shippingCost);
  // Update total too
  const cartTotalEl = document.getElementById('cartTotalPrice');
  const cartSubtotalEl = document.getElementById('cartSubtotalPrice');
  if (cartTotalEl && cartSubtotalEl) {
    const subtotalText = cartSubtotalEl.innerText.replace(/[^0-9]/g, '');
    const subtotal = parseInt(subtotalText) || 0;
    cartTotalEl.innerText = formatRp(subtotal + shippingCost);
  }
}

// ── GPS (getCurrentPosition — stabil & simpel) ──────────────────────────────
window.getCustomerLocation = function () {
  const statusEl = document.getElementById('locationStatus');
  const btn = document.getElementById('getLocationBtn');

  if (!navigator.geolocation) {
    if (statusEl) statusEl.innerText = 'Browser tidak mendukung GPS.';
    return;
  }

  if (statusEl) statusEl.innerText = '⏳ Membagikan lokasi ke kurir...';
  if (btn) {
    btn.disabled = true;
    btn.classList.add('opacity-60');
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const accuracy = Math.round(position.coords.accuracy);

      customerLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: accuracy
      };

      // Tentukan label kualitas akurasi
      let quality = '';
      if (accuracy <= 20) {
        quality = 'Sangat Akurat';
      } else if (accuracy <= 50) {
        quality = 'Akurat';
      } else if (accuracy <= 100) {
        quality = 'Cukup Akurat';
      } else {
        quality = 'Kurang Akurat';
      }

      // Tampilkan status berhasil — tidak memblokir checkout
      if (statusEl) {
        statusEl.innerHTML = `✓ Lokasi pengiriman berhasil dibagikan<br>Akurasi: ${accuracy}m (${quality})`;
        if (accuracy <= 50) {
          statusEl.className = 'font-body text-xs text-center text-green-600 font-medium';
        } else {
          statusEl.className = 'font-body text-xs text-center text-yellow-600 font-medium';
        }
      }

      if (btn) {
        btn.textContent = '📍 Lokasi Sudah Dibagikan';
        btn.classList.add('bg-green-50', 'border-green-200', 'text-green-700');
        btn.classList.remove('opacity-60');
        btn.disabled = false;
      }
    },
    (error) => {
      let msg = '⚠ Gagal mendapatkan lokasi. Silakan aktifkan GPS lalu coba lagi.';
      if (error.code === 1) msg = 'Izin lokasi ditolak. Mohon izinkan akses lokasi di browser.';
      else if (error.code === 3) msg = 'Waktu habis. Pastikan GPS aktif lalu coba lagi.';
      if (statusEl) {
        statusEl.innerText = msg;
        statusEl.className = 'font-body text-xs text-center text-red-500 font-medium';
      }
      if (btn) {
        btn.disabled = false;
        btn.classList.remove('opacity-60');
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 30000,
      maximumAge: 0
    }
  );
};

// ── WhatsApp Checkout ─────────────────────────────────────────────────────────
window.sendOrderToWhatsApp = function () {
  const customerName = document.getElementById('orderName').value.trim();
  const district = document.getElementById('districtSelect').value;
  const village = document.getElementById('villageSelect').value;
  const addressDetail = document.getElementById('addressDetail').value.trim();
  const waNumber = '6285851150138';

  // Tentukan dusun (manual atau select)
  const hamletManualContainer = document.getElementById('hamletManualContainer');
  let hamlet = '';
  if (hamletManualContainer && !hamletManualContainer.classList.contains('hidden')) {
    hamlet = document.getElementById('hamletManual').value.trim();
  } else {
    hamlet = document.getElementById('hamletSelect').value;
  }

  // Validasi
  if (!customerName) {
    alert('Mohon masukkan nama pemesan.');
    document.getElementById('orderName').focus();
    return;
  }
  if (!district) {
    alert('Mohon pilih kecamatan.');
    document.getElementById('districtSelect').focus();
    return;
  }
  if (!village) {
    alert('Mohon pilih desa.');
    document.getElementById('villageSelect').focus();
    return;
  }
  if (!addressDetail) {
    alert('Mohon isi alamat detail (RT/RW, patokan, dll).');
    document.getElementById('addressDetail').focus();
    return;
  }
  if (!customerLocation) {
    alert('Silakan bagikan lokasi terlebih dahulu.');
    document.getElementById('getLocationBtn').focus();
    return;
  }

  // Buat link Google Maps
  const { lat, lng } = customerLocation;
  const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`;

  // Format pesanan (tanpa harga — admin akan hitung ulang)
  let orderItems = '';
  Object.keys(cart).forEach(key => {
    const item = cart[key];
    const optionText = item.option ? ` (${item.option})` : '';
    orderItems += `• ${item.quantity}x ${item.name}${optionText}\n`;
  });

  const hamletLine = hamlet ? `Dusun: ${hamlet}\n` : '';

  const message =
    `Halo CAFFE AY

Nama: ${customerName}

Alamat Pengiriman:
Kecamatan: ${district}
Desa: ${village}
${hamletLine}Detail: ${addressDetail}

Pesanan:
${orderItems}
Ongkir: ${formatRp(shippingCost)}

Link Lokasi GPS:
${mapsLink}

Terima kasih`;

  const encodedMsg = encodeURIComponent(message);
  window.open(`https://wa.me/${waNumber}?text=${encodedMsg}`, '_blank');
};

// ── Initialize ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  loadDistricts();

  const searchInput = document.getElementById('menuSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentPage = 1;
      renderMenu();
    });
  }

  // ── Scroll Reveal ─────────────────────────────────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // ── Smooth Active Nav ─────────────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('border-b-2', 'border-mocha');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('border-b-2', 'border-mocha');
      }
    });
  });

  // ── Premium Mobile Menu Animation Control ────────────────────────────────
  const menuBtn = document.getElementById('menuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenuOverlay = document.getElementById('mobileMenu');
  const mobileMenuPanel = document.getElementById('mobileMenuPanel');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  let scrollY = 0;

  function openMobileMenu() {
    if (mobileMenuOverlay && mobileMenuPanel) {
      scrollY = window.scrollY;
      mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
      mobileMenuPanel.classList.remove('translate-x-full');
      document.body.classList.add('menu-open');
      document.body.style.top = `-${scrollY}px`;
    }
  }

  function closeMobileMenu() {
    if (mobileMenuOverlay && mobileMenuPanel) {
      mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
      mobileMenuPanel.classList.add('translate-x-full');
      document.body.classList.remove('menu-open');
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
    }
  }

  if (menuBtn) menuBtn.addEventListener('click', openMobileMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', (e) => {
      if (e.target === mobileMenuOverlay) closeMobileMenu();
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
});

// ── Gallery Fullscreen ─────────────────────────────────────────────────────────
window.openGallery = function (src) {
    document.getElementById('galleryPreview').src = src;
    document.getElementById('galleryModal').classList.remove('hidden');
    document.getElementById('galleryModal').classList.add('flex');
};

window.closeGallery = function () {
    document.getElementById('galleryModal').classList.remove('flex');
    document.getElementById('galleryModal').classList.add('hidden');
};

// Close gallery modal on click outside image
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                window.closeGallery();
            }
        });
    }
});
