// Gestion des interactions pour la page d'accueil
document.querySelectorAll('.btn-subscribe').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirection vers la page d’inscription pour souscrire !');
        window.location.href = 'inscription.html';
    });
});

document.querySelector('.btn-join').addEventListener('click', () => {
    alert('Redirection vers la page d’inscription...');
    window.location.href = 'inscription.html';
});

document.querySelectorAll('.btn-learn-more').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirection vers la section correspondante...');
    });
});