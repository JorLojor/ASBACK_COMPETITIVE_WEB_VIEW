const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slider-dots');
let currentIndex = 0;

// Inisialisasi dots
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
    dotsContainer.appendChild(dot);
});

// Fungsi untuk memperbarui tampilan dot yang aktif
function updateDots() {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active-dot');
        } else {
            dot.classList.remove('active-dot');
        }
    });
}

// Fungsi untuk pergi ke slide tertentu
function goToSlide(index) {
    currentIndex = index;
    const offset = -index * 100;
    slider.style.transform = `translateX(${offset}%)`;
    updateDots();
}

// Fungsi untuk menggeser ke slide berikutnya
function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        goToSlide(currentIndex);
    }
}

// Fungsi untuk menggeser ke slide sebelumnya
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        goToSlide(currentIndex);
    }
}

// Mulai dengan slide pertama
goToSlide(currentIndex);

// Aktifkan tombol geser
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        prevSlide();
    } else if (event.key === 'ArrowRight') {
        nextSlide();
    }
});
