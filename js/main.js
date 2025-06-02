document.addEventListener('DOMContentLoaded', function() {
    // JS code goes here
    console.log('Welcome to Manosoul Website 2.0!');
    
    // Scrolls the music-scroll container left/right when arrows are clicked
    document.querySelectorAll('.music-arrow').forEach(btn => {
        btn.addEventListener('click', function() {
            const scrollContainer = document.querySelector('.music-scroll');
            const scrollAmount = scrollContainer.offsetWidth * 0.4; // Scroll by 80% of visible area
            if (btn.classList.contains('left')) {
                scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });
    });
});
