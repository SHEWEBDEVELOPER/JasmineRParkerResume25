// Toggle Mobile Menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// Typewriter Effect in Hero Section
const phrases = [
  "Web Developer",
  "Email Developer",
  "Creative Strategist",
  "Brand Designer"
];
let index = 0;
let letterIndex = 0;
const typingSpeed = 90;
const delayBetween = 1800;
const typewriter = document.getElementById("typewriter");

function type() {
  if (letterIndex < phrases[index].length) {
    typewriter.innerHTML += phrases[index].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(() => {
      typewriter.innerHTML = "";
      letterIndex = 0;
      index = (index + 1) % phrases.length;
      type();
    }, delayBetween);
  }
}
type();

// About Section Title Rotator
const aboutPhrases = [
  "Developer",
  "Strategist",
  "Technologist",
  "Visionary"
];
let aboutIndex = 0;
const aboutType = document.getElementById("about-type");

function rotateAbout() {
  aboutType.innerHTML = aboutPhrases[aboutIndex];
  aboutIndex = (aboutIndex + 1) % aboutPhrases.length;
  setTimeout(rotateAbout, 2000);
}
rotateAbout();
