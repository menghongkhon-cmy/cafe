/* ==================== PRODUCT DATA ==================== */
const products = [
    {
        id: 1,
        name: "Cappuccino",
        category: "coffee",
        price: 3.50,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
        description: "Rich espresso with thick creamy steamed milk and cocoa powder topping."
    },
    {
        id: 2,
        name: "Iced Latte",
        category: "coffee",
        price: 4.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        description: "Chilled dark roast espresso blended with fresh milk over ice cubes."
    },
    {
        id: 3,
        name: "Caramel Macchiato",
        category: "coffee",
        price: 4.50,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80",
        description: "Freshly steamed milk with vanilla-flavored syrup marked with espresso and caramel."
    },
    {
        id: 4,
        name: "Americano",
        category: "coffee",
        price: 3.00,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=600&q=80",
        description: "Espresso shots topped with hot water create a light layer of crema."
    },
    {
        id: 5,
        name: "Iced Mocha Latte",
        category: "coffee",
        price: 4.75,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80",
        description: "Espresso with bittersweet mocha sauce, milk, and whipped cream over ice."
    },
    {
        id: 6,
        name: "Matcha Latte",
        category: "tea",
        price: 4.50,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
        description: "Smooth ceremonial grade green tea matcha whisked with warm oat milk."
    },
    {
        id: 7,
        name: "Strawberry Cake",
        category: "cake",
        price: 5.25,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
        description: "Fluffy vanilla sponge layered with fresh organic strawberries and cream."
    },
    {
        id: 8,
        name: "Chocolate Fudge Cake",
        category: "cake",
        price: 5.50,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
        description: "Decadent dark chocolate layers topped with silky rich chocolate ganache."
    },
    {
        id: 9,
        name: "Butter Croissant",
        category: "breakfast",
        price: 3.20,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
        description: "Flaky, buttery golden-baked French pastry served warm with butter."
    },
    {
        id: 10,
        name: "Avocado Toast",
        category: "breakfast",
        price: 6.50,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
        description: "Mashed avocado on toasted sourdough with poached egg and chilli flakes."
    },
    {
        id: 11,
        name: "Crispy French Fries",
        category: "snacks",
        price: 3.80,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
        description: "Golden crispy seasoned potato fries served with garlic mayo dip."
    },
    {
        id: 12,
        name: "Club Sandwich",
        category: "snacks",
        price: 6.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
        description: "Triple-decker toasted sandwich filled with grilled chicken, bacon, and veggies."
    }
];

const TABLE_ZONES = {
    1: 'window', 2: 'window', 3: 'window', 4: 'window', 5: 'window',
    6: 'work', 7: 'work', 8: 'work', 9: 'work', 10: 'work',
    11: 'booth', 12: 'booth', 13: 'booth', 14: 'booth', 15: 'booth',
    16: 'patio', 17: 'patio', 18: 'patio', 19: 'patio', 20: 'patio'
};

const TABLE_CAPS = {
    1: 2, 2: 2, 3: 2, 4: 2, 5: 2,
    6: 2, 7: 2, 8: 2, 9: 2, 10: 2,
    11: 4, 12: 4, 13: 4, 14: 6, 15: 6,
    16: 2, 17: 2, 18: 4, 19: 4, 20: 8
};

const ZONE_LABELS = {
    window: 'Window Side',
    work: 'Work Zone',
    booth: 'Group Booth',
    patio: 'Garden Patio'
};

const ADMIN_PASS = 'admin123';
const TAX_RATE = 0.10;
const DELIVERY_FEE = 2.00;

/* ==================== APP STATE ==================== */
let cart = JSON.parse(localStorage.getItem('bb_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('bb_favs')) || [];
let extraProducts = JSON.parse(localStorage.getItem('bb_extra_products')) || [];
let orders = JSON.parse(localStorage.getItem('bb_orders')) || [];
let reservations = JSON.parse(localStorage.getItem('bb_reservations')) || [];
let waitlist = JSON.parse(localStorage.getItem('bb_waitlist')) || [];
let waiterRequests = JSON.parse(localStorage.getItem('bb_requests')) || [];
let tables = JSON.parse(localStorage.getItem('bb_tables')) || createDefaultTables();

let currentCategory = 'all';
let searchKeyword = '';
let currentCustomizingProduct = null;
let currentLightboxIndex = 0;
let currentReviewIndex = 0;
let reviewInterval;
let orderType = localStorage.getItem('bb_order_type') || 'dine-in';
let selectedTable = Number(localStorage.getItem('bb_table')) || null;
let previewTable = null;
let isAdmin = sessionStorage.getItem('bb_admin') === '1';

function allProducts() {
    return [...products, ...extraProducts];
}

function createDefaultTables() {
    return Array.from({ length: 20 }, (_, i) => {
        const id = i + 1;
        return {
            id,
            label: 'T-' + String(id).padStart(2, '0'),
            capacity: TABLE_CAPS[id],
            zone: TABLE_ZONES[id],
            status: 'available',
            orderId: null
        };
    });
}

function saveTables() {
    localStorage.setItem('bb_tables', JSON.stringify(tables));
}

/* ==================== DOM HELPERS ==================== */
const $ = (id) => document.getElementById(id);
const menuGrid = $('menu-grid');

/* ==================== INITIALIZATION ==================== */
document.addEventListener('DOMContentLoaded', () => {
    const loader = $('loading-screen');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.classList.add('fade-out');
            setTimeout(() => { loader.style.display = 'none'; }, 600);
        }, 1200);
    }

    initQrTable();
    renderMenu();
    updateCartUI();
    updateFavUI();
    initTheme();
    startCountdown();
    initStatsCounter();
    initNav();
    initScrollReveal();
    initReviewSlider();
    initGallery();
    initSearch();
    initDrawers();
    initModals();
    initCheckout();
    initOrderTypeUI();
    initTablesUI();
    initReservationForm();
    initWaitlistForm();
    initWaiter();
    initAdmin();
    initContact();
    initNewsletter();
    initHeaderScroll();
    fillTableSelects();
    updateOccupancy();
    renderFloorSeats();
    renderWaitlistQueue();
    setOrderType(orderType, false);
    if (selectedTable) applyTableSelection(selectedTable, false);
});

