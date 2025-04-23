// Afficher les articles du panier
const cartItems = document.getElementById('cart-items');
const tshirtTextGroup = document.getElementById('tshirt-text-group');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

if (cart.length === 0) {
    cartItems.innerHTML = '<p>Votre panier est vide.</p>';
} else {
    let hasTshirt = false;
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>Type: ${item.type} | Prix: ${item.price} FCFA</p>
            </div>
            <button class="btn-remove" data-index="${index}">Supprimer</button>
        `;
        cartItems.appendChild(itemElement);
        if (item.type === 'T-shirt') {
            hasTshirt = true;
        }
    });

    // Afficher le champ pour la phrase si un t-shirt est dans le panier
    if (hasTshirt) {
        tshirtTextGroup.style.display = 'block';
    }
}

// Supprimer un article du panier
document.querySelectorAll('.btn-remove').forEach(button => {
    button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    });
});

// Gestion de la commande
const orderForm = document.getElementById('order-form');
if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const tshirtText = document.getElementById('tshirt-text').value;
        if (tshirtText) {
            alert(`Commande validée avec succès ! Phrase ajoutée sur le t-shirt : "${tshirtText}". Vous recevrez une confirmation par email.`);
        } else {
            alert('Commande validée avec succès ! Vous recevrez une confirmation par email.');
        }
        localStorage.removeItem('cart'); // Vider le panier
        window.location.href = 'accueil.html';
    });
}