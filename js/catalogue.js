// Gestion du panier
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = JSON.parse(button.getAttribute('data-product'));
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} a été ajouté au panier !`);
    });
});