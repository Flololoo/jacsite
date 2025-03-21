const gallery = document.querySelector('.hero-gallery');
const images = document.querySelectorAll('.hero-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentPosition = 0;

nextButton.addEventListener('click', () => {
    currentPosition = (currentPosition + 1) % images.length;
    updateGallery();
});

prevButton.addEventListener('click', () => {
    currentPosition = (currentPosition - 1 + images.length) % images.length;
    updateGallery();
});

function updateGallery() {
    gallery.style.transform = `translateX(-${currentPosition * 100}%)`;
}

// Mobile Swipe
let touchStartX = 0;

gallery.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

gallery.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
        // Nach rechts swipen
        prevButton.click();
    } else if (deltaX < -50) {
        // Nach links swipen
        nextButton.click();
    }
});