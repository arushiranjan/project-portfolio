let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    const newTransformValue = -currentSlide * 100 + "%";
    document.querySelector(".carousel-images").style.transform = `translateX(${newTransformValue})`;

    updateDots();
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

function setSlide(index) {
    showSlide(index);
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.remove("active-dot");
        if (i === currentSlide) {
            dot.classList.add("active-dot");
        }
    });
}

// Auto-Slide Functionality
setInterval(() => {
    moveSlide(1);
}, 3000);

// Initialize First Slide
showSlide(0);
