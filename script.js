// ==========================================
// CONFIGURAÇÕES DA MARMITARIA DA RÊ
// ==========================================
// Altere os valores abaixo para personalizar o site.

const config = {
  businessName: "Marmitaria da Rê",

  // ALTERE AQUI O NÚMERO DO WHATSAPP DA MARMITARIA
  // Formato: código do país + DDD + número, sem espaços, traços ou parênteses.
  // Exemplo para um número de São Paulo: "5511999998888"
  whatsappNumber: "5500000000000",

  instagram: "",   // Ex: "https://instagram.com/marmitariadare"
  address: "",      // Ex: "Rua Exemplo, 123 - Bairro"
  city: ""          // Ex: "São Paulo - SP"
};

// ==========================================
// CARDÁPIO
// Para adicionar/remover/editar marmitas, edite este array.
// category deve ser um dos ids usados em "categories" abaixo.
// ==========================================

const categories = [
  { id: "todas", label: "Todas" },
  { id: "tradicionais", label: "Tradicionais" },
  { id: "especiais", label: "Especiais" },
  { id: "fit", label: "Fit" },
  { id: "combos", label: "Combos" },
  { id: "bebidas", label: "Bebidas" }
];

const menu = [
  {
    id: 1,
    name: "Marmita Tradicional",
    description: "Arroz, feijão, frango grelhado, macarrão e salada.",
    price: 18.00,
    image: "assets/marmita-tradicional.webp",
    category: "tradicionais",
    badge: "",
    bestSeller: false
  },
  {
    id: 2,
    name: "Marmita Especial",
    description: "Arroz, feijão, bife acebolado, purê de batata e salada.",
    price: 22.00,
    image: "assets/marmita-especial.webp",
    category: "especiais",
    badge: "MAIS PEDIDA",
    bestSeller: true
  },
  {
    id: 3,
    name: "Marmita Fit",
    description: "Arroz integral, frango grelhado, legumes e salada.",
    price: 20.00,
    image: "assets/marmita-fit.webp",
    category: "fit",
    badge: "",
    bestSeller: false
  },
  {
    id: 4,
    name: "Marmita Caseira de Frango",
    description: "Arroz, feijão, frango à parmegiana e salada de tomate.",
    price: 21.00,
    image: "assets/marmita-frango.webp",
    category: "tradicionais",
    badge: "",
    bestSeller: true
  },
  {
    id: 5,
    name: "Marmita Vegetariana",
    description: "Arroz, feijão, legumes grelhados, ovo e salada.",
    price: 19.00,
    image: "assets/marmita-vegetariana.webp",
    category: "fit",
    badge: "",
    bestSeller: false
  },
  {
    id: 6,
    name: "Suco Natural 500ml",
    description: "Suco natural da fruta do dia, sem adição de açúcar.",
    price: 8.00,
    image: "assets/suco-natural.webp",
    category: "bebidas",
    badge: "",
    bestSeller: true
  },
  {
    id: 7,
    name: "Refrigerante Lata",
    description: "Lata 350ml, gelada.",
    price: 6.00,
    image: "assets/refrigerante.webp",
    category: "bebidas",
    badge: "",
    bestSeller: false
  }
];

// ==========================================
// COMBOS
// Substitua "R$ XX,XX" pelos valores reais quando definidos.
// ==========================================

const combos = [
  {
    id: "combo-semana",
    name: "Combo da Semana",
    description: "5 marmitas selecionadas para os dias úteis.",
    priceLabel: "R$ XX,XX"
  },
  {
    id: "combo-familia",
    name: "Combo Família",
    description: "10 marmitas para toda a família.",
    priceLabel: "R$ XX,XX"
  }
];

// ==========================================
// DEPOIMENTOS
// Substitua pelos depoimentos reais dos clientes quando disponíveis.
// ==========================================

const testimonials = [
  { text: "Coloque aqui um depoimento real de cliente.", author: "Cliente da Marmitaria da Rê" },
  { text: "Coloque aqui outro depoimento real.", author: "Cliente da Marmitaria da Rê" },
  { text: "Coloque aqui mais um depoimento real, se desejar.", author: "Cliente da Marmitaria da Rê" }
];

// ==========================================
// HORÁRIO DE FUNCIONAMENTO
// Preencha quando os horários estiverem definidos.
// ==========================================

const openingHours = [
  // { day: "Segunda a Sexta", hours: "11h às 14h" },
  // { day: "Sábado", hours: "11h às 13h" }
];

// ==========================================
// ENTREGA
// ==========================================

const delivery = {
  available: true,
  message: "Consulte nossa área de entrega pelo WhatsApp."
};

// ==========================================
// PERGUNTAS FREQUENTES
// ==========================================

