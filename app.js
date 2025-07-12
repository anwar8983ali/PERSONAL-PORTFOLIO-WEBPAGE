document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});


