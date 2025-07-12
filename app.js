const toggle = document.getElementById("darkToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
