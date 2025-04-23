// Vérification de l’accès à la page d’administration
document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (!user || user.role !== 'Admin') {
        window.location.href = 'connexion.html';
    }
});

// Gestion de la déconnexion
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('currentUser');
    window.location.href = 'connexion.html';
});

// Données simulées (autres entités)
const oeuvres = JSON.parse(localStorage.getItem('oeuvres')) || [
    { id: 1, title: "Le rêve d’un pays perdu", author: "Akou_92", date: "20/03/2025" },
    { id: 2, title: "Naruto - L’Empire caché", author: "JeanKossi", date: "10/02/2025" }
];
localStorage.setItem('oeuvres', JSON.stringify(oeuvres));

const commentaires = JSON.parse(localStorage.getItem('commentaires')) || [
    { id: 1, oeuvre: "Le rêve d’un pays perdu", user: "Akou_92", content: "Une belle plongée dans la culture togolaise !", date: "21/03/2025" },
    { id: 2, oeuvre: "Naruto - L’Empire caché", user: "JeanKossi", content: "Un livre fascinant !", date: "11/02/2025" }
];
localStorage.setItem('commentaires', JSON.stringify(commentaires));

const cours = JSON.parse(localStorage.getItem('cours')) || [
    { id: 1, classe: "6eme", chapitre: "Les nombres entiers et décimaux", content: "Objectifs : Comprendre les nombres entiers..." },
    { id: 2, classe: "terminale", chapitre: "Limites et continuité", content: "Objectifs : Comprendre la notion de limite..." }
];
localStorage.setItem('cours', JSON.stringify(cours));

const questions = JSON.parse(localStorage.getItem('questions')) || [
    { id: 1, user: "Akou_92", level: "Collège", question: "Résoudre une équation", response: "", date: "22/03/2025" }
];
localStorage.setItem('questions', JSON.stringify(questions));

const commandes = JSON.parse(localStorage.getItem('commandes')) || [
    { id: 1, user: "Akou_92", product: "T-shirt", quantity: 2, customization: "Texte : 'AKAGIS 2025'", totalPrice: 10000, status: "En attente", date: "23/03/2025" },
    { id: 2, user: "JeanKossi", product: "Tableau", quantity: 1, customization: "Image : 'logo.png'", totalPrice: 15000, status: "Expédiée", date: "15/03/2025" }
];
localStorage.setItem('commandes', JSON.stringify(commandes));

