// Gestion du formulaire d’inscription
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Inscription réussie ! Vous allez être redirigé vers la page de connexion.');
        window.location.href = 'connexion.html';
    });
}