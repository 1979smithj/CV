document.addEventListener("DOMContentLoaded", () => {
  // Example of adding a simple interactivity: smooth scroll
  const links = document.querySelectorAll("nav ul li a");

  for (const link of links) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  }
});