// Réutilisation des réponses simulées de questions-reponses.js
const responsesData = {
    college: {
        'logique': {
            'résoudre une équation': 'Pour résoudre une équation comme 2x + 3 = 7, suis ces étapes : <br>1. Isole la variable : 2x = 7 - 3, donc 2x = 4. <br>2. Divise par le coefficient de x : x = 4 / 2, donc x = 2. <br>Vérifie : 2(2) + 3 = 7, ce qui est correct !',
            'calculer un périmètre': 'Pour calculer le périmètre d’un rectangle de longueur 5 cm et largeur 3 cm, utilise la formule P = 2(L + l). <br>Étape 1 : P = 2(5 + 3) = 2(8) = 16 cm. <br>Le périmètre est donc 16 cm.'
        },
        'visuel': {
            'résoudre une équation': 'Imagine une balance : d’un côté, tu as 2x + 3, et de l’autre, 7. Pour équilibrer, enlève 3 des deux côtés : 2x = 4. Ensuite, divise les deux côtés par 2, comme si tu partageais 4 bonbons entre 2 amis : x = 2. Vérifie sur la balance : 2(2) + 3 = 7, c’est équilibré !',
            'calculer un périmètre': 'Dessine un rectangle de 5 cm de long et 3 cm de large. Compte les côtés : 5 + 3 + 5 + 3 = 16 cm. Tu peux aussi utiliser la formule P = 2(L + l) = 2(5 + 3) = 16 cm. Visualise chaque côté pour t’assurer de ne rien oublier !'
        },
        'linguistique': {
            'résoudre une équation': 'Disons que tu as une équation : 2x + 3 = 7. Pense à cela comme une phrase : "Deux fois un nombre plus trois égale sept." Pour trouver ce nombre, enlève trois des deux côtés : 2x = 4. Ensuite, dis : "Deux fois le nombre égale quatre, donc le nombre est quatre divisé par deux." Ainsi, x = 2.',
            'calculer un périmètre': 'Imagine que tu racontes une histoire : un rectangle a une longueur de 5 cm et une largeur de 3 cm. Pour trouver son périmètre, tu dis : "Je dois additionner tous les côtés : 5 plus 3, plus 5, plus 3, ça fait 16 cm." Ou tu peux dire : "Le périmètre, c’est deux fois la somme de la longueur et de la largeur, soit 2(5 + 3) = 16 cm."'
        }
    },
    lycee: {
        'logique': {
            'factoriser une expression': 'Pour factoriser x² + 5x + 6, cherche deux nombres qui se multiplient pour donner 6 et s’additionnent pour donner 5. Ces nombres sont 2 et 3. Donc, x² + 5x + 6 = (x + 2)(x + 3). Vérifie : (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6.',
            'résoudre un système d’équations': 'Pour résoudre le système { 2x + y = 5, x - y = 1 }, additionne les deux équations : (2x + y) + (x - y) = 5 + 1, donc 3x = 6, x = 2. Substitue x = 2 dans la deuxième équation : 2 - y = 1, donc y = 1. Solution : x = 2, y = 1.'
        },
        'visuel': {
            'factoriser une expression': 'Pour factoriser x² + 5x + 6, imagine un rectangle de dimensions (x + 2) et (x + 3). L’aire de ce rectangle est (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6. Donc, x² + 5x + 6 = (x + 2)(x + 3).',
            'résoudre un système d’équations': 'Pour le système { 2x + y = 5, x - y = 1 }, dessine deux droites. Additionne les équations pour éliminer y : 3x = 6, donc x = 2. Trace x = 2 sur un graphique, puis utilise la deuxième équation : 2 - y = 1, donc y = 1. Le point d’intersection est (2, 1).'
        },
        'linguistique': {
            'factoriser une expression': 'Pour factoriser x² + 5x + 6, dis : "Je cherche deux nombres qui, multipliés, donnent 6, et additionnés, donnent 5." Ces nombres sont 2 et 3. Donc, l’expression devient (x + 2)(x + 3). Explique à un ami : "Quand tu multiplies (x + 2) et (x + 3), tu obtiens bien x² + 5x + 6."',
            'résoudre un système d’équations': 'Pour le système { 2x + y = 5, x - y = 1 }, raconte une histoire : "Si j’additionne les deux équations, les y s’annulent : 3x = 6, donc x = 2. Ensuite, je dis que x - y = 1, donc 2 - y = 1, et y = 1." La solution est x = 2, y = 1.'
        }
    }
};

// Navigation entre les sections
const sidebarLinks = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('.admin-section');

sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const sectionId = link.getAttribute('data-section');
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
    });
});

// Récupérer les utilisateurs depuis localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Afficher les statistiques dans le tableau de bord
document.getElementById('user-count').textContent = users.length;
document.getElementById('oeuvre-count').textContent = oeuvres.length;
document.getElementById('comment-count').textContent = commentaires.length;
document.getElementById('question-count').textContent = questions.length;
document.getElementById('commande-count').textContent = commandes.length;

// Afficher les utilisateurs
const usersTable = document.getElementById('users-table');
users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.joinDate}</td>
        <td>${user.role}</td>
        <td>
            <button class="btn-edit" onclick="editUser(${user.id})">Modifier</button>
            <button class="btn-delete" onclick="deleteUser(${user.id})">Supprimer</button>
        </td>
    `;
    usersTable.appendChild(row);
});

// Afficher les œuvres
const oeuvresTable = document.getElementById('oeuvres-table');
oeuvres.forEach(oeuvre => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${oeuvre.id}</td>
        <td>${oeuvre.title}</td>
        <td>${oeuvre.author}</td>
        <td>${oeuvre.date}</td>
        <td>
            <button class="btn-edit" onclick="editOeuvre(${oeuvre.id})">Modifier</button>
            <button class="btn-delete" onclick="deleteOeuvre(${oeuvre.id})">Supprimer</button>
        </td>
    `;
    oeuvresTable.appendChild(row);
});

