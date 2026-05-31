// ═══════════════ RESERVASI CAFFE AY ═══════════════
// Source menu tunggal: menuData dari menu-data.js

// ── State ──────────────────────────────────────────────────────────────────────
let reservationCart = [];
let currentCategory = 'food';
let currentPage = 1;
const itemsPerPage = 8;
const foodCategories = ['heavy', 'soupy', 'snack', 'additional', 'special'];
const RESERVATION_DP = 50000;

// ── Helpers ────────────────────────────────────────────────────────────────────
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

// ── Order Choice Toggle ────────────────────────────────────────────────────────
function handleOrderChoice() {
    const isOrderNow = document.getElementById('orderNow').checked;
    const menuSection = document.getElementById('menu-section');
    const cartSection = document.getElementById('cart-section');
    const cartSectionMob = document.getElementById('cart-section-mobile');

    if (isOrderNow) {
        menuSection.classList.remove('hidden');
        // Desktop cart: hanya tampil di lg ke atas (lg:block menangani ini)
        cartSection.classList.remove('hidden');
        // Mobile cart: tampilkan hanya di bawah lg
        if (cartSectionMob) cartSectionMob.classList.remove('hidden');
        // Trigger reveal animation karena element sebelumnya display:none
        requestAnimationFrame(() => {
            menuSection.classList.add('visible');
            cartSection.classList.add('visible');
            if (cartSectionMob) cartSectionMob.classList.add('visible');
        });
    } else {
        menuSection.classList.add('hidden');
        cartSection.classList.add('hidden');
        if (cartSectionMob) cartSectionMob.classList.add('hidden');
        menuSection.classList.remove('visible');
        cartSection.classList.remove('visible');
        if (cartSectionMob) cartSectionMob.classList.remove('visible');
    }

    updateSummaryOrder();
}

// ── Summary Card Updates ───────────────────────────────────────────────────────
function updateSummaryAll() {
    const name = document.getElementById('resName').value.trim();
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const guests = document.getElementById('resGuests').value;

    // Update both desktop and mobile summary cards
    const ids = ['sum-name', 'mob-sum-name'];
    const dateIds = ['sum-date', 'mob-sum-date'];
    const timeIds = ['sum-time', 'mob-sum-time'];
    const guestsIds = ['sum-guests', 'mob-sum-guests'];

    // Nama
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (name) {
            el.textContent = name;
            el.classList.remove('italic', 'text-warm/50');
        } else {
            el.textContent = 'Nama belum diisi';
            el.classList.add('italic', 'text-warm/50');
        }
    });

    // Tanggal
    dateIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (date) {
            const d = new Date(date + 'T00:00:00');
            const opts = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
            el.textContent = d.toLocaleDateString('id-ID', opts);
            el.classList.remove('italic', 'text-warm/50');
        } else {
            el.textContent = 'Tanggal belum dipilih';
            el.classList.add('italic', 'text-warm/50');
        }
    });

    // Jam
    timeIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (time) {
            el.textContent = time + ' WIB';
            el.classList.remove('italic', 'text-warm/50');
        } else {
            el.textContent = 'Jam belum diisi';
            el.classList.add('italic', 'text-warm/50');
        }
    });

    // Jumlah Tamu
    guestsIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (guests) {
            el.textContent = guests + ' orang';
            el.classList.remove('italic', 'text-warm/50');
        } else {
            el.textContent = 'Jumlah tamu belum diisi';
            el.classList.add('italic', 'text-warm/50');
        }
    });

    updateSummaryOrder();
}

function updateSummaryOrder() {
    const isOrderNow = document.getElementById('orderNow').checked;
    const isOrderLater = document.getElementById('orderLater').checked;
    const orderIds = ['sum-order', 'mob-sum-order'];

    orderIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (isOrderNow) {
            el.textContent = 'Pesan Menu Sekarang';
            el.classList.remove('italic', 'text-warm/50');
        } else if (isOrderLater) {
            el.textContent = 'Pesan Menu Di Tempat';
            el.classList.remove('italic', 'text-warm/50');
        } else {
            el.textContent = 'Pilihan pesanan belum dipilih';
            el.classList.add('italic', 'text-warm/50');
        }
    });
}

