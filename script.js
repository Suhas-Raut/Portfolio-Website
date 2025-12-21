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

const viewCursor = document.querySelector(".view-cursor");
const projectItems = document.querySelectorAll(".work-item");

window.addEventListener("mousemove", (e) => {
  viewCursor.style.left = e.clientX + "px";
  viewCursor.style.top = e.clientY + "px";
});

projectItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    viewCursor.style.opacity = "1";
  });

  item.addEventListener("mouseleave", () => {
    viewCursor.style.opacity = "0";
  });
});