// Afficher les commentaires
const commentairesTable = document.getElementById('commentaires-table');
commentaires.forEach(comment => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${comment.id}</td>
        <td>${comment.oeuvre}</td>
        <td>${comment.user}</td>
        <td>${comment.content}</td>
        <td>${comment.date}</td>
        <td>
            <button class="btn-edit" onclick="editComment(${comment.id})">Modifier</button>
            <button class="btn-delete" onclick="deleteComment(${comment.id})">Supprimer</button>
        </td>
    `;
    commentairesTable.appendChild(row);
});

// Afficher les cours
const coursTable = document.getElementById('cours-table');
cours.forEach(cour => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${cour.id}</td>
        <td>${cour.classe}</td>
        <td>${cour.chapitre}</td>
        <td>
            <button class="btn-edit" onclick="editCours(${cour.id})">Modifier</button>
            <button class="btn-delete" onclick="deleteCours(${cour.id})">Supprimer</button>
        </td>
    `;
    coursTable.appendChild(row);
});

// Afficher les questions-réponses avec suggestions IA
const questionsTable = document.getElementById('questions-table');
questions.forEach(question => {
    let suggestion = 'Aucune suggestion disponible';
    const typeKey = 'logique';
    if (responsesData[question.level.toLowerCase()] && responsesData[question.level.toLowerCase()][typeKey]) {
        for (let key in responsesData[question.level.toLowerCase()][typeKey]) {
            if (question.question.toLowerCase().includes(key)) {
                suggestion = responsesData[question.level.toLowerCase()][typeKey][key];
                break;
            }
        }
    }

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${question.id}</td>
        <td>${question.user}</td>
        <td>${question.level}</td>
        <td>${question.question}</td>
        <td>${question.response || 'Non répondu'}</td>
        <td>${suggestion}</td>
        <td>${question.date}</td>
        <td>
            <button class="btn-edit" onclick="respondQuestion(${question.id}, '${suggestion}')">Répondre</button>
            <button class="btn-delete" onclick="deleteQuestion(${question.id})">Supprimer</button>
        </td>
    `;
    questionsTable.appendChild(row);
});

// Afficher les commandes
const commandesTable = document.getElementById('commandes-table');
commandes.forEach(commande => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${commande.id}</td>
        <td>${commande.user}</td>
        <td>${commande.product}</td>
        <td>${commande.quantity}</td>
        <td>${commande.customization}</td>
        <td>${commande.totalPrice}</td>
        <td>${commande.status}</td>
        <td>${commande.date}</td>
        <td>
            <button class="btn-edit" onclick="editCommande(${commande.id})">Modifier statut</button>
            <button class="btn-delete" onclick="deleteCommande(${commande.id})">Supprimer</button>
        </td>
    `;
    commandesTable.appendChild(row);
});

// Gestion du formulaire d’ajout de cours
const addCoursBtn = document.getElementById('add-cours-btn');
const addCoursForm = document.getElementById('add-cours-form');
const cancelAddCoursBtn = document.getElementById('cancel-add-cours');

addCoursBtn.addEventListener('click', () => {
    addCoursForm.classList.remove('hidden');
});

cancelAddCoursBtn.addEventListener('click', () => {
    addCoursForm.classList.add('hidden');
});

addCoursForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const classe = document.getElementById('cours-classe').value;
    const chapitre = document.getElementById('cours-chapitre').value;
    const contenu = document.getElementById('cours-contenu').value;

    const newCours = {
        id: cours.length + 1,
        classe: classe,
        chapitre: chapitre,
        content: contenu
    };

    cours.push(newCours);
    localStorage.setItem('cours', JSON.stringify(cours));
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${newCours.id}</td>
        <td>${newCours.classe}</td>
        <td>${newCours.chapitre}</td>
        <td>
            <button class="btn-edit" onclick="editCours(${newCours.id})">Modifier</button>
            <button class="btn-delete" onclick="deleteCours(${newCours.id})">Supprimer</button>
        </td>
    `;
    coursTable.appendChild(row);

    addCoursForm.reset();
    addCoursForm.classList.add('hidden');
});

// Fonctions pour modifier et supprimer (simulées)
function editUser(id) {
    alert(`Modifier l’utilisateur avec l’ID ${id}`);
}

function deleteUser(id) {
    if (confirm(`Voulez-vous vraiment supprimer l’utilisateur avec l’ID ${id} ?`)) {
        const index = users.findIndex(user => user.id === id);
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        usersTable.innerHTML = '';
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.joinDate}</td>
                <td>${user.role}</td>
                <td>
                    <button class="btn-edit" onclick="editUser(${user.id})">Modifier</button>
                    <button class="btn-delete" onclick="deleteUser(${user.id})">Supprimer</button>
                </td>
            `;
            usersTable.appendChild(row);
        });
    }
}

