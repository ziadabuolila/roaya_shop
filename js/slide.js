const slides = document.querySelectorAll('.carousel-item');
let currentSlide = 0;
function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
setInterval(showNextSlide, 3000);
// ---
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card');
    function animateCards(index = 0) {
        if (index < cards.length) {
            cards[index].classList.add('show');
            setTimeout(() => animateCards(index + 1), 500);
        } else {
            setTimeout(() => {
                cards.forEach(card => card.classList.remove('show'));
                setTimeout(() => animateCards(0), 1000);
            }, 2000);
        }
    }
    setTimeout(() => {
        animateCards();
    }, 3000);
});