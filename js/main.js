const button = document.querySelector(".menu__button");
const button_off = document.querySelector(".button_off");
const menu__button = document.querySelector(".menu__button");

button.addEventListener("click", () => {
  button_off.classList.toggle("button_on");
});
button.addEventListener("click", () => {
  menu__button.classList.toggle("cross");
});
