// Typing effect
const textArray = ["Web Developer", "Frontend Developer", "UI/UX Designer", "Software Engineer"];
let currentIndex = 0;
let letterIndex = 0;
const typingTextElement = document.querySelector(".typing-text span");

function type() {
    if (letterIndex < textArray[currentIndex].length) {
        typingTextElement.textContent += textArray[currentIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (letterIndex > 0) {
        typingTextElement.textContent = textArray[currentIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 100);
    } else {
        currentIndex = (currentIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});

// Smooth scroll for navigation links
// Function to reveal elements on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