function editOeuvre(id) {
    alert(`Modifier l’œuvre avec l’ID ${id}`);
}

function deleteOeuvre(id) {
    if (confirm(`Voulez-vous vraiment supprimer l’œuvre avec l’ID ${id} ?`)) {
        const index = oeuvres.findIndex(oeuvre => oeuvre.id === id);
        oeuvres.splice(index, 1);
        localStorage.setItem('oeuvres', JSON.stringify(oeuvres));
        oeuvresTable.innerHTML = '';
        oeuvres.forEach(oeuvre => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${oeuvre.id}</td>
                <td>${oeuvre.title}</td>
                <td>${oeuvre.author}</td>
                <td>${oeuvre.date}</td>
                <td>
                    <button class="btn-edit" onclick="editOeuvre(${oeuvre.id})">Modifier</button>
                    <button class="btn-delete" onclick="deleteOeuvre(${oeuvre.id})">Supprimer</button>
                </td>
            `;
            oeuvresTable.appendChild(row);
        });
    }
}

function editComment(id) {
    alert(`Modifier le commentaire avec l’ID ${id}`);
}

function deleteComment(id) {
    if (confirm(`Voulez-vous vraiment supprimer le commentaire avec l’ID ${id} ?`)) {
        const index = commentaires.findIndex(comment => comment.id === id);
        commentaires.splice(index, 1);
        localStorage.setItem('commentaires', JSON.stringify(commentaires));
        commentairesTable.innerHTML = '';
        commentaires.forEach(comment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${comment.id}</td>
                <td>${comment.oeuvre}</td>
                <td>${comment.user}</td>
                <td>${comment.content}</td>
                <td>${comment.date}</td>
                <td>
                    <button class="btn-edit" onclick="editComment(${comment.id})">Modifier</button>
                    <button class="btn-delete" onclick="deleteComment(${comment.id})">Supprimer</button>
                </td>
            `;
            commentairesTable.appendChild(row);
        });
    }
}

function editCours(id) {
    alert(`Modifier le cours avec l’ID ${id}`);
}

function deleteCours(id) {
    if (confirm(`Voulez-vous vraiment supprimer le cours avec l’ID ${id} ?`)) {
        const index = cours.findIndex(cour => cour.id === id);
        cours.splice(index, 1);
        localStorage.setItem('cours', JSON.stringify(cours));
        coursTable.innerHTML = '';
        cours.forEach(cour => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cour.id}</td>
                <td>${cour.classe}</td>
                <td>${cour.chapitre}</td>
                <td>
                    <button class="btn-edit" onclick="editCours(${cour.id})">Modifier</button>
                    <button class="btn-delete" onclick="deleteCours(${cour.id})">Supprimer</button>
                </td>
            `;
            coursTable.appendChild(row);
        });
    }
}

function respondQuestion(id, suggestion) {
    const response = prompt(`Entrez votre réponse pour la question avec l’ID ${id} (Suggestion IA : ${suggestion}) :`, suggestion);
    if (response) {
        const question = questions.find(q => q.id === id);
        question.response = response;
        localStorage.setItem('questions', JSON.stringify(questions));
        questionsTable.innerHTML = '';
        questions.forEach(question => {
            let suggestion = 'Aucune suggestion disponible';
            const typeKey = 'logique';
            if (responsesData[question.level.toLowerCase()] && responsesData[question.level.toLowerCase()][typeKey]) {
                for (let key in responsesData[question.level.toLowerCase()][typeKey]) {
                    if (question.question.toLowerCase().includes(key)) {
                        suggestion = responsesData[question.level.toLowerCase()][typeKey][key];
                        break;
                    }
                }
            }
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${question.id}</td>
                <td>${question.user}</td>
                <td>${question.level}</td>
                <td>${question.question}</td>
                <td>${question.response || 'Non répondu'}</td>
                <td>${suggestion}</td>
                <td>${question.date}</td>
                <td>
                    <button class="btn-edit" onclick="respondQuestion(${question.id}, '${suggestion}')">Répondre</button>
                    <button class="btn-delete" onclick="deleteQuestion(${question.id})">Supprimer</button>
                </td>
            `;
            questionsTable.appendChild(row);
        });
    }
}

