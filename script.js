const INR = "\u20b9";

const heroSlides = [
  {
    title: "Great Summer Sale",
    subtitle: "Top deals on phones, appliances, fashion and everyday essentials.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1800&q=85",
    cta: "Shop deals"
  },
  {
    title: "Upgrade your work setup",
    subtitle: "Laptops, monitors, keyboards and storage from brands customers trust.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800&q=85",
    cta: "Explore electronics"
  },
  {
    title: "Home refresh offers",
    subtitle: "Kitchen, decor, bedding and storage picks with fast delivery.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1800&q=85",
    cta: "Shop home"
  }
];

const products = {
  electronics: [
    { id: "e1", name: "boAt Airdopes 141 Bluetooth TWS Earbuds, 42H Playtime", brand: "boAt", price: 999, mrp: 4490, rating: 4.1, reviews: 185426, image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=420&q=80", deal: "Great Indian Festival", prime: true, delivery: "Tomorrow, 21 May", stock: "In stock" },
    { id: "e2", name: "Samsung Galaxy M14 5G, 6GB RAM, 128GB Storage", brand: "Samsung", price: 10990, mrp: 16990, rating: 4.0, reviews: 62418, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=420&q=80", deal: "Bank offer", prime: true, delivery: "Friday, 23 May", stock: "Only 2 left" },
    { id: "e3", name: "HP 15s Laptop, Intel Core i5, 16GB RAM, 512GB SSD", brand: "HP", price: 52990, mrp: 64999, rating: 4.3, reviews: 9152, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=420&q=80", deal: "Limited time", prime: true, delivery: "Tomorrow, 21 May", stock: "In stock" },
    { id: "e4", name: "Logitech MK215 Wireless Keyboard and Mouse Combo", brand: "Logitech", price: 1295, mrp: 1995, rating: 4.2, reviews: 43867, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=420&q=80", deal: "Deal", prime: false, delivery: "Saturday, 24 May", stock: "In stock" }
  ],
  home: [
    { id: "h1", name: "Milton Thermosteel Flip Lid Flask, 750 ml, Silver", brand: "Milton", price: 649, mrp: 1099, rating: 4.4, reviews: 50917, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=420&q=80", deal: "Coupon", prime: true, delivery: "Tomorrow, 21 May", stock: "In stock" },
    { id: "h2", name: "Prestige Popular Aluminium Pressure Cooker, 5 Litre", brand: "Prestige", price: 1399, mrp: 2395, rating: 4.2, reviews: 71942, image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=420&q=80", deal: "Deal", prime: true, delivery: "Friday, 23 May", stock: "In stock" },
    { id: "h3", name: "Solimo Cotton Bedsheet with 2 Pillow Covers, Queen", brand: "Amazon Brand", price: 599, mrp: 1499, rating: 4.0, reviews: 22103, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=420&q=80", deal: "Bestseller", prime: true, delivery: "Tomorrow, 21 May", stock: "In stock" },
    { id: "h4", name: "Pigeon by Stovekraft Mixer Grinder, 750 W, 3 Jars", brand: "Pigeon", price: 1899, mrp: 3795, rating: 4.1, reviews: 38640, image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=420&q=80", deal: "Limited time", prime: false, delivery: "Sunday, 25 May", stock: "Only 5 left" }
  ],
  fashion: [
    { id: "f1", name: "Levi's Men's 511 Slim Fit Stretchable Jeans", brand: "Levi's", price: 1899, mrp: 3999, rating: 4.1, reviews: 28449, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=420&q=80", deal: "Deal", prime: true, delivery: "Tomorrow, 21 May", stock: "In stock" },
    { id: "f2", name: "Adidas Running Shoes for Men, Lightweight Sole", brand: "Adidas", price: 2799, mrp: 5599, rating: 4.3, reviews: 17611, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=420&q=80", deal: "50% off", prime: true, delivery: "Friday, 23 May", stock: "In stock" },
    { id: "f3", name: "Titan Analog Blue Dial Men's Watch with Leather Strap", brand: "Titan", price: 2195, mrp: 3995, rating: 4.4, reviews: 12319, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=420&q=80", deal: "Top rated", prime: true, delivery: "Tomorrow, 21 May", stock: "Only 3 left" },
    { id: "f4", name: "W for Woman Printed Cotton Blend Kurta Set", brand: "W", price: 999, mrp: 2499, rating: 4.0, reviews: 9218, image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=420&q=80", deal: "Coupon", prime: false, delivery: "Saturday, 24 May", stock: "In stock" }
  ]
};

const recent = [
  { name: "Echo Dot smart speaker", price: 4499, image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=220&q=80" },
  { name: "Kindle Paperwhite", price: 13999, image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=220&q=80" },
  { name: "USB-C hub 7-in-1", price: 1299, image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=220&q=80" },
  { name: "Mechanical keyboard", price: 2499, image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=220&q=80" },
  { name: "Yoga mat 6mm", price: 499, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=220&q=80" },
  { name: "Laptop stand", price: 1199, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=220&q=80" }
];

let currentSlide = 0;
const cart = new Map();

function money(value) {
  return `${INR}${value.toLocaleString("en-IN")}`;
}

function percentOff(price, mrp) {
  return Math.round((1 - price / mrp) * 100);
}

function renderStars(rating) {
  const percent = Math.max(0, Math.min(100, (rating / 5) * 100));
  return `<span class="stars" aria-label="${rating} out of 5"><span style="width:${percent}%"></span></span>`;
}

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-image">
        <span class="deal-badge">${product.deal}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <p class="brand">${product.brand}</p>
        <h3>${product.name}</h3>
        <div class="rating-line">
          ${renderStars(product.rating)}
          <a href="#">${product.reviews.toLocaleString("en-IN")}</a>
        </div>
        <p class="bought">1K+ bought in past month</p>
        <div class="price-line">
          <span class="price">${money(product.price)}</span>
          <span class="mrp">M.R.P: <s>${money(product.mrp)}</s></span>
          <span class="off">(${percentOff(product.price, product.mrp)}% off)</span>
        </div>
        <p class="tax">Inclusive of all taxes</p>
        <p class="${product.prime ? "prime" : "delivery"}">${product.prime ? "prime" : "FREE"} delivery <strong>${product.delivery}</strong></p>
        <p class="${product.stock.includes("Only") ? "low-stock" : "stock"}">${product.stock}</p>
        <div class="card-actions">
          <select aria-label="Quantity for ${product.name}">
            <option>Qty: 1</option>
            <option>Qty: 2</option>
            <option>Qty: 3</option>
          </select>
          <button type="button" data-add="${product.id}">Add to Cart</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  document.getElementById("electronicsGrid").innerHTML = products.electronics.map(productCard).join("");
  document.getElementById("homeGrid").innerHTML = products.home.map(productCard).join("");
  document.getElementById("fashionGrid").innerHTML = products.fashion.map(productCard).join("");
  document.getElementById("recentRow").innerHTML = recent.map((item) => `
    <button class="recent-card" type="button" data-query="${item.name}">
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <strong>${money(item.price)}</strong>
      <span>${item.name}</span>
    </button>
  `).join("");
}

function renderHero() {
  document.getElementById("heroTrack").innerHTML = heroSlides.map((slide, index) => `
    <article class="hero-slide ${index === currentSlide ? "active" : ""}" style="background-image:url('${slide.image}')">
      <div>
        <h1>${slide.title}</h1>
        <p>${slide.subtitle}</p>
        <button type="button" data-query="${slide.title}">${slide.cta}</button>
      </div>
    </article>
  `).join("");
  document.getElementById("heroTrack").style.transform = `translateX(-${currentSlide * 100}%)`;
}

function findProduct(id) {
  return Object.values(products).flat().find((item) => item.id === id);
}

function addToCart(id) {
  const product = findProduct(id);
  if (!product) return;
  const item = cart.get(id) || { ...product, qty: 0 };
  item.qty += 1;
  cart.set(id, item);
  renderCart();
  showToast(`${product.name.slice(0, 48)} added to Cart`);
}

function renderCart() {
  const count = [...cart.values()].reduce((total, item) => total + item.qty, 0);
  const subtotal = [...cart.values()].reduce((total, item) => total + item.qty * item.price, 0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartSubtotal").textContent = `Subtotal (${count} ${count === 1 ? "item" : "items"}): ${money(subtotal)}`;
  document.getElementById("cartItems").innerHTML = count === 0
    ? `<p class="empty-cart">Your Amazon Cart is empty.</p>`
    : [...cart.values()].map((item) => `
      <article class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>${item.stock}</p>
          <strong>${money(item.price)}</strong>
          <div>
            <button type="button" data-remove="${item.id}">−</button>
            <span>Qty: ${item.qty}</span>
            <button type="button" data-add="${item.id}">+</button>
          </div>
        </div>
      </article>
    `).join("");
}

function removeFromCart(id) {
  const item = cart.get(id);
  if (!item) return;
  item.qty -= 1;
  if (item.qty <= 0) cart.delete(id);
  renderCart();
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "false");
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "true");
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function search(query) {
  const value = query.trim();
  if (!value) return;
  showToast(`Showing results for "${value}"`);
  document.getElementById("searchInput").value = value;
}

document.addEventListener("click", (event) => {
  const add = event.target.closest("[data-add]");
  const remove = event.target.closest("[data-remove]");
  const query = event.target.closest("[data-query]");
  if (add) addToCart(add.dataset.add);
  if (remove) removeFromCart(remove.dataset.remove);
  if (query) search(query.dataset.query);
});

document.getElementById("cartButton").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("cartDrawer").addEventListener("click", (event) => {
  if (event.target.id === "cartDrawer") closeCart();
});

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  search(document.getElementById("searchInput").value);
});

document.getElementById("prevSlide").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
  renderHero();
});

document.getElementById("nextSlide").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  renderHero();
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  renderHero();
}, 6000);

renderHero();
renderProducts();
renderCart();