const faq = [
  {
    q: "Como faço meu pedido?",
    a: "Você pode escolher suas marmitas pelo cardápio e finalizar o pedido diretamente pelo WhatsApp."
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Consulte as formas de pagamento disponíveis pelo WhatsApp."
  },
  {
    q: "Vocês fazem entrega?",
    a: "Consulte nossa área de entrega e as condições diretamente pelo WhatsApp."
  },
  {
    q: "Posso pedir mais de uma marmita?",
    a: "Sim. Você pode adicionar várias unidades ao seu pedido antes de finalizar pelo WhatsApp."
  },
  {
    q: "O cardápio muda?",
    a: "O cardápio pode ser atualizado pela Marmitaria da Rê. Consulte sempre o cardápio atual antes de fazer seu pedido."
  }
];

// ==========================================
// FUNÇÕES AUXILIARES
// ==========================================

function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function buildWhatsappUrl(message) {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function openWhatsapp(message) {
  window.open(buildWhatsappUrl(message), "_blank", "noopener");
}

// ==========================================
// ESTADO DO CARRINHO
// ==========================================

const cart = {}; // { [productId]: quantity }

function getCartItems() {
  return Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const product = menu.find(p => p.id === Number(id));
      return product ? { product, qty } : null;
    })
    .filter(Boolean);
}

function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.product.price * item.qty, 0);
}

function getCartCount() {
  return getCartItems().reduce((sum, item) => sum + item.qty, 0);
}

function setQuantity(productId, qty) {
  cart[productId] = Math.max(0, qty);
  renderCardQuantities();
  renderCart();
}

function addToCart(productId, qty) {
  const current = cart[productId] || 0;
  setQuantity(productId, current + qty);
}

// ==========================================
// RENDERIZAÇÃO — CARDÁPIO
// ==========================================

let activeCategory = "todas";

function renderCategoryData() {
  const el = document.getElementById("cardapioData");
  if (!el) return;
  const today = new Date();
  const formatted = today.toLocaleDateString("pt-BR");
  el.textContent = `Cardápio atualizado em ${formatted}`;
}

function renderFilters() {
  const container = document.getElementById("filtros");
  if (!container) return;
  container.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filtro-btn" + (cat.id === activeCategory ? " is-active" : "");
    btn.textContent = cat.label;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", cat.id === activeCategory ? "true" : "false");
    btn.addEventListener("click", () => {
      activeCategory = cat.id;
      renderFilters();
      renderMenuGrid();
    });
    container.appendChild(btn);
  });
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "card";

  const qty = cart[product.id] || 0;

  card.innerHTML = `
    <div class="card__media">
      <img src="${product.image}" alt="${product.name}" loading="lazy"
        onerror="this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;font-size:2.5rem;\\'>🍱</div>'">
      ${product.badge ? `<span class="card__badge">${product.badge} 🔥</span>` : ""}
    </div>
    <div class="card__body">
      <h3 class="card__name">${product.name}</h3>
      <p class="card__desc">${product.description}</p>
      <div class="card__price">${formatBRL(product.price)}</div>
      <div class="card__footer">
        <div class="qty" data-qty-for="${product.id}">
          <button type="button" class="qty-decrease" aria-label="Diminuir quantidade">−</button>
          <span>${qty}</span>
          <button type="button" class="qty-increase" aria-label="Aumentar quantidade">+</button>
        </div>
        <button type="button" class="card__add" data-add-id="${product.id}">Adicionar</button>
      </div>
      <a href="#" class="card__whatsapp" data-single-whatsapp="${product.id}">Pedir pelo WhatsApp</a>
    </div>
  `;

  const qtyWrap = card.querySelector(".qty");
  const qtySpan = qtyWrap.querySelector("span");
  const decreaseBtn = qtyWrap.querySelector(".qty-decrease");
  const increaseBtn = qtyWrap.querySelector(".qty-increase");

  let localQty = 1;
  qtySpan.textContent = localQty;

  decreaseBtn.addEventListener("click", () => {
    localQty = Math.max(1, localQty - 1);
    qtySpan.textContent = localQty;
  });
  increaseBtn.addEventListener("click", () => {
    localQty = localQty + 1;
    qtySpan.textContent = localQty;
  });

  card.querySelector("[data-add-id]").addEventListener("click", () => {
    addToCart(product.id, localQty);
    openCart();
  });

  card.querySelector("[data-single-whatsapp]").addEventListener("click", (e) => {
    e.preventDefault();
    const quantity = localQty;
    const message = `Olá, Rê! Gostaria de pedir ${quantity}x ${product.name} por ${formatBRL(product.price)} cada.`;
    openWhatsapp(message);
  });

  return card;
}

function renderMenuGrid() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const filtered = activeCategory === "todas"
    ? menu
    : menu.filter(p => p.category === activeCategory);

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#8a8378;">Nenhum item nesta categoria no momento.</p>`;
    return;
  }

  filtered.forEach(product => grid.appendChild(createProductCard(product)));
}

function renderCardQuantities() {
  // Atualiza somente o rótulo de quantidade adicionada (se precisar futuramente).
}

