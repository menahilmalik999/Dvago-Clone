// Data
const categories = [
  {
    id: 1,
    name: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Nutrition & Supplements",
    image:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "OTC And Health Need",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Devices & Support",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Foods & Beverages",
    image:
      "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=200&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Baby & Mother Care",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=200&h=200&fit=crop",
  },
  {
    id: 7,
    name: "Medicine",
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop",
  },
];

const topSellingProducts = [
  {
    id: 6,
    name: "Glucerna Milk Powder Vanilla 400g",
    price: 4495.95,
    originalPrice: 4635.0,
    image:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop",
  },
  {
    id: 7,
    name: "Ensure Milk Powder Vanilla 850g",
    price: 6038.25,
    originalPrice: 6225.0,
    image:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop",
  },
  {
    id: 16,
    name: "Senior Adult Pull Up Size XL 10pcs",
    price: 1576.0,
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=200&h=200&fit=crop",
  },
  {
    id: 11,
    name: "Eventone-C Cream 30g",
    price: 1947.5,
    originalPrice: 2050.0,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
  },
  {
    id: 19,
    name: "Meiji Big Milk Powder 900g",
    price: 5039.15,
    originalPrice: 5195.0,
    image:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop",
  },
  {
    id: 41,
    name: "Skin Aqua Clear White Spf-50 Cream 25g",
    price: 2055.56,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
  },
];

const dealsProducts = [
  {
    id: 8,
    name: "Centrum Adults Multivitamin Tablets (130s)",
    price: 1530.0,
    originalPrice: 1800.0,
    image:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop",
  },
  {
    id: 9,
    name: "Centrum Silver Multivitamin Tablets (125s)",
    price: 1700.0,
    originalPrice: 2000.0,
    image:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop",
  },
  {
    id: 39,
    name: "Bonanza Gardenia 100ml",
    price: 2445.0,
    originalPrice: 4890.0,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop",
  },
  {
    id: 40,
    name: "Bonanza Addiction 100ml",
    price: 3992.0,
    originalPrice: 4990.0,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop",
  },
  {
    id: 39,
    name: "Bonanza Notorious Intense 100ml",
    price: 3174.0,
    originalPrice: 5290.0,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop",
  },
  {
    id: 39,
    name: "Bonanza Code Green 30ml",
    price: 1043.0,
    originalPrice: 1490.0,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop",
  },
];

const featuredProducts = [
  {
    id: 9,
    name: "Redoxon Triple Action Effervescent Orange",
    price: 850.0,
    image:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop",
  },
  {
    id: 43,
    name: "Livity Milk Powder Strawberry 400g",
    price: 2999.99,
    image:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Gaviscon Syrup 120ml",
    price: 237.5,
    originalPrice: 250.0,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Gaviscon Advance Liquid 120ml",
    price: 361.0,
    originalPrice: 380.0,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Bonanza Notorious Intense 100ml",
    price: 3174.0,
    originalPrice: 5290.0,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop",
  },
  {
    id: 39,
    name: "Bonanza Perfume No.9 60ml",
    price: 3450.0,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop",
  },
];

const conditions = [
  {
    id: 1,
    name: "Hair Fall",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Cough & Cold",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    name: "Bones & Joints Pain",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    name: "Fever Relief",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&h=150&fit=crop",
  },
  {
    id: 5,
    name: "Constipation",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=150&h=150&fit=crop",
  },
  {
    id: 6,
    name: "Pain & Body Aches",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop",
  },
];

const blogs = [
  {
    id: 1,
    title: "Winter Vs Summer Skin Care: What Works Bes...",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    title: "8 Top Tips For Managing Acne In...",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    title: "Why Skincare Matters: Tips And Routine For...",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    title: "Essential Vitamins For Healthy Hair Growth...",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=150&h=150&fit=crop",
  },
  {
    id: 5,
    title: "Understanding Your Skin Type: A Complete...",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=150&h=150&fit=crop",
  },
];