// ── Render Menu Cards ──────────────────────────────────────────────────────────
function resRenderMenu() {
    const query = document.getElementById('resMenuSearch').value.toLowerCase();
    const grid = document.getElementById('resMenuGrid');
    const empty = document.getElementById('resMenuEmpty');
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
        document.getElementById('resPagination').innerHTML = '';
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
                        <select id="res-opt-${item.id}" class="bg-foam text-mocha text-[11px] font-body px-2 py-1 rounded-md border border-latte/30 outline-none max-w-[125px]">
                            ${item.options.list.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                        </select>
                    </div>`;
            } else if (item.options.type === 'split-price') {
                initialPrice = item.options.list[0].price;
                optionHtml = `
                    <div class="mt-2 flex items-center justify-between gap-2">
                        <span class="text-[10px] font-body text-warm/70">${item.options.name}:</span>
                        <select id="res-opt-${item.id}" onchange="resChangeCardPrice('${item.id}', this)" class="bg-foam text-mocha text-[11px] font-body px-2 py-1 rounded-md border border-latte/30 outline-none max-w-[125px]">
                            ${item.options.list.map(opt => `<option value="${opt.name}" data-price="${opt.price}">${opt.name} (${opt.price}K)</option>`).join('')}
                        </select>
                    </div>`;
            }
        }

        const displaySub = item.sub
            ? `<span class="bg-cream/90 text-mocha text-[9px] font-semibold px-2 py-0.5 rounded-full self-start mb-2">${item.sub}</span>`
            : '';

        const card = document.createElement('div');
        card.className = 'res-menu-card p-4';
        card.innerHTML = `
            <div>
                <div class="rounded-2xl h-28 mb-3 overflow-hidden bg-foam">
                    <img
                        src="${item.img}"
                        alt="${item.name}"
                        class="w-full h-full object-cover"
                        loading="lazy"
                    >
                </div>
                ${displaySub}
                <div class="flex justify-between items-start mb-1">
                    <h4 class="font-display font-bold text-sm text-mocha leading-tight">${item.name}</h4>
                    <span id="res-price-${item.id}" class="font-body font-bold text-sm text-warm shrink-0 ml-2">${initialPrice}K</span>
                </div>
                <p class="font-body text-xs text-warm/70 leading-snug">${item.desc || ''}</p>
            </div>
            <div class="mt-4">
                ${optionHtml}
                <button onclick="addToReservation('${item.id}')" class="mt-3 w-full bg-mocha text-cream text-xs font-body font-medium py-2 rounded-full hover:bg-espresso transition-all duration-200 flex items-center justify-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    Tambah ke Reservasi
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    resRenderPagination(filtered.length);
}

// ── Pagination ─────────────────────────────────────────────────────────────────
function resRenderPagination(totalItems) {
    const pagination = document.getElementById('resPagination');
    if (!pagination) return;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let html = `<button onclick="resChangePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} class="px-3 py-2 rounded-full border border-latte/20 bg-white disabled:opacity-40 disabled:cursor-not-allowed">&larr;</button>`;
    for (let i = 1; i <= totalPages; i++) {
        html += `<button onclick="resChangePage(${i})" class="px-4 py-2 rounded-full border ${currentPage === i ? 'bg-mocha text-cream' : 'bg-white text-mocha'}">${i}</button>`;
    }
    html += `<button onclick="resChangePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''} class="px-3 py-2 rounded-full border border-latte/20 bg-white disabled:opacity-40 disabled:cursor-not-allowed">&rarr;</button>`;
    pagination.innerHTML = html;
}

window.resChangePage = function (page) {
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
    resRenderMenu();
};

window.resChangeCardPrice = function (itemId, selectEl) {
    const selectedOption = selectEl.options[selectEl.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    const priceTag = document.getElementById(`res-price-${itemId}`);
    if (priceTag) priceTag.innerText = `${price}K`;
};

window.resFilterMenu = function (category) {
    currentCategory = category;
    currentPage = 1;
    document.querySelectorAll('.res-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`res-tab-${category}`)?.classList.add('active');
    resRenderMenu();
};

// ── Cart Logic ─────────────────────────────────────────────────────────────────
window.addToReservation = function (itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    let optionVal = '';
    let finalPrice = item.price;

    const optSelect = document.getElementById(`res-opt-${itemId}`);
    if (optSelect) {
        optionVal = optSelect.value;
        if (item.options && item.options.type === 'split-price') {
            const chosenOpt = item.options.list.find(o => o.name === optionVal);
            if (chosenOpt) finalPrice = chosenOpt.price;
        }
    }

    // Cek apakah item + opsi sama sudah ada di cart
    const existingIndex = reservationCart.findIndex(
        ci => ci.id === item.id && ci.option === optionVal
    );

    if (existingIndex >= 0) {
        reservationCart[existingIndex].quantity += 1;
    } else {
        reservationCart.push({
            id: item.id,
            name: item.name,
            option: optionVal,
            price: finalPrice,
            quantity: 1
        });
    }

    resRenderCart();

    // Animasi singkat pada badge (desktop & mobile)
    ['resCartBadge', 'resCartBadgeMob'].forEach(id => {
        const badge = document.getElementById(id);
        if (badge) {
            badge.classList.add('scale-125');
            setTimeout(() => badge.classList.remove('scale-125'), 200);
        }
    });
};

function resRenderCart() {
    // ── Desktop cart elements ──────────────────────────
    const cartItems = document.getElementById('resCartItems');
    const cartBadge = document.getElementById('resCartBadge');
    const cartEmpty = document.getElementById('resCartEmpty');
    const cartSummary = document.getElementById('resCartSummary');
    const subtotalEl = document.getElementById('resSubtotalDisplay');
    const dpEl = document.getElementById('resDpDisplay');

    // ── Mobile cart elements ───────────────────────────
    const cartItemsMob = document.getElementById('resCartItemsMob');
    const cartBadgeMob = document.getElementById('resCartBadgeMob');
    const cartEmptyMob = document.getElementById('resCartEmptyMob');
    const cartSummaryMob = document.getElementById('resCartSummaryMob');
    const subtotalElMob = document.getElementById('resSubtotalDisplayMob');
    const dpElMob = document.getElementById('resDpDisplayMob');

    if (!cartItems) return;

    // Hapus item cart yang sudah ada (keep empty state element)
    cartItems.querySelectorAll('.res-cart-item').forEach(el => el.remove());
    if (cartItemsMob) cartItemsMob.querySelectorAll('.res-cart-item').forEach(el => el.remove());

    if (reservationCart.length === 0) {
        cartEmpty.classList.remove('hidden');
        cartSummary.classList.add('hidden');
        if (cartBadge) cartBadge.textContent = '0';
        if (cartEmptyMob) cartEmptyMob.classList.remove('hidden');
        if (cartSummaryMob) cartSummaryMob.classList.add('hidden');
        if (cartBadgeMob) cartBadgeMob.textContent = '0';
        return;
    }

    cartEmpty.classList.add('hidden');
    cartSummary.classList.remove('hidden');
    if (cartEmptyMob) cartEmptyMob.classList.add('hidden');
    if (cartSummaryMob) cartSummaryMob.classList.remove('hidden');

    let totalQty = 0;
    let subtotal = 0;

    reservationCart.forEach((item, index) => {
        totalQty += item.quantity;
        const itemSubtotal = item.price * 1000 * item.quantity;
        subtotal += itemSubtotal;

        const optionBadge = item.option
            ? `<span class="bg-foam text-mocha text-[9px] px-2 py-0.5 rounded-full border border-latte/20 inline-block mt-1">${item.option}</span>`
            : '';

        const cartItemHtml = `
            <div class="flex-1 min-w-0">
                <h5 class="font-display font-bold text-xs text-mocha leading-tight truncate">${item.name}</h5>
                ${optionBadge}
            </div>
            <div class="flex items-center gap-1.5">
                <button onclick="resUpdateQuantity(${index}, -1)" class="qty-btn">&minus;</button>
                <span class="font-body text-xs font-bold text-mocha min-w-[16px] text-center">${item.quantity}</span>
                <button onclick="resUpdateQuantity(${index}, 1)" class="qty-btn">+</button>
            </div>
            <div class="text-right shrink-0">
                <span class="font-body font-bold text-xs text-mocha">${formatRp(itemSubtotal)}</span>
                <button onclick="resRemoveItem(${index})" class="block text-[10px] text-red-500 hover:underline mt-0.5 ml-auto">Hapus</button>
            </div>
        `;

        // Render ke desktop cart
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'res-cart-item';
        cartItemEl.innerHTML = cartItemHtml;
        cartItems.appendChild(cartItemEl);

        // Render ke mobile cart
        if (cartItemsMob) {
            const cartItemElMob = document.createElement('div');
            cartItemElMob.className = 'res-cart-item';
            cartItemElMob.innerHTML = cartItemHtml;
            cartItemsMob.appendChild(cartItemElMob);
        }
    });

    if (cartBadge) cartBadge.textContent = totalQty;
    if (cartBadgeMob) cartBadgeMob.textContent = totalQty;
    if (subtotalEl) subtotalEl.innerText = formatRp(subtotal);
    if (subtotalElMob) subtotalElMob.innerText = formatRp(subtotal);
    if (dpEl) dpEl.innerText = formatRp(RESERVATION_DP);
    if (dpElMob) dpElMob.innerText = formatRp(RESERVATION_DP);
}

window.resUpdateQuantity = function (index, delta) {
    if (reservationCart[index]) {
        reservationCart[index].quantity += delta;
        if (reservationCart[index].quantity <= 0) {
            reservationCart.splice(index, 1);
        }
        resRenderCart();
    }
};

window.resRemoveItem = function (index) {
    reservationCart.splice(index, 1);
    resRenderCart();
};

// ── WhatsApp Submission ────────────────────────────────────────────────────────
window.sendReservationToWhatsApp = function () {
    const name = document.getElementById('resName').value.trim();
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const guests = document.getElementById('resGuests').value;
    const isOrderNow = document.getElementById('orderNow').checked;
    const isOrderLater = document.getElementById('orderLater').checked;
    const notes = document.getElementById('resNotes').value.trim();
    const agreed = document.getElementById('resAgree').checked;
    const waNumber = '6281252055995';

    // ── Validasi ────────────────────────────────────────
    if (!name) {
        alert('Mohon masukkan nama lengkap.');
        document.getElementById('resName').focus();
        return;
    }
    if (!date) {
        alert('Mohon pilih tanggal reservasi.');
        document.getElementById('resDate').focus();
        return;
    }
    if (!time) {
        alert('Mohon pilih jam reservasi.');
        document.getElementById('resTime').focus();
        return;
    }
    if (!guests) {
        alert('Mohon masukkan jumlah tamu.');
        document.getElementById('resGuests').focus();
        return;
    }
    if (!isOrderNow && !isOrderLater) {
        alert('Mohon pilih pilihan pesanan.');
        return;
    }

    // ── Validasi jam operasional ────────────────────
    const selectedTime = document.getElementById('resTime').value;
    if (selectedTime < '09:00' || selectedTime > '23:00') {
        alert('Jam reservasi hanya tersedia antara 09:00 - 23:00.');
        document.getElementById('resTime').focus();
        return;
    }

    if (isOrderNow && reservationCart.length === 0) {
        alert('Anda memilih "Pesan Menu Sekarang". Mohon pilih minimal 1 menu dari daftar menu.');
        return;
    }
    if (!agreed) {
        alert('Mohon centang persetujuan ketentuan reservasi terlebih dahulu.');
        document.getElementById('resAgree').focus();
        return;
    }

    // ── Format tanggal ──────────────────────────────────
    const dateObj = new Date(date + 'T00:00:00');
    const dateFormatted = dateObj.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // ── Build message ───────────────────────────────────
    let message = `Halo CAFFE AY\n\nSaya ingin melakukan reservasi.\n\n`;
    message += `Nama: ${name}\n`;
    message += `Tanggal: ${dateFormatted}\n`;
    message += `Jam: ${time} WIB\n`;
    message += `Jumlah Orang: ${guests}\n\n`;

    if (isOrderNow) {
        message += `Pilihan Pesanan:\nPesan Menu Sekarang\n\n`;

        // Daftar menu
        message += `Menu Reservasi:\n`;
        reservationCart.forEach(item => {
            const optionText = item.option ? ` (${item.option})` : '';
            message += `• ${item.name}${optionText} x${item.quantity}\n`;
        });
        message += `\n`;

        // Subtotal & DP
        let subtotal = 0;
        reservationCart.forEach(item => {
            subtotal += item.price * 1000 * item.quantity;
        });
message += `Subtotal Menu:\n${formatRp(subtotal)}\n\n`;
        message += `DP Reservasi:\n${formatRp(RESERVATION_DP)}\n\n`;

        // Catatan
        if (notes) {
            message += `Catatan:\n${notes}\n\n`;
        }

        message += `Saya memahami bahwa:\n`;
message += `- Reservasi tidak dapat dijadwalkan ulang\n`;
        message += `- Perubahan pesanan dikonfirmasi ke admin/kasir\n`;
        message += `- DP wajib Rp50.000\n`;
        message += `- Reservasi aktif setelah DP diterima\n\n`;

    } else {
        message += `Pilihan Pesanan:\nPesan Menu Di Tempat\n\n`;

        // Catatan antrean reguler
        message += `Catatan:\nPesanan akan mengikuti antrean reguler kafe dan tidak diprioritaskan.\n\n`;

        // Catatan user
        if (notes) {
            message += `Catatan Tambahan:\n${notes}\n\n`;
        }

        message += `Saya memahami bahwa:\n`;
        message += `- Reservasi tidak dapat dijadwalkan ulang\n`;
        message += `- Perubahan pesanan dikonfirmasi ke admin/kasir\n`;
        message += `- DP akan diinformasikan oleh admin\n`;
        message += `- Reservasi aktif setelah DP diterima\n\n`;
    }

    message += `Mohon informasi proses pembayaran DP.\n\nTerima kasih.`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${waNumber}?text=${encodedMsg}`, '_blank');
};

// ── Initialize ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Set min date = hari ini
    const dateInput = document.getElementById('resDate');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.setAttribute('min', `${yyyy}-${mm}-${dd}`);
    }

    // Default: "Pesan Menu Di Tempat"
    const orderLater = document.getElementById('orderLater');
    if (orderLater) orderLater.checked = true;
    handleOrderChoice();

    // Radio change listeners
    document.querySelectorAll('input[name="orderChoice"]').forEach(radio => {
        radio.addEventListener('change', handleOrderChoice);
    });

    // Form input listeners untuk live update summary
    document.getElementById('resName')?.addEventListener('input', updateSummaryAll);
    document.getElementById('resDate')?.addEventListener('input', updateSummaryAll);
    document.getElementById('resTime')?.addEventListener('input', updateSummaryAll);
    document.getElementById('resGuests')?.addEventListener('input', updateSummaryAll);

    // Search listener
    document.getElementById('resMenuSearch')?.addEventListener('input', () => {
        currentPage = 1;
        resRenderMenu();
    });

    // Render awal
    resRenderMenu();
    resRenderCart();

    // ── Scroll Reveal ────────────────────────────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});