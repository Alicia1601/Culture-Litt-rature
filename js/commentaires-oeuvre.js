// Données simulées des commentaires (en attendant une base de données)
const commentsData = {
    'naruto-empire': [
        { name: 'Géonel AMOUZOU', text: 'Un livre fascinant ! L’histoire est pleine de rebondissements.' },
        { name: 'Alphone HOUNTOJD', text: 'J’ai adoré la façon dont l’auteur décrit les personnages. On se sent immergé dans l’univers.' },
        { name: 'Alex OURO', text: 'Un chef-d’œuvre ! J’attends la suite avec impatience.' },
        { name: 'Sophie NANEGBE', text: 'Les dialogues sont profonds et captivants. Une belle découverte !' }
    ],
    'pays-perdu': [
        { name: 'Kofi Adam', text: 'Une belle plongée dans la culture togolaise. Très émouvant !' }
    ],
    'jean-kossi': [
        { name: 'Alice K. Amoussou', text: 'Les poèmes de Jean Kossi sont magnifiques. Une vraie découverte !' }
    ]
};

// Récupérer le paramètre 'oeuvre' dans l'URL
const urlParams = new URLSearchParams(window.location.search);
const oeuvreId = urlParams.get('oeuvre');

// Mettre à jour le titre de la page en fonction de l'œuvre
const oeuvreTitles = {
    'naruto-empire': 'Naruto - L’Empire caché',
    'pays-perdu': 'Le rêve d’un pays perdu',
    'jean-kossi': 'Œuvres de Jean Kossi'
};

const oeuvreTitleElement = document.getElementById('oeuvre-title');
if (oeuvreId && oeuvreTitles[oeuvreId]) {
    oeuvreTitleElement.textContent = `Commentaires sur "${oeuvreTitles[oeuvreId]}"`;
} else {
    oeuvreTitleElement.textContent = 'Commentaires';
}

// Afficher les commentaires existants
const commentsList = document.getElementById('comments-list');
if (oeuvreId && commentsData[oeuvreId]) {
    commentsData[oeuvreId].forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <h4>${comment.name}</h4>
            <p>${comment.text}</p>
        `;
        commentsList.appendChild(commentElement);
    });
} else {
    commentsList.innerHTML = '<p>Aucun commentaire pour cette œuvre. Soyez le premier à donner votre avis !</p>';
}

// Gestion de la soumission du formulaire de commentaire
const commentForm = document.getElementById('comment-form');
if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('comment-name').value;
        const text = document.getElementById('comment-text').value;

        // Simuler l'ajout d'un commentaire (en attendant une base de données)
        if (oeuvreId) {
            if (!commentsData[oeuvreId]) {
                commentsData[oeuvreId] = [];
            }
            commentsData[oeuvreId].push({ name, text });

            // Ajouter le commentaire à la liste affichée
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <h4>${name}</h4>
                <p>${text}</p>
            `;
            commentsList.appendChild(commentElement);

            // Réinitialiser le formulaire
            commentForm.reset();
            alert('Commentaire publié avec succès !');
        } else {
            alert('Erreur : aucune œuvre sélectionnée.');
        }
    });
}