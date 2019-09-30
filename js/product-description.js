const $heart = window.document.querySelector(".heart");
const $stars = document.querySelectorAll(".star");

function handleClick() {
  this.classList.toggle("-active");
}

$heart.addEventListener("click", handleClick);

$stars.forEach(function($star) {
  $star.addEventListener("click", handleClick);
});

// $star.addEventListener("click", () => {
//   $star.classList.toggle("-active");
// });
