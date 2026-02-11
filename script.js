const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

const powerBtn = document.getElementById('power-btn');
const currentWire = document.getElementById('current-flow');
const screenContent = document.getElementById('screen-content');
const video = document.getElementById('project-video');
const bootText = document.querySelector('.boot-text');
const projectDetails = document.getElementById('project-details');

powerBtn.addEventListener('click', () => {
    currentWire.classList.add('animate');

    setTimeout(() => {
        screenContent.classList.remove('flickering');
        bootText.innerText = "LOADING...";

        setTimeout(() => {
            bootText.style.display = 'none';
            video.classList.remove('d-none');
            video.play();
            const powerCol = document.getElementById('power-col');
            const detailsCol = document.getElementById('details-col');
            const laptopCol = document.getElementById('laptop-col');
            const projectDetails = document.getElementById('project-details');
            // Hide Power Column
            powerCol.classList.remove('d-lg-block');
            powerCol.classList.add('d-none');

            // Show Details Column
            detailsCol.classList.remove('d-none');

            // Adjust Laptop Column to share space
            laptopCol.classList.remove('col-lg-9');
            laptopCol.classList.add('col-lg-5');

            // Trigger Fade In for Details content
            projectDetails.style.opacity = 0;
            let opacity = 0;
            const fadeIn = setInterval(() => {
                if (opacity >= 1) clearInterval(fadeIn);
                projectDetails.style.opacity = opacity;
                opacity += 0.1;
            }, 50);

        }, 1000);

    }, 1000);
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});


const typingText = document.querySelector('.typing-text');
const words = ["Web Designer and Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = 100;

    if (isDeleting) {
        typeSpeed /= 2;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
    const skillsTicker = document.getElementById('skills-ticker');
    const content = skillsTicker.innerHTML;
    skillsTicker.innerHTML = content + content + content;
});
