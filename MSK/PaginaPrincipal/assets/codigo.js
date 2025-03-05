document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            setActiveLink(this);
            navigateTo(this.getAttribute('href'));
        });
    });

    // Añadir clase para animar el título
    const titulo = document.querySelector('.titulo h1');
    if (titulo) {
        titulo.classList.add('titulo');
    }
});

function setActiveLink(link) {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(navLink => {
        navLink.classList.remove('active');
    });
    link.classList.add('active');
}

function navigateTo(page) {
    window.location.href = page;
}