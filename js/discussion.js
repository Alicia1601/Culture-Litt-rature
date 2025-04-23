document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments-container');
    const cancelButton = document.querySelector('.btn-cancel-comment');

    // In-memory store for comments
    let comments = [];

    // Handle form submission
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const author = document.getElementById('comment-author').value;
        const content = document.getElementById('comment-content').value;

        // Create new comment object
        const newComment = {
            id: Date.now(), // Simple unique ID
            author,
            content,
            timestamp: new Date().toISOString()
        };

        // Add to comments array
        comments.push(newComment);

        // Render the new comment
        renderComment(newComment);

        // Reset form
        commentForm.reset();
    });

    // Handle cancel button
    cancelButton.addEventListener('click', () => {
        commentForm.reset();
    });

    // Function to render a single comment
    function renderComment(comment) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span class="comment-timestamp">${formatTimeAgo(comment.timestamp)}</span>
            </div>
            <p class="comment-content">${comment.content}</p>
        `;
        commentsContainer.insertBefore(commentElement, commentsContainer.firstChild);
    }

    // Format timestamp to "X minutes ago" or "X hours ago"
    function formatTimeAgo(timestamp) {
        const now = new Date();
        const commentDate = new Date(timestamp);
        const diffTime = Math.abs(now - commentDate);
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffMinutes < 60) {
            return diffMinutes === 0 ? "À l'instant" : `Il y a ${diffMinutes} minute${diffMinutes > 1 ? 's' : ''}`;
        } else if (diffHours < 24) {
            return `Il y a ${diffHours} heure${diffHours > 1 ? 's' : ''}`;
        } else {
            return `Il y a ${diffDays} jour${diffDays > 1 ? 's' : ''}`;
        }
    }
});