document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.nav');
  const iconMenu = hamburger.querySelector('.fa-bars');
  const iconClose = hamburger.querySelector('.fa-xmark') || hamburger.querySelector('.fa-times');
  const navLinks = document.querySelectorAll('.nav a');

  hamburger.addEventListener('pointerdown', () => {
    const isActive = nav.classList.toggle('active');
    if (iconMenu) iconMenu.style.display = isActive ? 'none' : 'inline';
    if (iconClose) iconClose.style.display = isActive ? 'inline' : 'none';
  });

  navLinks.forEach(link => {
    link.addEventListener('pointerdown', () => {
      nav.classList.remove('active');
      if (iconMenu) iconMenu.style.display = 'inline';
      if (iconClose) iconClose.style.display = 'none';
    });
  });

  window.addEventListener("pointerdown", (e) => {
    const isClickInside = nav.contains(e.target) || hamburger.contains(e.target);
    if (!isClickInside && nav.classList.contains('active')) {
      nav.classList.remove('active');
      if (iconMenu) iconMenu.style.display = 'inline';
      if (iconClose) iconClose.style.display = 'none';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img[id^='openModal']").forEach(img => {
    img.addEventListener("pointerdown", function () {
      const modalId = img.id.replace("openModal", "modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "block";
    });
  });

  document.querySelectorAll(".close").forEach(span => {
    span.addEventListener("pointerdown", function () {
      const modalId = span.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "none";
    });
  });

  window.addEventListener("pointerdown", function (e) {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
});
