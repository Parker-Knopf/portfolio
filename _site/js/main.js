// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');
  const navButtons = document.querySelectorAll('.nav-button');

  // Toggle menu on hamburger click
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
  }

  // Close menu when a nav link is clicked
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mainNav.classList.remove('active');
    });
  });
});