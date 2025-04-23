// Gestion de la soumission du formulaire de publication
const publishForm = document.getElementById('publish-form');
if (publishForm) {
    publishForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Œuvre publiée avec succès !');
        publishForm.reset();
    });
}