/* ==================== QR TABLE (?table=7) ==================== */
function initQrTable() {
    const params = new URLSearchParams(window.location.search);
    const t = Number(params.get('table'));
    if (t >= 1 && t <= 20) {
        selectedTable = t;
        orderType = 'dine-in';
        localStorage.setItem('bb_table', String(t));
        localStorage.setItem('bb_order_type', 'dine-in');
        showTableBanner(t);
    }
}

function showTableBanner(num) {
    const banner = $('table-qr-banner');
    const label = $('banner-table-label');
    if (label) label.textContent = 'Table ' + num;
    if (banner) banner.classList.remove('hidden');
    const closeBtn = $('close-table-banner');
    if (closeBtn) {
        closeBtn.onclick = () => banner.classList.add('hidden');
    }
}

function applyTableSelection(num, toast = true) {
    const table = tables.find(t => t.id === num);
    if (!table) return;
    if (table.status === 'occupied' || table.status === 'cleaning') {
        showToast('That table is not available right now');
        return;
    }
    selectedTable = num;
    localStorage.setItem('bb_table', String(num));
    setOrderType('dine-in', false);
    updateTableBadges();
    renderFloorSeats();
    fillTableSelects();
    if (toast) showToast('Seated at Table ' + num);
}

function updateTableBadges() {
    const navBadge = $('nav-table-badge');
    const navNum = $('nav-table-num');
    const cartBadge = $('cart-table-badge');
    if (selectedTable && orderType === 'dine-in') {
        if (navBadge) navBadge.classList.remove('hidden');
        if (navNum) navNum.textContent = 'T-' + String(selectedTable).padStart(2, '0');
        if (cartBadge) {
            cartBadge.classList.remove('hidden');
            cartBadge.textContent = 'Table ' + selectedTable;
        }
    } else {
        if (navBadge) navBadge.classList.add('hidden');
        if (cartBadge) cartBadge.classList.add('hidden');
    }
}

