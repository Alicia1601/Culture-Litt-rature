// Fonction pour l'effet de frappe (typing effect)
function typingEffect(element, text, speed) {
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}

// Fonction pour changer l'image et la citation du personnage au clic
function changeCharacterInfo(imageSrc, name, quote) {
    document.getElementById('character-image').src = imageSrc;
    document.getElementById('character-name').textContent = name;
    document.getElementById('character-quote').textContent = "${quote}";
}

// Fonction de navigation (facultatif) - pour rediriger vers une autre page
function navigateToPage(page) {
    window.location.href = page;
}

// Attendre que le DOM soit complètement chargé avant de lancer les effets
document.addEventListener("DOMContentLoaded", function () {
    // Applique l'effet de frappe à la section bienvenue
    const welcomeMessage = document.getElementById('welcome-message');
    const typingText = "Bienvenue sur AKAG - Personnages Ambigus!";
    typingEffect(welcomeMessage, typingText, 100);

    // Ajout d'interaction pour les boutons de personnages (exemple)
    const characterButtons = document.querySelectorAll('.personnage-btn');
    characterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Modifie les informations du personnage
            const imageSrc = button.getAttribute('data-image');
            const name = button.getAttribute('data-name');
            const quote = button.getAttribute('data-quote');
            changeCharacterInfo(imageSrc, name, quote);
        });
    });
});