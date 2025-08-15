document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.nav');
  const iconMenu = hamburger.querySelector('.fa-bars');
  const iconClose = hamburger.querySelector('.fa-xmark') || hamburger.querySelector('.fa-times');
  const navLinks = document.querySelectorAll('.nav a');

  // Abre/fecha menu
  hamburger.addEventListener('pointerdown', () => {
    const isActive = nav.classList.toggle('active');
    if (iconMenu) iconMenu.style.display = isActive ? 'none' : 'inline';
    if (iconClose) iconClose.style.display = isActive ? 'inline' : 'none';
  });

  // Fecha menu ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener('pointerdown', () => {
      nav.classList.remove('active');
      if (iconMenu) iconMenu.style.display = 'inline';
      if (iconClose) iconClose.style.display = 'none';
    });
  });

  // Fecha menu clicando/tocando fora
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
  // Abre modal
  document.querySelectorAll("img[id^='openModal']").forEach(img => {
    img.addEventListener("pointerdown", function () {
      const modalId = img.id.replace("openModal", "modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "block";
    });
  });

  // Fecha modal no botão de fechar
  document.querySelectorAll(".close").forEach(span => {
    span.addEventListener("pointerdown", function () {
      const modalId = span.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "none";
    });
  });

  // Fecha modal clicando/tocando fora
  window.addEventListener("pointerdown", function (e) {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
});
