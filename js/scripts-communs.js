function getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

function generateId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}