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

/* ==================== APP STATE ==================== */
let cart = JSON.parse(localStorage.getItem('bb_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('bb_favs')) || [];
let currentCategory = 'all';
let searchKeyword = '';
let currentCustomizingProduct = null;
let currentLightboxIndex = 0;
let currentReviewIndex = 0;
let reviewInterval;

/* ==================== DOM ELEMENTS ==================== */
const menuGrid = document.getElementById('menu-grid');
const categoryBtns = document.querySelectorAll('.category-btn');
const cartBtn = document.getElementById('cart-btn');
const favBtn = document.getElementById('fav-btn');
const cartDrawer = document.getElementById('cart-drawer');
const favDrawer = document.getElementById('fav-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const closeCartBtn = document.getElementById('close-cart');
const closeFavBtn = document.getElementById('close-fav');
const cartItemsContainer = document.getElementById('cart-items');
const favItemsContainer = document.getElementById('fav-items');
const cartCountBadge = document.getElementById('cart-count');
const favCountBadge = document.getElementById('fav-count');

/* ==================== INITIALIZATION ==================== */
document.addEventListener('DOMContentLoaded', () => {
    // Hide Loader
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 600);
    }, 1200);

    // Initial Renders
    renderMenu();
    updateCartUI();
    updateFavUI();
    initTheme();
    startCountdown();
    initStatsCounter();
    initScrollAnimations();
    initReviewSlider();
});

/* ==================== MENU FILTERING & RENDERING ==================== */
function renderMenu() {
    menuGrid.innerHTML = '';

    const filtered = products.filter(p => {
        const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchKeyword.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        menuGrid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 3rem; font-size: 1.2rem;">☕ Sorry, we couldn't find that item.</div>`;
        return;
    }

    filtered.forEach(product => {
        const isFav = favorites.some(id => id === product.id);
        const card = document.createElement('div');
        card.className = 'product-card reveal-up';
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
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-cart-btn" onclick="openCustomModal(${product.id})">
                        <i class="fa-solid fa-plus"></i> Add
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

// Filter Event Listeners
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        renderMenu();
    });
});

/* ==================== CUSTOMIZATION & CART LOGIC ==================== */
function openCustomModal(productId) {
    currentCustomizingProduct = products.find(p => p.id === productId);
    const modal = document.getElementById('custom-modal');
    const body = document.getElementById('custom-body');

    body.innerHTML = `
        <h3 style="margin-bottom: 0.5rem; color: var(--text-dark);">${currentCustomizingProduct.name} Options</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Customize your drink / dish to your preference.</p>
        
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
            Add to Cart - <span id="custom-modal-price">$${currentCustomizingProduct.price.toFixed(2)}</span>
        </button>
    `;

    modal.classList.add('active');

    // Attach Pill Toggles
    const pills = body.querySelectorAll('.pill-opt');
    pills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            const parent = pill.parentElement;
            if (parent.id === 'topping-options') {
                pill.classList.toggle('selected');
            } else {
                parent.querySelectorAll('.pill-opt').forEach(p => p.classList.remove('selected'));
                pill.classList.add('selected');
            }
            updateCustomModalPrice();
        });
    });
}

function updateCustomModalPrice() {
    if (!currentCustomizingProduct) return;
    let price = currentCustomizingProduct.price;
    
    // Add size extra
    const selectedSize = document.querySelector('#size-options .pill-opt.selected');
    if (selectedSize) price += parseFloat(selectedSize.dataset.extra || 0);

    // Add topping extras
    const selectedToppings = document.querySelectorAll('#topping-options .pill-opt.selected');
    selectedToppings.forEach(t => price += parseFloat(t.dataset.extra || 0));

    document.getElementById('custom-modal-price').innerText = `$${price.toFixed(2)}`;
}

function confirmAddToCart() {
    const selectedSize = document.querySelector('#size-options .pill-opt.selected').dataset.val;
    const selectedMilk = document.querySelector('#milk-options .pill-opt.selected').dataset.val;
    const toppings = Array.from(document.querySelectorAll('#topping-options .pill-opt.selected')).map(t => t.dataset.val);

    let price = currentCustomizingProduct.price;
    const sizeExtra = parseFloat(document.querySelector('#size-options .pill-opt.selected').dataset.extra || 0);
    price += sizeExtra;
    toppings.forEach(t => {
        if (t.includes('Shot') || t.includes('Whipped')) price += 0.50;
        if (t.includes('Caramel')) price += 0.30;
    });

    const cartItem = {
        cartId: Date.now(),
        id: currentCustomizingProduct.id,
        name: currentCustomizingProduct.name,
        image: currentCustomizingProduct.image,
        price: price,
        qty: 1,
        options: `${selectedSize}, ${selectedMilk}${toppings.length ? ', ' + toppings.join('+') : ''}`
    };

    cart.push(cartItem);
    saveAndRefreshCart();
    closeModal('custom-modal');
    showToast(`✓ ${currentCustomizingProduct.name} added to cart`);
}

