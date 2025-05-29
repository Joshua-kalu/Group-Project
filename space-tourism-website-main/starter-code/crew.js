const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index) {
slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}
function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}
setInterval(nextSlide, 5000);

dots.forEach((dot, index) => {
dot.addEventListener('click', () => {
    current = index;
    showSlide(current);
    });
});
