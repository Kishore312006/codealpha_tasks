// Navbar active highlight while scrolling_____________________-
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Card animation on scroll
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (cardTop < screenHeight - 100) {
      card.classList.add("show");
    }
  });
});

// Social icon click effect
const socials = document.querySelectorAll(".social a");

socials.forEach(icon => {
  icon.addEventListener("click", () => {
    icon.style.transform = "scale(1.3)";
    setTimeout(() => {
      icon.style.transform = "scale(1)";
    }, 200);
  });
});