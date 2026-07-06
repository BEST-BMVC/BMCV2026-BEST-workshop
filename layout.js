fetch('partials/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
        let currentPage = window.location.pathname.split('/').pop();
        if (!currentPage) {
            currentPage = 'index.html';
        }

        const activeLink = document.querySelector(
            `.nav-links a[href="${currentPage}"]`
        );

        if (activeLink) {
            activeLink.classList.add('active');
        }
    });

fetch('partials/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });