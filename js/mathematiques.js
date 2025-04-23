// Vérifier si l'utilisateur a déjà passé le questionnaire (simulé avec une variable locale)
let intelligenceType = localStorage.getItem('intelligenceType');
const intelligenceQuiz = document.getElementById('intelligence-quiz');
const mathematiquesContent = document.getElementById('mathematiques-content');
const intelligenceTypeElement = document.getElementById('intelligence-type');

// Si l'utilisateur a déjà un type d'intelligence, cacher le questionnaire
if (intelligenceType) {
    intelligenceQuiz.classList.add('hidden');
    mathematiquesContent.classList.remove('hidden');
    intelligenceTypeElement.textContent = intelligenceType;
} else {
    intelligenceQuiz.classList.remove('hidden');
    mathematiquesContent.classList.add('hidden');
}

// Gestion de la soumission du questionnaire
const intelligenceForm = document.getElementById('intelligence-form');
if (intelligenceForm) {
    intelligenceForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Calculer le type d'intelligence en fonction des réponses
        const q1 = document.querySelector('input[name="q1"]:checked').value;
        const q2 = document.querySelector('input[name="q2"]:checked').value;
        const q3 = document.querySelector('input[name="q3"]:checked').value;

        // Compter les réponses pour chaque type
        const types = {
            logique: 0,
            visuel: 0,
            linguistique: 0,
            interpersonnel: 0
        };

        types[q1]++;
        types[q2]++;
        types[q3]++;

        // Déterminer le type dominant
        let dominantType = 'Logico-mathématique';
        let maxScore = types.logique;

        if (types.visuel > maxScore) {
            dominantType = 'Visuo-spatiale';
            maxScore = types.visuel;
        }
        if (types.linguistique > maxScore) {
            dominantType = 'Linguistique';
            maxScore = types.linguistique;
        }
        if (types.interpersonnel > maxScore) {
            dominantType = 'Interpersonnelle';
        }

        // Stocker le type d'intelligence (simulé avec localStorage)
        localStorage.setItem('intelligenceType', dominantType);

        // Mettre à jour l'affichage
        intelligenceType = dominantType;
        intelligenceTypeElement.textContent = dominantType;
        intelligenceQuiz.classList.add('hidden');
        mathematiquesContent.classList.remove('hidden');
    });
}