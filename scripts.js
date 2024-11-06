// Event listener for 'Add to Cart' button
document.querySelectorAll('#addToCartBtn').forEach(button => {
    button.addEventListener('click', function() {
        // Display a confirmation message
        const cartMessage = document.getElementById('cartMessage');
        cartMessage.textContent = 'Added to cart successfully!';

        // Show message and add fade-in effect
        cartMessage.style.opacity = '1';

        // Remove the message after 2 seconds with fade-out effect
        setTimeout(() => {
            cartMessage.style.opacity = '0';
            setTimeout(() => {
                cartMessage.textContent = '';
            }, 500); // Allow time for fade-out effect
        }, 2000);
    });
});

// Event listener for Contact Form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
    this.reset();
});

// Toggle product description visibility
document.querySelectorAll('.toggle-description-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Get the description element associated with the clicked button
        const description = document.querySelectorAll('.description')[index];

        // Toggle the visibility of the description
        const isVisible = description.style.display === 'block';
        description.style.display = isVisible ? 'none' : 'block';

        // Optionally, change the button text
        btn.textContent = isVisible ? 'View Details' : 'Hide Details';
    });
});
// Rotate product cards horizontally after a few seconds
let rotateInterval = 3000; // time in milliseconds
const cardContainer = document.querySelector('.card-container');

// Set interval for rotating the cards
setInterval(() => {
    cardContainer.classList.toggle('rotate'); // Toggle rotation class for movement
}, rotateInterval);
// Assuming you have an array or object to store the cart items
let cart = [];

// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Add event listener for each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Get the product name from the button's parent product card
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h2').textContent;
        const productPrice = productCard.querySelector('.price').textContent;

        // Add the product to the cart
        const product = {
            name: productName,
            price: productPrice
        };
        cart.push(product);

        // Optionally, update the UI to show cart items or show a message
        alert(`${productName} has been added to your cart!`);

        // For example, display the cart in the console (you could also update the cart UI dynamically)
        console.log(cart);
    });
});
