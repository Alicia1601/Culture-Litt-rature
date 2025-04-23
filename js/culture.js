document.addEventListener('DOMContentLoaded', () => {
    const discussionForm = document.getElementById('discussion-form');
    const threadsContainer = document.getElementById('threads-container');
    const literaryForm = document.getElementById('literary-form');
    const literaryPostsContainer = document.getElementById('literary-posts-container');
    const navTabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('section');

    // Charger les données depuis localStorage
    let threads = JSON.parse(localStorage.getItem('threads')) || [];
    let literaryPosts = JSON.parse(localStorage.getItem('literaryPosts')) || [];

    // Fonction pour sauvegarder les données dans localStorage
    const saveData = () => {
        localStorage.setItem('threads', JSON.stringify(threads));
        localStorage.setItem('literaryPosts', JSON.stringify(literaryPosts));
    };

    // Fonction pour afficher les discussions
    const renderThreads = () => {
        threadsContainer.innerHTML = '';
        threads.forEach(thread => {
            const threadElement = document.createElement('div');
            threadElement.classList.add('thread');
            threadElement.dataset.id = thread.id;
            threadElement.innerHTML = `
                <div class="thread-header">
                    <h3>${thread.title}</h3>
                    <button class="btn-delete" data-type="thread" data-id="${thread.id}">Supprimer</button>
                </div>
                <div class="thread-meta">
                    <span>Par ${thread.author}</span> • <span class="reply-count">${thread.comments.length} réponses</span> • <span>${thread.date}</span>
                </div>
                <p>${thread.description}</p>
                <div class="comment-form">
                    <form class="reply-form">
                        <div class="form-group">
                            <input type="text" class="reply-author" placeholder="Votre nom" required>
                            <textarea class="reply-content" placeholder="Votre commentaire" rows="2" required></textarea>
                        </div>
                        <button type="submit" class="btn-reply">Commenter</button>
                    </form>
                    <div class="comments">
                        ${thread.comments.map(comment => `
                            <div class="comment" data-id="${comment.id}">
                                <div class="comment-meta">
                                    <span>Par ${comment.author}</span> • <span>${comment.date}</span>
                                    <button class="btn-delete" data-type="comment" data-thread-id="${thread.id}" data-id="${comment.id}">Supprimer</button>
                                </div>
                                <p>${comment.content}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            threadsContainer.appendChild(threadElement);
        });

        // Ajouter les écouteurs pour les formulaires de commentaire
        document.querySelectorAll('.reply-form').forEach(form => {
            form.addEventListener('submit', handleReply);
        });

        // Ajouter les écouteurs pour les boutons de suppression
        document.querySelectorAll('.btn-delete').forEach(button => {
            button.addEventListener('click', handleDelete);
        });
    };

    // Fonction pour gérer les commentaires
    const handleReply = (e) => {
        e.preventDefault();
        const form = e.target;
        const threadElement = form.closest('.thread');
        const threadId = threadElement.dataset.id;
        const author = sanitizeInput(form.querySelector('.reply-author').value);
        const content = sanitizeInput(form.querySelector('.reply-content').value);
        const comment = {
            id: generateId('comment'),
            author,
            content,
            date: getCurrentDate()
        };

        const thread = threads.find(t => t.id === threadId);
        thread.comments.push(comment);
        saveData();
        renderThreads();
    };

    // Fonction pour afficher les publications littéraires
    const renderLiteraryPosts = () => {
        literaryPostsContainer.innerHTML = '';
        literaryPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('literary-post');
            postElement.dataset.id = post.id;
            postElement.innerHTML = `
                <div class="literary-post-header">
                    <h3>${post.title}</h3>
                    <button class="btn-delete" data-type="literary" data-id="${post.id}">Supprimer</button>
                </div>
                <div class="literary-post-meta">
                    <span>Par ${post.author}</span> • <span>${post.date}</span>
                </div>
                <p>${post.content}</p>
            `;
            literaryPostsContainer.appendChild(postElement);
        });

        // Ajouter les écouteurs pour les boutons de suppression
        document.querySelectorAll('.btn-delete').forEach(button => {
            button.addEventListener('click', handleDelete);
        });
    };

    // Fonction pour gérer la création d'une discussion
    discussionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = sanitizeInput(document.getElementById('discussion-title').value);
        const author = sanitizeInput(document.getElementById('discussion-author').value);
        const description = sanitizeInput(document.getElementById('discussion-description').value);
        const thread = {
            id: generateId('thread'),
            title,
            author,
            description,
            date: getCurrentDate(),
            comments: []
        };
        threads.unshift(thread);
        saveData();
        renderThreads();
        discussionForm.reset();
    });

    // Fonction pour gérer la création d'une publication littéraire
    literaryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = sanitizeInput(document.getElementById('literary-title').value);
        const author = sanitizeInput(document.getElementById('literary-author').value);
        const content = sanitizeInput(document.getElementById('literary-content').value);
        const post = {
            id: generateId('literary'),
            title,
            author,
            content,
            date: getCurrentDate()
        };
        literaryPosts.unshift(post);
        saveData();
        renderLiteraryPosts();
        literaryForm.reset();
    });

    // Fonction pour gérer la suppression
    const handleDelete = (e) => {
        const button = e.target;
        const type = button.dataset.type;
        const id = button.dataset.id;
        const threadId = button.dataset.threadId;

        if (type === 'thread') {
            threads = threads.filter(thread => thread.id !== id);
        } else if (type === 'comment') {
            const thread = threads.find(t => t.id === threadId);
            thread.comments = thread.comments.filter(comment => comment.id !== id);
        } else if (type === 'literary') {
            literaryPosts = literaryPosts.filter(post => post.id !== id);
        }

        saveData();
        renderThreads();
        renderLiteraryPosts();
    };

    // Gestion des onglets
    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });

    // Initialisation
    const initialThreads = [
        {
            id: 'thread-1',
            title: 'Les traditions togolaises : un patrimoine à préserver',
            author: 'Kofi Adam',
            description: 'Quelles traditions togolaises vous tiennent à cœur ? Partagez vos souvenirs et idées pour les préserver.',
            date: '3 jours',
            comments: []
        },
        {
            id: 'thread-2',
            title: 'Les festivals culturels : une célébration de la diversité',
            author: 'Nyatika Bernadin',
            description: 'Quels festivals culturels avez-vous visités ? Partagez vos expériences et recommandations.',
            date: '1 semaine',
            comments: []
        }
    ];

    if (!localStorage.getItem('threads')) {
        threads = initialThreads;
        saveData();
    }

    renderThreads();
    renderLiteraryPosts();
});