const items = document.querySelectorAll(
  ".skill-row, .project-card, .contact-me"
);

const reveal = () => {
  items.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);



