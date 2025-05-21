import "./sass/main.scss";
import { initMobileMenu } from "./js/mobileMenu";
import { initRegisterForm } from "./js/register";

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initRegisterForm();
});
