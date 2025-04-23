// Gestion de l'affichage du formulaire de modification
const editInfoBtn = document.getElementById('edit-info-btn');
const editInfoForm = document.getElementById('edit-info-form');
const cancelEditBtn = document.getElementById('cancel-edit-btn');

if (editInfoBtn && editInfoForm && cancelEditBtn) {
    editInfoBtn.addEventListener('click', () => {
        editInfoForm.classList.remove('hidden');
        editInfoBtn.classList.add('hidden');
    });

    cancelEditBtn.addEventListener('click', () => {
        editInfoForm.classList.add('hidden');
        editInfoBtn.classList.remove('hidden');
    });

    editInfoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('edit-username').value;
        const newEmail = document.getElementById('edit-email').value;

        // Mettre à jour les informations affichées
        document.getElementById('username').textContent = newUsername;
        document.getElementById('email').textContent = newEmail;

        // Cacher le formulaire et réafficher le bouton "Modifier"
        editInfoForm.classList.add('hidden');
        editInfoBtn.classList.remove('hidden');

        alert('Informations mises à jour avec succès !');
    });
}