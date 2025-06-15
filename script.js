document.addEventListener('DOMContentLoaded', () => {
  const typewriter = document.getElementById('typewriter');
  const words = ['Front-End Developer', 'React Enthusiast', 'UX-Focused Coder', 'Creative Technologist'];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const fullText = isDeleting
      ? currentWord.substring(0, charIndex--)
      : currentWord.substring(0, charIndex++);

    typewriter.textContent = fullText;

    let delay = isDeleting ? 50 : 120;

    // Ensure full word is displayed before pause
    if (!isDeleting && charIndex === currentWord.length + 1) {
      delay = 2000;
      isDeleting = true;
      charIndex = currentWord.length; // lock the index
    }

    // Once word is deleted
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  type();
});

