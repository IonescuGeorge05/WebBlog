let currentIndex = 0;

function showSlide(n) {
    let slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) currentIndex = 0;
    if (n < 0) currentIndex = slides.length - 1;
    slides.forEach(slide => slide.style.display = 'none');
    slides[currentIndex].style.display = 'block';
}

function nextSlide() {
    showSlide(++currentIndex);
}

function prevSlide() {
    showSlide(--currentIndex);
}

showSlide(currentIndex);