function renderBestSellers() {
  const grid = document.getElementById("bestSellersGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const items = menu.filter(p => p.bestSeller);
  items.forEach(product => grid.appendChild(createProductCard(product)));
}

function renderCombos() {
  const grid = document.getElementById("combosGrid");
  if (!grid) return;
  grid.innerHTML = "";
  combos.forEach(combo => {
    const el = document.createElement("article");
    el.className = "combo";
    el.innerHTML = `
      <h3>${combo.name}</h3>
      <p>${combo.description}</p>
      <div class="combo__price">${combo.priceLabel}</div>
      <button type="button" class="btn btn--primary" data-combo="${combo.id}">Quero o combo</button>
    `;
    el.querySelector("[data-combo]").addEventListener("click", () => {
      const message = `Olá, Rê! Tenho interesse no ${combo.name}. Pode me passar mais detalhes?`;
      openWhatsapp(message);
    });
    grid.appendChild(el);
  });
}

function renderTestimonials() {
  const grid = document.getElementById("depoimentosGrid");
  if (!grid) return;
  grid.innerHTML = "";
  testimonials.forEach(t => {
    const el = document.createElement("article");
    el.className = "depoimento";
    el.innerHTML = `<p>“${t.text}”</p><strong>— ${t.author}</strong>`;
    grid.appendChild(el);
  });
}

function renderFaq() {
  const container = document.getElementById("faqAccordion");
  if (!container) return;
  container.innerHTML = "";
  faq.forEach((item, index) => {
    const el = document.createElement("div");
    el.className = "accordion-item";
    el.innerHTML = `
      <button type="button" class="accordion-item__q" aria-expanded="false" id="faq-q-${index}">
        <span>${item.q}</span>
        <span class="accordion-item__icon" aria-hidden="true">+</span>
      </button>
      <div class="accordion-item__a" role="region" aria-labelledby="faq-q-${index}">
        <p>${item.a}</p>
      </div>
    `;
    const btn = el.querySelector(".accordion-item__q");
    const answer = el.querySelector(".accordion-item__a");
    btn.addEventListener("click", () => {
      const isOpen = el.classList.contains("is-open");
      el.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
      answer.style.maxHeight = !isOpen ? answer.scrollHeight + "px" : "0px";
    });
    container.appendChild(el);
  });
}

function renderDeliveryMessage() {
  const el = document.getElementById("deliveryMessage");
  if (el) el.textContent = delivery.message;
}

// ==========================================
// CARRINHO — UI
// ==========================================

function renderCart() {
  const itemsContainer = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const countEl = document.getElementById("cartCount");
  const items = getCartItems();

  if (!items.length) {
    itemsContainer.innerHTML = `<p class="cart-empty">Seu carrinho está vazio. Que tal escolher uma marmita? 🍲</p>`;
  } else {
    itemsContainer.innerHTML = "";
    items.forEach(({ product, qty }) => {
      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <div class="cart-item__info">
          <div class="cart-item__name">${qty}x ${product.name}</div>
          <div class="cart-item__price">${formatBRL(product.price * qty)}</div>
        </div>
        <button type="button" class="cart-item__remove" aria-label="Remover ${product.name}">✕</button>
      `;
      row.querySelector(".cart-item__remove").addEventListener("click", () => {
        setQuantity(product.id, 0);
      });
      itemsContainer.appendChild(row);
    });
  }

  totalEl.textContent = formatBRL(getCartTotal());
  countEl.textContent = String(getCartCount());
}

function buildCartMessage() {
  const items = getCartItems();
  if (!items.length) return "Olá, Rê! Gostaria de fazer um pedido.";

  const lines = items.map(
    ({ product, qty }) => `${qty}x ${product.name} — ${formatBRL(product.price * qty)}`
  );

  return [
    "Olá, Rê! Gostaria de fazer este pedido:",
    "",
    ...lines,
    "",
    `Total: ${formatBRL(getCartTotal())}`,
    "",
    "Gostaria de confirmar meu pedido."
  ].join("\n");
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("is-open");
  document.getElementById("cartOverlay").classList.add("is-open");
  document.body.classList.add("cart-lock");
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("is-open");
  document.getElementById("cartOverlay").classList.remove("is-open");
  document.body.classList.remove("cart-lock");
}

// ==========================================
// EVENTOS GERAIS
// ==========================================

function setupHeaderMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupCart() {
  document.getElementById("cartOpenBtn").addEventListener("click", openCart);
  document.getElementById("cartCloseBtn").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);
  document.getElementById("cartCheckoutBtn").addEventListener("click", (e) => {
    e.preventDefault();
    if (!getCartItems().length) return;
    openWhatsapp(buildCartMessage());
  });
}

function setupGenericWhatsappButtons() {
  const genericMessage = `Olá, Rê! Gostaria de saber mais sobre o cardápio de hoje.`;
  document.querySelectorAll(".js-whatsapp-generic, #headerWhatsappBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsapp(genericMessage);
    });
  });
}

function setupFooterYear() {
  const el = document.getElementById("anoAtual");
  if (el) el.textContent = String(new Date().getFullYear());
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  renderCategoryData();
  renderFilters();
  renderMenuGrid();
  renderBestSellers();
  renderCombos();
  renderTestimonials();
  renderFaq();
  renderDeliveryMessage();
  renderCart();

  setupHeaderMenu();
  setupCart();
  setupGenericWhatsappButtons();
  setupFooterYear();
});
