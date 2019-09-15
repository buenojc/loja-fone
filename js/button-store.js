const $button = window.document.querySelector(".-second");
const $cart = window.document.querySelector(".-last");

$button.addEventListener("click", handleClick);

function handleClick() {
  $cart.textContent = "Eita! Funciona";
}
