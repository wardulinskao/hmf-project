export function initMobileMenu() {
  const hamburger = document.getElementById("mobile-menu-open");
  const closeButton = document.getElementById("mobile-menu-close");
  const header = document.getElementById("mobile-menu");

  if (!hamburger || !closeButton || !header) return;

  function toggleMenu() {
    const isVisible = header.classList.toggle("header__mobile--visible");
    hamburger.setAttribute("aria-expanded", isVisible.toString());
  }

  hamburger.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", toggleMenu);
}
