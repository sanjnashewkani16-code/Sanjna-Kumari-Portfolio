// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });

});


// ================= TYPING EFFECT =================

const typingElement = document.getElementById("typing");

const words = [
    
    "Computer Science Student", "Frontend Developer", "Web Designer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 35 : 90
    );
}

typingEffect()