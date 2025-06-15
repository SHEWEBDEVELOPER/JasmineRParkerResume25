// Typewriter Effect
const typewriter = document.getElementById("typewriter");
const words = [
  "Front-End Web Developer",
  "Email Production Developer",
  "Responsive UI Designer",
  "Creative Web Technologist"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  typewriter.textContent = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  let delay = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true;
    delay = 2000;
    charIndex = currentWord.length;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 800;
  }

  setTimeout(type, delay);
}

type();

// Toggle Mobile Nav
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}