/* ==================== MENU ==================== */
function renderMenu() {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';
    const list = allProducts().filter(p => {
        const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
        const q = searchKeyword.toLowerCase();
        const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
        return matchesCategory && matchesSearch;
    });

    if (list.length === 0) {
        menuGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;">☕ Sorry, we couldn't find that item.</div>`;
        return;
    }

    list.forEach(product => {
        const isFav = favorites.includes(product.id);
        const card = document.createElement('div');
        card.className = 'product-card reveal-up revealed';
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <button class="fav-card-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-header">
                    <h3 class="product-title">${product.name}</h3>
                    <span class="product-rating">⭐ ${product.rating}</span>
                </div>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${Number(product.price).toFixed(2)}</span>
                    <button class="add-cart-btn" onclick="openCustomModal(${product.id})">
                        <i class="fa-solid fa-plus"></i> Add
                    </button>
                </div>
            </div>`;
        menuGrid.appendChild(card);
    });
}

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        renderMenu();
    });
});

/* ==================== CUSTOMIZE & CART ==================== */
function openCustomModal(productId) {
    currentCustomizingProduct = allProducts().find(p => p.id === productId);
    if (!currentCustomizingProduct) return;
    const modal = $('custom-modal');
    const body = $('custom-body');
    if (!modal || !body) return;

    body.innerHTML = `
        <h3 style="margin-bottom:0.5rem;color:var(--text-dark);">${currentCustomizingProduct.name} Options</h3>
        <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1.5rem;">Customize to your taste.</p>
        <div class="custom-option-group">
            <h4>Size Selection</h4>
            <div class="options-pills" id="size-options">
                <span class="pill-opt selected" data-extra="0" data-val="Small">Small</span>
                <span class="pill-opt" data-extra="0.5" data-val="Medium">Medium (+ $0.50)</span>
                <span class="pill-opt" data-extra="1.0" data-val="Large">Large (+ $1.00)</span>
            </div>
        </div>
        <div class="custom-option-group">
            <h4>Milk Choice</h4>
            <div class="options-pills" id="milk-options">
                <span class="pill-opt selected" data-val="Regular Milk">Regular</span>
                <span class="pill-opt" data-val="Soy Milk">Soy Milk</span>
                <span class="pill-opt" data-val="Almond Milk">Almond Milk</span>
                <span class="pill-opt" data-val="Oat Milk">Oat Milk</span>
            </div>
        </div>
        <div class="custom-option-group">
            <h4>Extra Toppings</h4>
            <div class="options-pills" id="topping-options">
                <span class="pill-opt" data-extra="0.5" data-val="Extra Shot">Extra Shot (+ $0.50)</span>
                <span class="pill-opt" data-extra="0.3" data-val="Caramel Syrup">Caramel (+ $0.30)</span>
                <span class="pill-opt" data-extra="0.5" data-val="Whipped Cream">Whipped Cream (+ $0.50)</span>
            </div>
        </div>
        <button class="btn btn-primary w-100 mt-2" onclick="confirmAddToCart()">
            Add to Cart - <span id="custom-modal-price">$${Number(currentCustomizingProduct.price).toFixed(2)}</span>
        </button>`;

    modal.classList.add('active');
    body.querySelectorAll('.pill-opt').forEach(pill => {
        pill.addEventListener('click', () => {
            const parent = pill.parentElement;
            if (parent.id === 'topping-options') pill.classList.toggle('selected');
            else {
                parent.querySelectorAll('.pill-opt').forEach(p => p.classList.remove('selected'));
                pill.classList.add('selected');
            }
            updateCustomModalPrice();
        });
    });
}

function updateCustomModalPrice() {
    if (!currentCustomizingProduct) return;
    let price = Number(currentCustomizingProduct.price);
    const selectedSize = document.querySelector('#size-options .pill-opt.selected');
    if (selectedSize) price += parseFloat(selectedSize.dataset.extra || 0);
    document.querySelectorAll('#topping-options .pill-opt.selected').forEach(t => {
        price += parseFloat(t.dataset.extra || 0);
    });
    const el = $('custom-modal-price');
    if (el) el.innerText = '$' + price.toFixed(2);
}

function confirmAddToCart() {
    const sizeEl = document.querySelector('#size-options .pill-opt.selected');
    const milkEl = document.querySelector('#milk-options .pill-opt.selected');
    if (!sizeEl || !milkEl || !currentCustomizingProduct) return;

    const toppings = Array.from(document.querySelectorAll('#topping-options .pill-opt.selected'));
    let price = Number(currentCustomizingProduct.price);
    price += parseFloat(sizeEl.dataset.extra || 0);
    toppings.forEach(t => { price += parseFloat(t.dataset.extra || 0); });

    cart.push({
        cartId: Date.now(),
        id: currentCustomizingProduct.id,
        name: currentCustomizingProduct.name,
        image: currentCustomizingProduct.image,
        price,
        qty: 1,
        options: `${sizeEl.dataset.val}, ${milkEl.dataset.val}${toppings.length ? ', ' + toppings.map(t => t.dataset.val).join(' + ') : ''}`
    });
    saveAndRefreshCart();
    closeModal('custom-modal');
    showToast('✓ ' + currentCustomizingProduct.name + ' added to cart');
}

function cartTotals() {
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const tax = subtotal * TAX_RATE;
    const delivery = (orderType === 'delivery' && subtotal > 0) ? DELIVERY_FEE : 0;
    return { subtotal, tax, delivery, total: subtotal + tax + delivery, qty: cart.reduce((s, i) => s + i.qty, 0) };
}

function saveAndRefreshCart() {
    localStorage.setItem('bb_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const box = $('cart-items');
    if (!box) return;
    box.innerHTML = '';
    if (cart.length === 0) {
        box.innerHTML = '<p class="cart-empty-msg">Your cart is empty. Add something delicious.</p>';
    }
    cart.forEach(item => {
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-options">${item.options || ''}</div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="changeQty(${item.cartId}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${item.cartId}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeCartItem(${item.cartId})"><i class="fa-solid fa-trash"></i></button>`;
        box.appendChild(el);
    });

    const t = cartTotals();
    const setTxt = (id, v) => { const n = $(id); if (n) n.innerText = v; };
    setTxt('cart-subtotal', '$' + t.subtotal.toFixed(2));
    setTxt('cart-tax', '$' + t.tax.toFixed(2));
    setTxt('cart-delivery', '$' + t.delivery.toFixed(2));
    setTxt('cart-total', '$' + t.total.toFixed(2));
    setTxt('cart-count', String(t.qty));

    const feeLine = $('delivery-fee-line');
    if (feeLine) feeLine.style.display = orderType === 'delivery' ? '' : 'none';
    updateTableBadges();
    updateCartTypeBadge();
}

function changeQty(cartId, delta) {
    const item = cart.find(i => i.cartId === cartId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.cartId !== cartId);
    saveAndRefreshCart();
}

function removeCartItem(cartId) {
    cart = cart.filter(i => i.cartId !== cartId);
    saveAndRefreshCart();
    showToast('🗑 Item removed from cart');
}

function toggleFavorite(id) {
    const idx = favorites.indexOf(id);
    if (idx > -1) {
        favorites.splice(idx, 1);
        showToast('Removed from favorites');
    } else {
        favorites.push(id);
        showToast('Added to favorites');
    }
    localStorage.setItem('bb_favs', JSON.stringify(favorites));
    renderMenu();
    updateFavUI();
}

