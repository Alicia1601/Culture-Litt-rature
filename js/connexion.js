// Gestion du formulaire de connexion
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Connexion réussie ! Vous allez être redirigé vers votre tableau de bord.');
        window.location.href = '../index.html'; // Redirection simulée
    });
}