const brands = [
  {
    id: 1,
    name: "Reckitt",
    logo: "assets/Reckitt.png",
  },
  {
    id: 2,
    name: "Ferozsons",
    logo: "assets/Ferozsons.png",
  },
  {
    id: 3,
    name: "Hemani",
    logo: "assets/Hemani.png",
  },
  {
    id: 4,
    name: "Galaxy Pharma",
    logo: "assets/Galaxy Pharma.png",
  },
  {
    id: 5,
    name: "Philips",
    logo: "assets/Philips-Symbol.png",
  },
  {
    id: 6,
    name: "Beurer",
    logo: "assets/Beurer.png",
  },
];

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const sliderDots = document.getElementById("sliderDots");
let autoPlayInterval;

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className = `dot ${index === 0 ? "active" : ""}`;
  dot.addEventListener("click", () => goToSlide(index));
  sliderDots.appendChild(dot);
});

function goToSlide(index) {
  slides[currentSlide].classList.remove("active");
  document.querySelectorAll(".dot")[currentSlide].classList.remove("active");

  currentSlide = index;

  slides[currentSlide].classList.add("active");
  document.querySelectorAll(".dot")[currentSlide].classList.add("active");

  resetAutoPlay();
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  goToSlide((currentSlide - 1 + slides.length) % slides.length);
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 4000);
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  setTimeout(startAutoPlay, 5000);
}

document.getElementById("nextSlide").addEventListener("click", nextSlide);
document.getElementById("prevSlide").addEventListener("click", prevSlide);

startAutoPlay();

// Carousel Helper Functions
function createCarouselScroll(
  carouselId,
  prevBtnId,
  nextBtnId,
  scrollAmount = 300,
) {
  const carousel = document.getElementById(carouselId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);

  if (!carousel || !prevBtn || !nextBtn) return;

  function checkScroll() {
    const { scrollLeft, scrollWidth, clientWidth } = carousel;
    prevBtn.disabled = scrollLeft <= 0;
    nextBtn.disabled = scrollLeft >= scrollWidth - clientWidth - 10;
  }

  function scroll(direction) {
    const amount = direction === "left" ? -scrollAmount : scrollAmount;
    carousel.scrollBy({ left: amount, behavior: "smooth" });
  }

  prevBtn.addEventListener("click", () => scroll("left"));
  nextBtn.addEventListener("click", () => scroll("right"));
  carousel.addEventListener("scroll", checkScroll);

  checkScroll();
}

// Auto-scroll for carousels
function startAutoScroll(carouselId, interval = 3500, scrollAmount = 220) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;

  setInterval(() => {
    const { scrollLeft, scrollWidth, clientWidth } = carousel;
    if (scrollLeft >= scrollWidth - clientWidth - 10) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, interval);
}

// Render Categories
function renderCategories() {
  const carousel = document.getElementById("categoriesCarousel");
  carousel.innerHTML = categories
    .map(
      (category) => `
        <div class="category-card">
            <div class="card">
                <div class="category-image">
                    <img src="${category.image}" alt="${category.name}">
                </div>
                <h3 class="category-name">${category.name}</h3>
            </div>
        </div>
    `,
    )
    .join("");
}

