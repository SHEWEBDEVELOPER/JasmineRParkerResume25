document.addEventListener('DOMContentLoaded', () => {
  const typewriter = document.getElementById('typewriter');
  const words = ['Front-End Developer', 'React Enthusiast', 'UX-Focused Coder', 'Creative Technologist'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let pause = false;

  function type() {
    const currentWord = words[wordIndex];

    if (!pause) {
      if (isDeleting) {
        typewriter.textContent = currentWord.substring(0, charIndex--);
      } else {
        typewriter.textContent = currentWord.substring(0, charIndex++);
      }
    }

    // When typing is done
    if (!isDeleting && charIndex === currentWord.length) {
      pause = true;
      setTimeout(() => {
        isDeleting = true;
        pause = false;
      }, 2000); // Show full word for 2 seconds
    }

    // When deleting is done
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    const speed = pause ? 500 : isDeleting ? 80 : 120;
    setTimeout(type, speed);
  }

  type();
});


