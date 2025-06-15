const typewriter = document.getElementById("typewriter");
const words = [
  "Web Developer",
  "Email Production Developer",
  "UI Designer",
  "Creative Technologist"
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

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
