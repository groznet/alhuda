// assets/js/main.js
// assets/js/main.js
function loadComponent(selector, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector(selector).innerHTML = html;
            if (callback) callback(); // run after component is loaded
        })
        .catch(err => console.error(`Error loading ${url}:`, err));
}


// Load components
loadComponent('#header', '/components/header.html');
loadComponent('#hero', '/components/hero.html');
loadComponent('#footer', '/components/footer.html');

function initMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!menuBtn || !mobileMenu) return;

    // Toggle menu
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close on click outside
    document.addEventListener('click', (event) => {
        if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// Load components
loadComponent('#header', '/components/header.html', initMobileMenu);
loadComponent('#hero', '/components/hero.html');
loadComponent('#footer', '/components/footer.html');