function updateFavUI() {
    const box = $('fav-items');
    const badge = $('fav-count');
    if (badge) badge.innerText = favorites.length;
    if (!box) return;
    box.innerHTML = '';
    if (!favorites.length) {
        box.innerHTML = '<p class="cart-empty-msg">No favorites yet. Tap the heart on a menu item.</p>';
        return;
    }
    favorites.forEach(id => {
        const item = allProducts().find(p => p.id === id);
        if (!item) return;
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${Number(item.price).toFixed(2)}</div>
            </div>
            <button class="remove-item-btn" onclick="toggleFavorite(${item.id})"><i class="fa-solid fa-trash"></i></button>`;
        box.appendChild(el);
    });
}

/* ==================== ORDER TYPE ==================== */
function setOrderType(type, toast = true) {
    orderType = type;
    localStorage.setItem('bb_order_type', type);
    document.querySelectorAll('.order-type-chip').forEach(b => {
        b.classList.toggle('active', b.dataset.orderType === type);
    });
    document.querySelectorAll('.order-type-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.type === type);
    });
    const tableGroup = $('checkout-table-group');
    const addrGroup = $('checkout-address-group');
    const splitGroup = $('split-bill-group');
    const chkTable = $('chk-table');
    const chkAddr = $('chk-address');
    if (tableGroup) tableGroup.classList.toggle('hidden', type !== 'dine-in');
    if (addrGroup) addrGroup.classList.toggle('hidden', type !== 'delivery');
    if (splitGroup) splitGroup.classList.toggle('hidden', type !== 'dine-in');
    if (chkTable) chkTable.required = type === 'dine-in';
    if (chkAddr) chkAddr.required = type === 'delivery';
    updateCartUI();
    if (toast) showToast('Ordering: ' + type.replace('-', ' '));
}

function updateCartTypeBadge() {
    const el = $('cart-type-badge');
    if (!el) return;
    const icons = { 'dine-in': 'chair', takeaway: 'bag-shopping', delivery: 'motorcycle' };
    const labels = { 'dine-in': 'Dine-In', takeaway: 'Takeaway', delivery: 'Delivery' };
    el.innerHTML = `<i class="fa-solid fa-${icons[orderType]}"></i> ${labels[orderType]}`;
}

function initOrderTypeUI() {
    document.querySelectorAll('.order-type-chip').forEach(btn => {
        btn.addEventListener('click', () => setOrderType(btn.dataset.orderType));
    });
    document.querySelectorAll('.order-type-btn').forEach(btn => {
        btn.addEventListener('click', () => setOrderType(btn.dataset.type, false));
    });
}

/* ==================== TABLES ==================== */
function fillTableSelects() {
    const selects = [$('chk-table'), $('waiter-table')].filter(Boolean);
    selects.forEach(sel => {
        const current = sel.value;
        sel.innerHTML = '<option value="">Select table</option>';
        tables.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t.id;
            opt.textContent = `${t.label} · ${t.capacity} seats · ${t.status}`;
            if (t.status === 'occupied' || t.status === 'cleaning') opt.disabled = true;
            sel.appendChild(opt);
        });
        if (selectedTable) sel.value = String(selectedTable);
        else if (current) sel.value = current;
    });
}

function renderFloorSeats() {
    document.querySelectorAll('.table-seat').forEach(btn => {
        const id = Number(btn.dataset.table);
        const t = tables.find(x => x.id === id);
        btn.classList.remove('available', 'occupied', 'reserved', 'cleaning', 'selected');
        if (t) btn.classList.add(t.status);
        if (selectedTable === id) btn.classList.add('selected');
    });
    updateOccupancy();
}

function updateOccupancy() {
    const free = tables.filter(t => t.status === 'available').length;
    const set = (id, v) => { const n = $(id); if (n) n.textContent = v; };
    set('tables-available', free);
    set('tables-total', tables.length);
    set('waitlist-count-display', waitlist.length);
    const wait = free === 0 ? '~20' : free < 5 ? '~12' : '~5';
    set('avg-wait', wait);
}

function showTableInfo(id) {
    previewTable = id;
    const t = tables.find(x => x.id === id);
    if (!t) return;
    const empty = $('table-info-empty');
    const sel = $('table-info-selected');
    if (empty) empty.classList.add('hidden');
    if (sel) sel.classList.remove('hidden');
    const set = (i, v) => { const n = $(i); if (n) n.textContent = v; };
    set('selected-table-num', t.label);
    set('selected-table-capacity', t.capacity);
    set('selected-table-zone', ZONE_LABELS[t.zone] || t.zone);
    set('selected-table-status', t.status);
}

function initTablesUI() {
    document.querySelectorAll('.table-seat').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.table);
            showTableInfo(id);
            document.querySelectorAll('.table-seat').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });
    const confirmBtn = $('confirm-table-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            if (previewTable) applyTableSelection(previewTable);
        });
    }
    const heroBtn = $('hero-scan-table-btn');
    if (heroBtn) heroBtn.addEventListener('click', () => openModal('table-modal'));
    const tableForm = $('table-number-form');
    if (tableForm) {
        tableForm.addEventListener('submit', e => {
            e.preventDefault();
            const n = Number($('manual-table-input').value);
            const err = $('table-input-err');
            if (n < 1 || n > 20) {
                if (err) err.textContent = 'Enter a table from 1 to 20';
                return;
            }
            if (err) err.textContent = '';
            applyTableSelection(n);
            closeModal('table-modal');
        });
    }
}

/* ==================== CHECKOUT ==================== */
function initCheckout() {
    const checkoutBtn = $('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (!cart.length) {
                showToast('Your cart is empty!');
                return;
            }
            closeDrawers();
            const totals = cartTotals();
            const val = $('checkout-total-val');
            if (val) val.innerText = '$' + totals.total.toFixed(2);
            $('checkout-step-form')?.classList.remove('hidden');
            $('checkout-step-success')?.classList.add('hidden');
            fillTableSelects();
            if (selectedTable && $('chk-table')) $('chk-table').value = String(selectedTable);
            openModal('checkout-modal');
        });
    }

    const form = $('checkout-form');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (orderType === 'dine-in' && !$('chk-table')?.value) {
            showToast('Please select your table number');
            return;
        }
        const totals = cartTotals();
        const orderNum = '#BB' + Math.floor(1000 + Math.random() * 9000);
        const tableNum = orderType === 'dine-in' ? Number($('chk-table').value) : null;
        const order = {
            id: orderNum,
            type: orderType,
            table: tableNum,
            customer: $('chk-name')?.value || '',
            phone: $('chk-phone')?.value || '',
            address: $('chk-address')?.value || '',
            payment: $('chk-payment')?.value || '',
            items: cart.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
            total: totals.total,
            status: 'received',
            createdAt: Date.now()
        };
        orders.unshift(order);
        localStorage.setItem('bb_orders', JSON.stringify(orders));

        if (tableNum) {
            const t = tables.find(x => x.id === tableNum);
            if (t) {
                t.status = 'occupied';
                t.orderId = orderNum;
                saveTables();
                selectedTable = tableNum;
                localStorage.setItem('bb_table', String(tableNum));
            }
        }

        if ($('order-number-display')) $('order-number-display').innerText = orderNum;
        const msg = $('checkout-success-msg');
        if (msg) {
            msg.innerHTML = orderType === 'dine-in'
                ? `We'll bring your order to <strong>Table ${tableNum}</strong>.`
                : 'Thank you for ordering from <strong>Brew & Beans</strong>.';
        }
        const finalLabel = $('step-final-label');
        if (finalLabel) finalLabel.textContent = orderType === 'dine-in' ? 'Served' : 'Delivered';

        $('checkout-step-form')?.classList.add('hidden');
        $('checkout-step-success')?.classList.remove('hidden');
        cart = [];
        saveAndRefreshCart();
        renderFloorSeats();
        fillTableSelects();
        simulateOrderProgress();
        showToast('Order ' + orderNum + ' placed');
    });

    $('finish-checkout-btn')?.addEventListener('click', () => closeModal('checkout-modal'));
}