// Render Product Card
function createProductCard(product) {
  // Find full product data if available
  const fullProduct = typeof allProducts !== 'undefined' ? allProducts.find(p => p.id === product.id) : product;
  const productSlug = fullProduct.slug || `product-${product.id}`;

  return `
        <div class="product-card" onclick="window.location.href='product-detail.html?slug=${productSlug}'" style="cursor: pointer;">
            <div class="card">
                <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-prices">
                    <span class="price-current">Rs. ${product.price.toLocaleString()}</span>
                    ${product.originalPrice ? `<span class="price-original">Rs. ${product.originalPrice.toLocaleString()}</span>` : ""}
                </div>
                <button class="btn-primary" style="width: 100%; margin-top: 0.75rem; padding: 0.5rem; font-size: 0.875rem;" onclick="event.stopPropagation(); addToCartFromHome(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

// Add to cart from homepage
function addToCartFromHome(productId) {
  if (typeof allProducts !== 'undefined' && typeof cart !== 'undefined') {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
      cart.addToCart(product, 1);
    }
  }
}

// Toggle wishlist (placeholder)
function toggleWishlist(productId) {
  console.log('Wishlist toggle for product:', productId);
  // Implement wishlist functionality here
}

// Navigate to category from navigation menu
function navigateToCategory(category) {
  window.location.href = `products.html?category=${encodeURIComponent(category)}`;
}

// Render Products
function renderProducts(products, carouselId) {
  const carousel = document.getElementById(carouselId);
  carousel.innerHTML = products.map(createProductCard).join("");
}

// Render Conditions
function renderConditions() {
  const carousel = document.getElementById("conditionsCarousel");
  carousel.innerHTML = conditions
    .map(
      (condition) => `
        <div class="condition-card">
            <div class="condition-pill">
                <div class="pill-top">
                    <img src="${condition.image}" alt="${condition.name}">
                </div>
                <div class="pill-bottom">
                    <h3 class="condition-name">${condition.name}</h3>
                    <div class="pill-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="13 17 18 12 13 7"></polyline>
                            <polyline points="6 17 11 12 6 7"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

// Render Blogs
function renderBlogs() {
  const carousel = document.getElementById("blogsCarousel");
  carousel.innerHTML = blogs
    .map(
      (blog) => `
        <div class="blog-card">
            <div class="blog-image-wrapper">
                <img src="${blog.image}" alt="${blog.title}">
            </div>
            <p class="blog-title">${blog.title}</p>
        </div>
    `,
    )
    .join("");
}

// Render Brands
function renderBrands() {
  const carousel = document.getElementById("brandsCarousel");
  carousel.innerHTML = brands
    .map(
      (brand) => `
        <div class="brand-card">
            <img src="${brand.logo}" alt="${brand.name}" class="brand-logo">
        </div>
    `,
    )
    .join("");
}

// Show More/Less Toggle
const showMoreBtn = document.getElementById("showMoreBtn");
const descriptionContent = document.getElementById("descriptionContent");

showMoreBtn.addEventListener("click", () => {
  descriptionContent.classList.toggle("expanded");
  showMoreBtn.textContent = descriptionContent.classList.contains("expanded")
    ? "Show Less"
    : "Show More";
});

// Initialize all carousels and auto-scroll
document.addEventListener("DOMContentLoaded", () => {
  // Render all content
  renderCategories();
  renderProducts(topSellingProducts, "topSellingCarousel");
  renderProducts(dealsProducts, "dealsCarousel");
  renderProducts(featuredProducts, "featuredCarousel");
  renderConditions();
  renderBlogs();
  renderBrands();

  // Setup carousel controls
  createCarouselScroll(
    "categoriesCarousel",
    "categoriesPrev",
    "categoriesNext",
    300,
  );
  createCarouselScroll(
    "topSellingCarousel",
    "topSellingPrev",
    "topSellingNext",
    300,
  );
  createCarouselScroll("dealsCarousel", "dealsPrev", "dealsNext", 300);
  createCarouselScroll("featuredCarousel", "featuredPrev", "featuredNext", 300);
  createCarouselScroll(
    "conditionsCarousel",
    "conditionsPrev",
    "conditionsNext",
    300,
  );
  createCarouselScroll("blogsCarousel", "blogsPrev", "blogsNext", 300);
  createCarouselScroll("brandsCarousel", "brandsPrev", "brandsNext", 300);

  // Start auto-scroll for some carousels
  startAutoScroll("categoriesCarousel", 3500, 220);
  startAutoScroll("topSellingCarousel", 3000, 250);
  startAutoScroll("dealsCarousel", 3200, 250);
  startAutoScroll("featuredCarousel", 3400, 250);
});
