const $heart = window.document.querySelector(".heart");
const $stars = document.querySelectorAll(".star");

function handleClick() {
  $heart.classList.toggle("-active");
}

$heart.addEventListener("click", handleClick);

for (let i = 0; i < $stars.length; i++) {
  $stars[i].addEventListener("click", () => {
    for (let index = 0; index <= i; index++) {
      $stars[index].classList.toggle("-marked");
    }
  });
}