function simulateOrderProgress() {
    const ids = ['step-received', 'step-preparing', 'step-ready', 'step-delivered', 'step-final'];
    ids.forEach(id => $(id)?.classList.remove('completed', 'active'));
    $('step-received')?.classList.add('completed');
    setTimeout(() => $('step-preparing')?.classList.add('completed', 'active'), 2000);
    setTimeout(() => $('step-ready')?.classList.add('completed', 'active'), 4000);
    setTimeout(() => {
        $('step-delivered')?.classList.add('completed');
        $('step-final')?.classList.add('completed');
    }, 6000);
}

/* ==================== RESERVATIONS & WAITLIST ==================== */
function initReservationForm() {
    const form = $('reservation-form');
    if (!form) return;
    const date = $('res-date');
    if (date) date.min = new Date().toISOString().split('T')[0];
    form.addEventListener('submit', e => {
        e.preventDefault();
        const rec = {
            id: Date.now(),
            name: $('res-name').value,
            phone: $('res-phone').value,
            date: $('res-date').value,
            time: $('res-time').value,
            guests: $('res-guests').value,
            zone: $('res-zone').value,
            notes: $('res-notes')?.value || '',
            table: null,
            status: 'pending'
        };
        reservations.unshift(rec);
        localStorage.setItem('bb_reservations', JSON.stringify(reservations));
        form.reset();
        showToast('Reservation received. We will confirm by phone.');
    });
}

function initWaitlistForm() {
    const form = $('waitlist-form');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        waitlist.push({
            id: Date.now(),
            name: $('wl-name').value,
            phone: $('wl-phone').value,
            guests: $('wl-guests').value,
            joined: Date.now()
        });
        localStorage.setItem('bb_waitlist', JSON.stringify(waitlist));
        form.reset();
        renderWaitlistQueue();
        updateOccupancy();
        showToast('You are on the waitlist');
    });
}

function renderWaitlistQueue() {
    const ol = $('waitlist-queue');
    if (!ol) return;
    if (!waitlist.length) {
        ol.innerHTML = '<li class="waitlist-empty">No one waiting — tables available!</li>';
        return;
    }
    ol.innerHTML = waitlist.map(w => `<li>${w.name} · ${w.guests} guests</li>`).join('');
}

function initWaiter() {
    $('waiter-btn')?.addEventListener('click', () => {
        fillTableSelects();
        if (selectedTable && $('waiter-table')) $('waiter-table').value = String(selectedTable);
        openModal('waiter-modal');
    });
    $('waiter-request-form')?.addEventListener('submit', e => {
        e.preventDefault();
        const table = $('waiter-table').value;
        const reason = document.querySelector('input[name="waiter-reason"]:checked')?.value || 'help';
        waiterRequests.unshift({ id: Date.now(), table, reason, time: Date.now(), done: false });
        localStorage.setItem('bb_requests', JSON.stringify(waiterRequests));
        closeModal('waiter-modal');
        showToast('Waiter notified for Table ' + table);
    });
}

