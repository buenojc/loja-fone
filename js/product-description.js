const $heart = window.document.querySelector(".heart");
const $star = document.querySelector(".star");

function handleClick() {
  $heart.classList.toggle("-active");
}

$heart.addEventListener("click", handleClick);
$star.addEventListener("click", () => {
  $star.classList.toggle("-active");
});
