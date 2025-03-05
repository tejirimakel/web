document.addEventListener("DOMContentLoaded", function() {
    const activeLink = document.querySelectorAll('.nav-list a');
    const activePage = window.location.pathname;

    activeLink.forEach(link => {
        if (link.getAttribute("href") === activePage) {
            link.classList.add('actived');
        }
    });
});