/* ==================== ADMIN ==================== */
function initAdmin() {
    $('admin-login-btn')?.addEventListener('click', () => openModal('admin-login-modal'));
    $('admin-login-form')?.addEventListener('submit', e => {
        e.preventDefault();
        const pass = $('admin-pass-input')?.value;
        const err = $('admin-login-err');
        if (pass === ADMIN_PASS) {
            isAdmin = true;
            sessionStorage.setItem('bb_admin', '1');
            closeModal('admin-login-modal');
            refreshAdmin();
            openModal('admin-dashboard-modal');
            if (err) err.textContent = '';
        } else if (err) err.textContent = 'Incorrect passcode';
    });
    $('admin-logout-btn')?.addEventListener('click', () => {
        isAdmin = false;
        sessionStorage.removeItem('bb_admin');
        closeModal('admin-dashboard-modal');
        showToast('Logged out');
    });
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            $(btn.dataset.tab)?.classList.add('active');
        });
    });
    $('add-product-form')?.addEventListener('submit', e => {
        e.preventDefault();
        extraProducts.push({
            id: Date.now(),
            name: $('new-prod-name').value,
            category: $('new-prod-cat').value,
            price: parseFloat($('new-prod-price').value),
            rating: 4.8,
            image: $('new-prod-img').value,
            description: $('new-prod-desc').value
        });
        localStorage.setItem('bb_extra_products', JSON.stringify(extraProducts));
        e.target.reset();
        renderMenu();
        refreshAdmin();
        showToast('Product added');
    });
    $('admin-mark-all-clean')?.addEventListener('click', () => {
        tables.forEach(t => {
            if (t.status === 'cleaning') {
                t.status = 'available';
                t.orderId = null;
            }
        });
        saveTables();
        renderFloorSeats();
        refreshAdmin();
    });
}

function refreshAdmin() {
    const set = (id, v) => { const n = $(id); if (n) n.textContent = v; };
    const activeOrders = orders.filter(o => o.status !== 'served' && o.status !== 'delivered');
    set('admin-order-count', orders.length);
    set('admin-stat-orders', activeOrders.length);
    set('admin-stat-tables-free', tables.filter(t => t.status === 'available').length);
    set('admin-stat-reservations', reservations.length);
    set('admin-stat-waitlist', waitlist.length);
    set('admin-stat-requests', waiterRequests.filter(r => !r.done).length);

    const ordersBody = $('admin-orders-list');
    if (ordersBody) {
        ordersBody.innerHTML = orders.map(o => `
            <tr>
                <td>${o.id}</td>
                <td>${o.type}</td>
                <td>${o.table ? 'T-' + String(o.table).padStart(2, '0') : '—'}</td>
                <td>${o.customer}<br><small>${o.phone}</small></td>
                <td>${o.items.map(i => i.qty + '× ' + i.name).join(', ')}</td>
                <td>$${Number(o.total).toFixed(2)}</td>
                <td><span class="status-badge ${o.status}">${o.status}</span></td>
                <td>
                    <select onchange="updateOrderStatus('${o.id}', this.value)">
                        <option ${o.status === 'received' ? 'selected' : ''}>received</option>
                        <option ${o.status === 'preparing' ? 'selected' : ''}>preparing</option>
                        <option ${o.status === 'ready' ? 'selected' : ''}>ready</option>
                        <option ${o.status === 'served' ? 'selected' : ''}>served</option>
                        <option ${o.status === 'delivered' ? 'selected' : ''}>delivered</option>
                    </select>
                </td>
            </tr>`).join('') || '<tr><td colspan="8">No orders yet</td></tr>';
    }

    const floor = $('admin-floor-grid');
    if (floor) {
        floor.innerHTML = tables.map(t =>
            `<button class="admin-floor-cell ${t.status}" onclick="cycleTableStatus(${t.id})">${t.label}</button>`
        ).join('');
    }

    const resBody = $('admin-reservations-list');
    if (resBody) {
        resBody.innerHTML = reservations.map(r => `
            <tr>
                <td>${r.name}</td>
                <td>${r.phone}</td>
                <td>${r.date} ${r.time}</td>
                <td>${r.guests}</td>
                <td>${r.zone}</td>
                <td>${r.table || '—'}</td>
                <td><button class="btn btn-sm btn-gold" onclick="seatReservation(${r.id})">Seat</button></td>
            </tr>`).join('') || '<tr><td colspan="7">No reservations</td></tr>';
    }

    const wlBody = $('admin-waitlist-list');
    if (wlBody) {
        wlBody.innerHTML = waitlist.map((w, i) => `
            <tr>
                <td>${i + 1}</td>
                <td>${w.name}</td>
                <td>${w.phone}</td>
                <td>${w.guests}</td>
                <td>${new Date(w.joined).toLocaleTimeString()}</td>
                <td><button class="btn btn-sm btn-primary" onclick="seatWaitlist(${w.id})">Seat</button></td>
            </tr>`).join('') || '<tr><td colspan="6">Empty</td></tr>';
    }

    const reqBody = $('admin-requests-list');
    if (reqBody) {
        reqBody.innerHTML = waiterRequests.map(r => `
            <tr>
                <td>T-${r.table}</td>
                <td>${r.reason}</td>
                <td>${new Date(r.time).toLocaleTimeString()}</td>
                <td>${r.done ? 'Done' : `<button class="btn btn-sm btn-secondary" onclick="completeRequest(${r.id})">Complete</button>`}</td>
            </tr>`).join('') || '<tr><td colspan="4">No requests</td></tr>';
    }

    const prodBody = $('admin-products-list');
    if (prodBody) {
        prodBody.innerHTML = allProducts().map(p => `
            <tr>
                <td><img class="admin-img-thumb" src="${p.image}" alt=""></td>
                <td>${p.name}</td>
                <td>${p.category}</td>
                <td>$${Number(p.price).toFixed(2)}</td>
                <td>${extraProducts.some(x => x.id === p.id)
                    ? `<button class="btn btn-sm btn-secondary" onclick="deleteProduct(${p.id})">Delete</button>`
                    : '—'}</td>
            </tr>`).join('');
    }
}

