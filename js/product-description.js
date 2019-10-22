const $heart = window.document.querySelector(".heart");
const $stars = document.querySelectorAll(".star");
const lastPosition = $stars.length - 1;

$heart.addEventListener("click", handleClick);

$stars.forEach(function($star, key) {
  if (key == 0) {
    $star.addEventListener("click", firstStar);
  }

  if (key > 0 && key < lastPosition) {
    $star.addEventListener("click", function() {
      middleStars(key);
    });
  }

  if (key == lastPosition) {
    $star.addEventListener("click", lastStar);
  }
});

function handleClick() {
  this.classList.toggle("-active");
}

function firstStar() {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });

  this.classList.add("-active");
}

function middleStars(key) {
  $stars.forEach(function($star, index) {
    $star.classList.remove("-active");

    if (index <= key) {
      $star.classList.add("-active");
    }
  });
}

function lastStar() {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
    $star.classList.add("-active");
  });
}
