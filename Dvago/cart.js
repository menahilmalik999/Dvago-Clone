// Shopping Cart Management with localStorage

class ShoppingCart {
    constructor() {
        this.cart = this.loadCart();
    }

    // Load cart from localStorage
    loadCart() {
        const savedCart = localStorage.getItem('dvagoCart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('dvagoCart', JSON.stringify(this.cart));
        this.updateCartBadge();
    }

    // Add item to cart
    addToCart(product, quantity = 1) {
        const existingItem = this.cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity,
                slug: product.slug
            });
        }

        this.saveCart();
        this.showNotification(`${product.name} added to cart!`);
        return true;
    }

    // Remove item from cart
    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
    }

    // Update item quantity
    updateQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
        }
    }

    // Get cart items
    getCart() {
        return this.cart;
    }

    // Get cart count
    getCartCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    // Get cart subtotal
    getSubtotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Get cart total (with any discounts or shipping)
    getTotal(shippingCost = 0, discount = 0) {
        return this.getSubtotal() + shippingCost - discount;
    }

    // Clear cart
    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    // Update cart badge
    updateCartBadge() {
        const badges = document.querySelectorAll('.cart-badge');
        const count = this.getCartCount();
        badges.forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    // Show notification
    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
      <div class="notification-content">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>${message}</span>
      </div>
    `;

        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 10);

        // Hide and remove notification
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Create global cart instance
const cart = new ShoppingCart();

// Initialize cart badge on page load
document.addEventListener('DOMContentLoaded', () => {
    cart.updateCartBadge();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ShoppingCart, cart };
}
