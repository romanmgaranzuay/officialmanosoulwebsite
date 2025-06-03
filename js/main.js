document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to Manosoul Website 2.0!');
    
    const scrollContainer = document.querySelector('.music-scroll');
    
    
    const cards = Array.from(document.querySelectorAll('.music-card'));
    const leftBtn = document.querySelector('.music-arrow.left');
    const rightBtn = document.querySelector('.music-arrow.right');
    if (!scrollContainer || !leftBtn || !rightBtn || cards.length === 0) return;

    let currentIndex = 0;

    function scrollToCard(idx) {
        if (cards[idx]) {
            cards[idx].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            currentIndex = idx;
            updateArrows();
        }
    }

    function updateArrows() {
        leftBtn.disabled = currentIndex === 0;
        rightBtn.disabled = currentIndex === cards.length - 1;
    }

    leftBtn.addEventListener('click', () => {
        if (currentIndex > 0) scrollToCard(currentIndex - 1);
    });
    rightBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) scrollToCard(currentIndex + 1);
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
});
