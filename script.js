document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const slapCountElement = document.getElementById('slap-count');
    
    character.addEventListener('click', () => {
        fetch('/slap', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                slapCountElement.textContent = `Slaps: ${data.slapCount}`;
            });
    });

    // Initial load to get the current slap count
    fetch('/slap')
        .then(response => response.json())
        .then(data => {
            slapCountElement.textContent = `Slaps: ${data.slapCount}`;
        });
});
