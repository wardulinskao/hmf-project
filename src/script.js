import "./sass/main.scss";
import { initMobileMenu } from "./js/mobileMenu";
import { initRegisterForm } from "./js/register";
import { initFaq } from "./js/faq";

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initRegisterForm();
  initFaq();
});
