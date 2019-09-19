let valorInicial = 0;
const $button = window.document.querySelector(".-second");

$button.addEventListener("click", handleClick);

function handleClick() {
  const $cart = window.document.querySelector(".-last");

  $cart.textContent = `Carrinho (${++valorInicial})`;
}