function deleteQuestion(id) {
    if (confirm(`Voulez-vous vraiment supprimer la question avec l’ID ${id} ?`)) {
        const index = questions.findIndex(q => q.id === id);
        questions.splice(index, 1);
        localStorage.setItem('questions', JSON.stringify(questions));
        questionsTable.innerHTML = '';
        questions.forEach(question => {
            let suggestion = 'Aucune suggestion disponible';
            const typeKey = 'logique';
            if (responsesData[question.level.toLowerCase()] && responsesData[question.level.toLowerCase()][typeKey]) {
                for (let key in responsesData[question.level.toLowerCase()][typeKey]) {
                    if (question.question.toLowerCase().includes(key)) {
                        suggestion = responsesData[question.level.toLowerCase()][typeKey][key];
                        break;
                    }
                }
            }
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${question.id}</td>
                <td>${question.user}</td>
                <td>${question.level}</td>
                <td>${question.question}</td>
                <td>${question.response || 'Non répondu'}</td>
                <td>${suggestion}</td>
                <td>${question.date}</td>
                <td>
                    <button class="btn-edit" onclick="respondQuestion(${question.id}, '${suggestion}')">Répondre</button>
                    <button class="btn-delete" onclick="deleteQuestion(${question.id})">Supprimer</button>
                </td>
            `;
            questionsTable.appendChild(row);
        });
    }
}

function editCommande(id) {
    const commande = commandes.find(c => c.id === id);
    const newStatus = prompt(`Entrez le nouveau statut pour la commande avec l’ID ${id} (actuel : ${commande.status}) :`, commande.status);
    if (newStatus) {
        commande.status = newStatus;
        localStorage.setItem('commandes', JSON.stringify(commandes));
        commandesTable.innerHTML = '';
        commandes.forEach(commande => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${commande.id}</td>
                <td>${commande.user}</td>
                <td>${commande.product}</td>
                <td>${commande.quantity}</td>
                <td>${commande.customization}</td>
                <td>${commande.totalPrice}</td>
                <td>${commande.status}</td>
                <td>${commande.date}</td>
                <td>
                    <button class="btn-edit" onclick="editCommande(${commande.id})">Modifier statut</button>
                    <button class="btn-delete" onclick="deleteCommande(${commande.id})">Supprimer</button>
                </td>
            `;
            commandesTable.appendChild(row);
        });
    }
}

function deleteCommande(id) {
    if (confirm(`Voulez-vous vraiment supprimer la commande avec l’ID ${id} ?`)) {
        const index = commandes.findIndex(c => c.id === id);
        commandes.splice(index, 1);
        localStorage.setItem('commandes', JSON.stringify(commandes));
        commandesTable.innerHTML = '';
        commandes.forEach(commande => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${commande.id}</td>
                <td>${commande.user}</td>
                <td>${commande.product}</td>
                <td>${commande.quantity}</td>
                <td>${commande.customization}</td>
                <td>${commande.totalPrice}</td>
                <td>${commande.status}</td>
                <td>${commande.date}</td>
                <td>
                    <button class="btn-edit" onclick="editCommande(${commande.id})">Modifier statut</button>
                    <button class="btn-delete" onclick="deleteCommande(${commande.id})">Supprimer</button>
                </td>
            `;
            commandesTable.appendChild(row);
        });
    }
}