/// Aperçu de l'image téléchargée
const imageInput = document.getElementById('custom-image');
const imagePreview = document.getElementById('image-preview');
const productType = document.getElementById('product-type');
const tshirtTextGroup = document.getElementById('tshirt-text-group');

if (imageInput) {
    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                imagePreview.innerHTML = `<img src="${reader.result}" alt="Aperçu" style="max-width: 100%; max-height: 150px; border-radius: 10px;">`;
            };
            reader.readAsDataURL(file);
        }
    });
}

// Afficher le champ pour la phrase si un t-shirt est sélectionné
if (productType) {
    productType.addEventListener('change', () => {
        if (productType.value === 'T-shirt') {
            tshirtTextGroup.style.display = 'block';
        } else {
            tshirtTextGroup.style.display = 'none';
        }
    });
}

// Gestion de la commande personnalisée
const customOrderForm = document.getElementById('custom-order-form');
if (customOrderForm) {
    customOrderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const tshirtText = document.getElementById('tshirt-text').value;
        if (tshirtText && productType.value === 'T-shirt') {
            alert(`Commande validée avec succès ! Phrase ajoutée sur le t-shirt : "${tshirtText}". Vous recevrez une confirmation par email.`);
        } else {
            alert('Commande validée avec succès ! Vous recevrez une confirmation par email.');
        }
        window.location.href = 'accueil.html';
    });
}