function updateOrderStatus(id, status) {
    const o = orders.find(x => x.id === id);
    if (!o) return;
    o.status = status;
    localStorage.setItem('bb_orders', JSON.stringify(orders));
    if ((status === 'served' || status === 'delivered') && o.table) {
        const t = tables.find(x => x.id === o.table);
        if (t) {
            t.status = 'cleaning';
            t.orderId = null;
            saveTables();
        }
    }
    renderFloorSeats();
    refreshAdmin();
}

function cycleTableStatus(id) {
    const t = tables.find(x => x.id === id);
    if (!t) return;
    const order = ['available', 'occupied', 'reserved', 'cleaning'];
    t.status = order[(order.indexOf(t.status) + 1) % order.length];
    saveTables();
    renderFloorSeats();
    refreshAdmin();
}

function seatReservation(id) {
    const r = reservations.find(x => x.id === id);
    const free = tables.find(t => t.status === 'available' && (r.zone === 'any' || t.zone === r.zone));
    if (!free) {
        showToast('No matching table free');
        return;
    }
    free.status = 'occupied';
    r.table = free.id;
    saveTables();
    localStorage.setItem('bb_reservations', JSON.stringify(reservations));
    renderFloorSeats();
    refreshAdmin();
    showToast('Seated at ' + free.label);
}

function seatWaitlist(id) {
    const free = tables.find(t => t.status === 'available');
    if (!free) {
        showToast('No free tables');
        return;
    }
    free.status = 'occupied';
    waitlist = waitlist.filter(w => w.id !== id);
    localStorage.setItem('bb_waitlist', JSON.stringify(waitlist));
    saveTables();
    renderWaitlistQueue();
    renderFloorSeats();
    refreshAdmin();
    showToast('Guest seated at ' + free.label);
}

function completeRequest(id) {
    const r = waiterRequests.find(x => x.id === id);
    if (r) r.done = true;
    localStorage.setItem('bb_requests', JSON.stringify(waiterRequests));
    refreshAdmin();
}

function deleteProduct(id) {
    extraProducts = extraProducts.filter(p => p.id !== id);
    localStorage.setItem('bb_extra_products', JSON.stringify(extraProducts));
    renderMenu();
    refreshAdmin();
}

/* ==================== SEARCH / DRAWERS / MODALS ==================== */
function initSearch() {
    $('search-btn')?.addEventListener('click', () => {
        $('search-modal')?.classList.add('active');
        $('search-input')?.focus();
    });
    $('close-search')?.addEventListener('click', () => $('search-modal')?.classList.remove('active'));
    $('search-input')?.addEventListener('input', e => {
        searchKeyword = e.target.value;
        renderMenu();
        renderSearchResults();
    });
}

function renderSearchResults() {
    const box = $('search-results');
    if (!box) return;
    const q = searchKeyword.toLowerCase();
    if (!q) {
        box.innerHTML = '';
        return;
    }
    const hits = allProducts().filter(p => p.name.toLowerCase().includes(q)).slice(0, 6);
    box.innerHTML = hits.map(p => `
        <div class="search-result-item" onclick="openCustomModal(${p.id})">
            <img src="${p.image}" alt="">
            <div><strong>${p.name}</strong><br><small>$${Number(p.price).toFixed(2)}</small></div>
        </div>`).join('');
}

function initDrawers() {
    $('cart-btn')?.addEventListener('click', () => {
        $('cart-drawer')?.classList.add('active');
        $('drawer-overlay')?.classList.add('active');
    });
    $('fav-btn')?.addEventListener('click', () => {
        $('fav-drawer')?.classList.add('active');
        $('drawer-overlay')?.classList.add('active');
    });
    $('close-cart')?.addEventListener('click', closeDrawers);
    $('close-fav')?.addEventListener('click', closeDrawers);
    $('drawer-overlay')?.addEventListener('click', closeDrawers);
}

function closeDrawers() {
    $('cart-drawer')?.classList.remove('active');
    $('fav-drawer')?.classList.remove('active');
    $('drawer-overlay')?.classList.remove('active');
}

function initModals() {
    [
        ['close-custom-modal', 'custom-modal'],
        ['close-checkout-modal', 'checkout-modal'],
        ['close-admin-login', 'admin-login-modal'],
        ['close-admin-dash', 'admin-dashboard-modal'],
        ['close-table-modal', 'table-modal'],
        ['close-waiter-modal', 'waiter-modal']
    ].forEach(([btn, modal]) => {
        $(btn)?.addEventListener('click', () => closeModal(modal));
    });
}

function openModal(id) { $(id)?.classList.add('active'); }
function closeModal(id) { $(id)?.classList.remove('active'); }

