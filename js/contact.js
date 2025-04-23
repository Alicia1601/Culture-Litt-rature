// Gestion de la soumission du formulaire
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message envoyé avec succès ! Nous vous répondrons bientôt.');
        contactForm.reset();
    });
}