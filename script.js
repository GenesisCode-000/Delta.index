function switchTab(tabId) {
    // Cache tous les panneaux
    document.querySelectorAll('.panel').forEach(p => {
        p.classList.remove('active');
    });

    // Désactive les liens de la sidebar
    document.querySelectorAll('.side-link').forEach(l => {
        l.classList.remove('active');
    });

    // Affiche le bon panneau
    const target = document.getElementById(tabId);
    if (target) {
        target.classList.add('active');
    }

    // Active le bouton actuel
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}