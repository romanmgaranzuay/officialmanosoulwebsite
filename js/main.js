document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to Manosoul Website 2.0!');
    
    // Music scroll logic
    const scrollContainer = document.querySelector('.music-scroll');
    const cards = Array.from(document.querySelectorAll('.music-card'));
    const leftBtn = document.querySelector('.music-arrow.left');
    const rightBtn = document.querySelector('.music-arrow.right');
    if (scrollContainer && leftBtn && rightBtn && cards.length > 0) {
        let currentIndex = 0;
        function scrollToCard(idx) {
            if (cards[idx]) {
                cards[idx].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                currentIndex = idx;
                updateArrows();
            }
        }
        function updateArrows() {
            leftBtn.disabled = false;
            rightBtn.disabled = false;
        }
        leftBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                scrollToCard(currentIndex - 1);
            } else {
                scrollToCard(cards.length - 1);
            }
        });
        rightBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
                scrollToCard(currentIndex + 1);
            } else {
                scrollToCard(0);
            }
        });
        scrollContainer.addEventListener('scroll', () => {
            let closest = 0;
            let minDiff = Infinity;
            cards.forEach((card, i) => {
                const diff = Math.abs(card.getBoundingClientRect().left - scrollContainer.getBoundingClientRect().left);
                if (diff < minDiff) {
                    minDiff = diff;
                    closest = i;
                }
            });
            currentIndex = closest;
            updateArrows();
        });
        updateArrows();
    }

    // Header background on scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // Overlay menu open/close logic
    const menuIcon = document.getElementById('menuIcon');
    const overlayMenu = document.getElementById('overlayMenu');
    const overlayClose = document.getElementById('overlayClose');
    if (menuIcon && overlayMenu) {
        menuIcon.addEventListener('click', function() {
            overlayMenu.classList.add('open');
        });
    }
    if (overlayClose && overlayMenu) {
        overlayClose.addEventListener('click', function() {
            overlayMenu.classList.remove('open');
        });
    }
    // Close overlay when clicking a link
    if (overlayMenu) {
        overlayMenu.querySelectorAll('.overlay-link').forEach(function(link) {
            link.addEventListener('click', function() {
                overlayMenu.classList.remove('open');
            });
        });
    }

    // SHOP overlay logic
    const shopOverlayMenu = document.getElementById('shopOverlayMenu');
    const openShopOverlay = document.getElementById('openShopOverlay');
    const shopOverlayBack = document.getElementById('shopOverlayBack');
    const shopOverlayClose = document.getElementById('shopOverlayClose');
    if (openShopOverlay && shopOverlayMenu && overlayMenu) {
        openShopOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            overlayMenu.classList.remove('open');
            shopOverlayMenu.classList.add('open');
        });
    }
    if (shopOverlayBack && shopOverlayMenu && overlayMenu) {
        shopOverlayBack.addEventListener('click', function() {
            shopOverlayMenu.classList.remove('open');
            overlayMenu.classList.add('open');
        });
    }
    if (shopOverlayClose && shopOverlayMenu) {
        shopOverlayClose.addEventListener('click', function() {
            shopOverlayMenu.classList.remove('open');
        });
    }
    if (shopOverlayMenu) {
        shopOverlayMenu.querySelectorAll('a.overlay-link').forEach(function(link) {
            link.addEventListener('click', function() {
                shopOverlayMenu.classList.remove('open');
            });
        });
    }

    // Desktop SHOP overlay logic
    const desktopShopOverlayOpen = document.getElementById('desktopShopOverlayOpen');
    const desktopShopOverlayMenu = document.getElementById('desktopShopOverlayMenu');
    const desktopShopOverlayClose = document.getElementById('desktopShopOverlayClose');

    if (desktopShopOverlayOpen && desktopShopOverlayMenu && desktopShopOverlayClose) {
        desktopShopOverlayOpen.addEventListener('click', function(e) {
            e.preventDefault();
            desktopShopOverlayMenu.classList.add('open');
        });
        desktopShopOverlayClose.addEventListener('click', function() {
            desktopShopOverlayMenu.classList.remove('open');
        });
        // Optional: close overlay when clicking a link
        desktopShopOverlayMenu.querySelectorAll('a.overlay-link').forEach(function(link) {
            link.addEventListener('click', function() {
                desktopShopOverlayMenu.classList.remove('open');
            });
        });
    }
});