function saveAndRefreshCart() {
    localStorage.setItem('bb_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let subtotal = 0;
    let totalQty = 0;

    cart.forEach(item => {
        subtotal += item.price * item.qty;
        totalQty += item.qty;

        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-options">${item.options}</div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="changeQty(${item.cartId}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${item.cartId}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeCartItem(${item.cartId})"><i class="fa-solid fa-trash"></i></button>
        `;
        cartItemsContainer.appendChild(el);
    });

    const tax = subtotal * 0.10;
    const delivery = subtotal > 0 ? 2.00 : 0.00;
    const total = subtotal + tax + delivery;

    document.getElementById('cart-subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-tax').innerText = `$${tax.toFixed(2)}`;
    document.getElementById('cart-delivery').innerText = `$${delivery.toFixed(2)}`;
    document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
    cartCountBadge.innerText = totalQty;
}

function changeQty(cartId, delta) {
    const item = cart.find(i => i.cartId === cartId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.cartId !== cartId);
    }
    saveAndRefreshCart();
}

function removeCartItem(cartId) {
    cart = cart.filter(i => i.cartId !== cartId);
    saveAndRefreshCart();
    showToast('🗑 Item removed from cart');
}

/* ==================== FAVORITES SYSTEM ==================== */
function toggleFavorite(id) {
    const idx = favorites.indexOf(id);
    if (idx > -1) {
        favorites.splice(idx, 1);
        showToast('💔 Removed from favorites');
    } else {
        favorites.push(id);
        showToast('❤️ Added to favorites');
    }
    localStorage.setItem('bb_favs', JSON.stringify(favorites));
    renderMenu();
    updateFavUI();
}

function updateFavUI() {
    favItemsContainer.innerHTML = '';
    favCountBadge.innerText = favorites.length;

    favorites.forEach(id => {
        const item = products.find(p => p.id === id);
        if (!item) return;

        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <button class="remove-item-btn" onclick="toggleFavorite(${item.id})"><i class="fa-solid fa-trash"></i></button>
        `;
        favItemsContainer.appendChild(el);
    });
}

/* ==================== SEARCH & MODALS DRAWERS ==================== */
document.getElementById('search-btn').addEventListener('click', () => {
    document.getElementById('search-modal').classList.add('active');
    document.getElementById('search-input').focus();
});

document.getElementById('close-search').addEventListener('click', () => {
    document.getElementById('search-modal').classList.remove('active');
});

document.getElementById('search-input').addEventListener('input', (e) => {
    searchKeyword = e.target.value;
    renderMenu();
});

cartBtn.addEventListener('click', () => { cartDrawer.classList.add('active'); drawerOverlay.classList.add('active'); });
favBtn.addEventListener('click', () => { favDrawer.classList.add('active'); drawerOverlay.classList.add('active'); });
closeCartBtn.addEventListener('click', closeDrawers);
closeFavBtn.addEventListener('click', closeDrawers);
drawerOverlay.addEventListener('click', closeDrawers);

function closeDrawers() {
    cartDrawer.classList.remove('active');
    favDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
}

document.getElementById('close-custom-modal').addEventListener('click', () => closeModal('custom-modal'));
document.getElementById('close-checkout-modal').addEventListener('click', () => closeModal('checkout-modal'));

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

/* ==================== CHECKOUT & ORDER TRACKING ==================== */
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    closeDrawers();
    const total = document.getElementById('cart-total').innerText;
    document.getElementById('checkout-total-val').innerText = total;
    document.getElementById('checkout-step-form').classList.remove('hidden');
    document.getElementById('checkout-step-success').classList.add('hidden');
    document.getElementById('checkout-modal').classList.add('active');
});

document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const orderNum = '#BB' + Math.floor(1000 + Math.random() * 9000);
    document.getElementById('order-number-display').innerText = orderNum;
    
    document.getElementById('checkout-step-form').classList.add('hidden');
    document.getElementById('checkout-step-success').classList.remove('hidden');

    // Reset Cart
    cart = [];
    saveAndRefreshCart();

    // Trigger Order Progress Tracker Animation
    simulateOrderProgress();
});

function simulateOrderProgress() {
    const steps = ['step-received', 'step-preparing', 'step-ready', 'step-delivered'];
    steps.forEach(s => document.getElementById(s).classList.remove('completed'));
    
    document.getElementById('step-received').classList.add('completed');

    setTimeout(() => document.getElementById('step-preparing').classList.add('completed'), 2000);
    setTimeout(() => document.getElementById('step-ready').classList.add('completed'), 4000);
    setTimeout(() => document.getElementById('step-delivered').classList.add('completed'), 6000);
}

