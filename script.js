document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('nav .kanan');

    menu.addEventListener('click', function() {
        navLinks.forEach(link => {
            if (link.style.display === 'flex') {
                link.style.display = 'none';
            } else {
                link.style.display = 'flex';
            }
        });
    });
});