/* ==================== GALLERY / REVIEWS ==================== */
function initGallery() {
    const items = document.querySelectorAll('.gallery-item');
    const lightbox = $('lightbox');
    const img = $('lightbox-img');
    if (!items.length || !lightbox) return;
    items.forEach(item => {
        item.addEventListener('click', () => {
            currentLightboxIndex = parseInt(item.dataset.index, 10);
            img.src = items[currentLightboxIndex].querySelector('img').src;
            lightbox.classList.add('active');
        });
    });
    $('lightbox-close')?.addEventListener('click', () => lightbox.classList.remove('active'));
    $('lightbox-next')?.addEventListener('click', () => {
        currentLightboxIndex = (currentLightboxIndex + 1) % items.length;
        img.src = items[currentLightboxIndex].querySelector('img').src;
    });
    $('lightbox-prev')?.addEventListener('click', () => {
        currentLightboxIndex = (currentLightboxIndex - 1 + items.length) % items.length;
        img.src = items[currentLightboxIndex].querySelector('img').src;
    });
}

function initReviewSlider() {
    const slider = $('reviews-slider');
    const cards = document.querySelectorAll('.review-card');
    const dotsContainer = $('slider-dots');
    if (!slider || !cards.length) return;
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        cards.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = 'dot' + (idx === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToReview(idx));
            dotsContainer.appendChild(dot);
        });
    }
    $('next-review')?.addEventListener('click', () => goToReview((currentReviewIndex + 1) % cards.length));
    $('prev-review')?.addEventListener('click', () => goToReview((currentReviewIndex - 1 + cards.length) % cards.length));
    reviewInterval = setInterval(() => goToReview((currentReviewIndex + 1) % cards.length), 5000);
}

function goToReview(index) {
    const slider = $('reviews-slider');
    const dots = document.querySelectorAll('.dot');
    const cards = document.querySelectorAll('.review-card');
    if (!slider) return;
    currentReviewIndex = index;
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    cards.forEach((c, i) => c.classList.toggle('active', i === index));
}

/* ==================== FORMS / UTILS ==================== */
function initContact() {
    $('contact-form')?.addEventListener('submit', e => {
        e.preventDefault();
        let valid = true;
        const name = $('contact-name');
        const email = $('contact-email');
        const phone = $('contact-phone');
        const message = $('contact-message');
        if (name && !name.value.trim()) { showError(name, 'Name is required'); valid = false; } else if (name) clearError(name);
        if (email && !email.value.includes('@')) { showError(email, 'Valid email required'); valid = false; } else if (email) clearError(email);
        if (phone && !phone.value.trim()) { showError(phone, 'Phone number required'); valid = false; } else if (phone) clearError(phone);
        if (message && message.value.trim().length < 10) { showError(message, 'Message must be at least 10 chars'); valid = false; } else if (message) clearError(message);
        if (valid) {
            showToast('Thank you! Message sent successfully.');
            e.target.reset();
        }
    });
}

function showError(input, msg) {
    const el = input.parentElement?.querySelector('.error-msg');
    if (el) el.innerText = msg;
}
function clearError(input) {
    const el = input.parentElement?.querySelector('.error-msg');
    if (el) el.innerText = '';
}

function initNewsletter() {
    $('newsletter-form')?.addEventListener('submit', e => {
        e.preventDefault();
        showToast('Subscribed to the newsletter');
        e.target.reset();
    });
}

function startCountdown() {
    if (!$('hours')) return;
    let time = 3600 * 5 + 1800;
    setInterval(() => {
        time--;
        if (time < 0) time = 3600 * 5;
        const h = Math.floor(time / 3600);
        const m = Math.floor((time % 3600) / 60);
        const s = time % 60;
        $('hours').innerText = String(h).padStart(2, '0');
        $('minutes').innerText = String(m).padStart(2, '0');
        $('seconds').innerText = String(s).padStart(2, '0');
    }, 1000);
}

function initTheme() {
    const themeBtn = $('theme-btn');
    if (!themeBtn) return;
    const saved = localStorage.getItem('bb_theme') || 'light';
    document.body.setAttribute('data-theme', saved);
    themeBtn.innerHTML = saved === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    themeBtn.addEventListener('click', () => {
        const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', next);
        localStorage.setItem('bb_theme', next);
        themeBtn.innerHTML = next === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
}

function showToast(msg) {
    const container = $('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function initHeaderScroll() {
    window.addEventListener('scroll', () => {
        $('header')?.classList.toggle('scrolled', window.scrollY > 80);
        $('back-to-top')?.classList.toggle('show', window.scrollY > 400);
    });
    $('back-to-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initNav() {
    $('nav-toggle')?.addEventListener('click', () => $('nav-menu')?.classList.add('active'));
    $('nav-close')?.addEventListener('click', () => $('nav-menu')?.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => $('nav-menu')?.classList.remove('active'));
    });
}

function initScrollReveal() {
    const els = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('revealed');
        });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
}

function initStatsCounter() {
    const container = $('stats-container');
    if (!container) return;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.querySelectorAll('.stat-number').forEach(num => {
                const target = parseFloat(num.dataset.target);
                const decimals = Number(num.dataset.decimals || 0);
                let current = 0;
                const step = target / 50;
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        num.innerText = decimals ? target.toFixed(decimals) : target + '+';
                        clearInterval(timer);
                    } else {
                        num.innerText = decimals ? current.toFixed(decimals) : Math.floor(current) + '+';
                    }
                }, 30);
            });
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.5 });
    observer.observe(container);
}