document.getElementById('finish-checkout-btn').addEventListener('click', () => {
    closeModal('checkout-modal');
});

/* ==================== GALLERY LIGHTBOX ==================== */
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        currentLightboxIndex = parseInt(item.dataset.index);
        openLightbox();
    });
});

function openLightbox() {
    const imgSrc = galleryItems[currentLightboxIndex].querySelector('img').src;
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
}

document.getElementById('lightbox-close').addEventListener('click', () => lightbox.classList.remove('active'));
document.getElementById('lightbox-next').addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
    openLightbox();
});
document.getElementById('lightbox-prev').addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox();
});

/* ==================== TESTIMONIALS SLIDER ==================== */
function initReviewSlider() {
    const slider = document.getElementById('reviews-slider');
    const cards = document.querySelectorAll('.review-card');
    const dotsContainer = document.getElementById('slider-dots');

    cards.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = `dot ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToReview(idx));
        dotsContainer.appendChild(dot);
    });

    document.getElementById('next-review').addEventListener('click', () => {
        goToReview((currentReviewIndex + 1) % cards.length);
    });

    document.getElementById('prev-review').addEventListener('click', () => {
        goToReview((currentReviewIndex - 1 + cards.length) % cards.length);
    });

    reviewInterval = setInterval(() => {
        goToReview((currentReviewIndex + 1) % cards.length);
    }, 5000);
}

function goToReview(index) {
    const slider = document.getElementById('reviews-slider');
    const dots = document.querySelectorAll('.dot');
    currentReviewIndex = index;
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

/* ==================== CONTACT FORM VALIDATION ==================== */
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const phone = document.getElementById('contact-phone');
    const message = document.getElementById('contact-message');

    if (!name.value.trim()) { showError(name, 'Name is required'); valid = false; } else clearError(name);
    if (!email.value.includes('@')) { showError(email, 'Valid email required'); valid = false; } else clearError(email);
    if (!phone.value.trim()) { showError(phone, 'Phone number required'); valid = false; } else clearError(phone);
    if (message.value.trim().length < 10) { showError(message, 'Message must be at least 10 chars'); valid = false; } else clearError(message);

    if (valid) {
        showToast('Thank you! Message sent successfully.');
        document.getElementById('contact-form').reset();
    }
});

function showError(input, msg) {
    const parent = input.parentElement;
    parent.querySelector('.error-msg').innerText = msg;
}

function clearError(input) {
    const parent = input.parentElement;
    parent.querySelector('.error-msg').innerText = '';
}

/* ==================== UTILITIES & ANIMATIONS ==================== */
function startCountdown() {
    let time = 3600 * 5 + 1800; // 5 hours 30 mins
    setInterval(() => {
        time--;
        if (time < 0) time = 3600 * 5;
        const h = Math.floor(time / 3600);
        const m = Math.floor((time % 3600) / 60);
        const s = time % 60;
        document.getElementById('hours').innerText = String(h).padStart(2, '0');
        document.getElementById('minutes').innerText = String(m).padStart(2, '0');
        document.getElementById('seconds').innerText = String(s).padStart(2, '0');
    }, 1000);
}

function initTheme() {
    const themeBtn = document.getElementById('theme-btn');
    const savedTheme = localStorage.getItem('bb_theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    themeBtn.innerHTML = savedTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';

    themeBtn.addEventListener('click', () => {
        const current = document.body.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', next);
        localStorage.setItem('bb_theme', next);
        themeBtn.innerHTML = next === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

/* Scroll Animations & Header Sticky */
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const btt = document.getElementById('back-to-top');

    if (window.scrollY > 80) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    if (window.scrollY > 400) btt.classList.add('show');
    else btt.classList.remove('show');
});

document.getElementById('back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Stats Counter Observer
function initStatsCounter() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numbers = entry.target.querySelectorAll('.stat-number');
                numbers.forEach(num => {
                    const target = parseFloat(num.dataset.target);
                    let current = 0;
                    const step = target / 50;
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            num.innerText = target + (num.dataset.decimals ? '' : '+');
                            clearInterval(timer);
                        } else {
                            num.innerText = Math.floor(current) + '+';
                        }
                    }, 30);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const container = document.getElementById('stats-container');
    if (container) observer.observe(container);
}

function initScrollAnimations() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');

    if (navToggle) navToggle.addEventListener('click', () => navMenu.classList.add('active'));
    if (navClose) navClose.addEventListener('click', () => navMenu.classList.remove('active'));
}


