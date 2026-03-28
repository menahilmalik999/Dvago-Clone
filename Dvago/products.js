// Products Page JavaScript

let filteredProducts = [...allProducts];
let currentFilters = {
    categories: ['all'],
    priceRange: 'all',
    searchQuery: ''
};

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Products page loaded. Total products:', allProducts.length);

    // Check for category parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');

    if (categoryParam) {
        console.log('Category from URL:', categoryParam);

        // Set the category filter
        currentFilters.categories = [categoryParam];

        // Uncheck "All"
        const allCheckbox = document.getElementById('cat-all');
        if (allCheckbox) {
            allCheckbox.checked = false;
        }

        // Check the appropriate checkbox
        const categoryCheckbox = document.querySelector(`#categoryFilters input[value="${categoryParam}"]`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = true;
            console.log('Checked category checkbox for:', categoryParam);
        } else {
            console.warn('Could not find checkbox for category:', categoryParam);
        }

        // Apply filters with the category
        applyFilters();
    } else {
        console.log('No category parameter, showing all products');
        renderProducts(allProducts);
    }

    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Category filters
    const categoryCheckboxes = document.querySelectorAll('#categoryFilters input[type="checkbox"]');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCategoryFilter);
    });

    // Mobile category filters
    const mobileCategoryCheckboxes = document.querySelectorAll('.mobile-cat-filter');
    mobileCategoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCategoryFilter);
    });

    // Price filters
    const priceRadios = document.querySelectorAll('input[name="price"]');
    priceRadios.forEach(radio => {
        radio.addEventListener('change', handlePriceFilter);
    });

    // Mobile price filters
    const mobilePriceRadios = document.querySelectorAll('.mobile-price-filter');
    mobilePriceRadios.forEach(radio => {
        radio.addEventListener('change', handlePriceFilter);
    });

    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }

    // Search
    const searchInput = document.getElementById('searchInput');
    const searchInputMobile = document.getElementById('searchInputMobile');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    }

    if (searchInputMobile) {
        searchInputMobile.addEventListener('input', (e) => handleSearch(e.target.value));
    }

    // Mobile filter toggle
    const mobileFilterBtn = document.getElementById('mobileFilterBtn');
    const closeFiltersBtn = document.getElementById('closeFiltersBtn');
    const mobileFiltersSidebar = document.getElementById('mobileFiltersSidebar');

    if (mobileFilterBtn) {
        mobileFilterBtn.addEventListener('click', () => {
            mobileFiltersSidebar.classList.add('show');
        });
    }

    if (closeFiltersBtn) {
        closeFiltersBtn.addEventListener('click', () => {
            mobileFiltersSidebar.classList.remove('show');
        });
    }
}

// Handle category filter
function handleCategoryFilter(e) {
    const value = e.target.value;

    if (value === 'all') {
        if (e.target.checked) {
            currentFilters.categories = ['all'];
            // Uncheck all other categories
            document.querySelectorAll('#categoryFilters input[type="checkbox"]').forEach(cb => {
                if (cb.value !== 'all') cb.checked = false;
            });
            document.querySelectorAll('.mobile-cat-filter').forEach(cb => {
                if (cb.value !== 'all') cb.checked = false;
            });
        }
    } else {
        // Uncheck "All" if specific category is selected
        document.getElementById('cat-all').checked = false;
        document.querySelectorAll('.mobile-cat-filter[value="all"]').forEach(cb => cb.checked = false);

        // Update categories array
        if (e.target.checked) {
            if (currentFilters.categories.includes('all')) {
                currentFilters.categories = [value];
            } else {
                currentFilters.categories.push(value);
            }
        } else {
            currentFilters.categories = currentFilters.categories.filter(cat => cat !== value);
            if (currentFilters.categories.length === 0) {
                currentFilters.categories = ['all'];
                document.getElementById('cat-all').checked = true;
                document.querySelectorAll('.mobile-cat-filter[value="all"]').forEach(cb => cb.checked = true);
            }
        }
    }

    applyFilters();
}

// Handle price filter
function handlePriceFilter(e) {
    currentFilters.priceRange = e.target.value;
    applyFilters();
}

// Handle search
function handleSearch(query) {
    currentFilters.searchQuery = query.toLowerCase();
    applyFilters();
}

// Handle sort
function handleSort(e) {
    const sortValue = e.target.value;
    let sorted = [...filteredProducts];

    switch (sortValue) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name-az':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-za':
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            // Default sorting (by ID)
            sorted.sort((a, b) => a.id - b.id);
    }

    renderProducts(sorted);
}

// Apply all filters
function applyFilters() {
    console.log('Applying filters:', currentFilters);
    let filtered = [...allProducts];

    // Filter by category
    if (!currentFilters.categories.includes('all')) {
        filtered = filtered.filter(product =>
            currentFilters.categories.includes(product.category)
        );
        console.log('After category filter:', filtered.length, 'products');
    }

    // Filter by price range
    if (currentFilters.priceRange !== 'all') {
        const [min, max] = currentFilters.priceRange.split('-').map(Number);
        filtered = filtered.filter(product =>
            product.price >= min && product.price <= max
        );
        console.log('After price filter:', filtered.length, 'products');
    }

    // Filter by search query
    if (currentFilters.searchQuery) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(currentFilters.searchQuery) ||
            product.category.toLowerCase().includes(currentFilters.searchQuery) ||
            (product.brand && product.brand.toLowerCase().includes(currentFilters.searchQuery))
        );
        console.log('After search filter:', filtered.length, 'products');
    }

    filteredProducts = filtered;
    renderProducts(filtered);
}

// Render products
function renderProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    const productsCount = document.getElementById('productsCount');

    if (!productsGrid) return;

    // Update count
    if (productsCount) {
        productsCount.textContent = `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`;
    }

    // Render products
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--muted-foreground);">
                <p style="font-size: 1.125rem; margin-bottom: 0.5rem;">No products found</p>
                <p style="font-size: 0.875rem;">Try adjusting your filters or search query</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = products.map(product => `
        <div class="product-grid-card" onclick="goToProduct('${product.slug}')">
            <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
            <div class="product-grid-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-grid-category">${product.category}</div>
            <h3 class="product-grid-name">${product.name}</h3>
            <div class="product-grid-prices">
                <span class="product-grid-price">Rs. ${product.price.toLocaleString()}</span>
                ${product.originalPrice ? `<span class="product-grid-original-price">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCartFromGrid(${product.id})">
                Add to Cart
            </button>
        </div>
    `).join('');
}

// Navigate to product detail page
function goToProduct(slug) {
    window.location.href = `product-detail.html?slug=${slug}`;
}

// Add to cart from grid
function addToCartFromGrid(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        cart.addToCart(product, 1);
    }
}

// Toggle wishlist (placeholder)
function toggleWishlist(productId) {
    console.log('Wishlist toggle for product:', productId);
    // Implement wishlist functionality here
}
