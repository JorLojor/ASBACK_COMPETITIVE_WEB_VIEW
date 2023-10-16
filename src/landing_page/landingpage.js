const slides = document.querySelectorAll('.slide');
const sliderDots = document.querySelector('.slider-dots');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function updateDots() {
    const dots = Array.from(sliderDots.children);
    dots.forEach((dot, i) => {
        if (i === currentSlide) {
            dot.classList.add('active-dot');
        } else {
            dot.classList.remove('active-dot');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updateDots();
}

// Create dots for each slide
slides.forEach((slide, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
        updateDots();
    });
    sliderDots.appendChild(dot);
});

showSlide(currentSlide);
updateDots();

// Auto-advance the slider
setInterval(nextSlide, 5000);
