const webWorks = document.querySelectorAll(".web-works__link");
const videos = document.querySelectorAll(".web-works__teaser");
const thumbnails = document.querySelectorAll(".web-works__thumbnail");

const mediaQuery = window.matchMedia("(min-width: 75em)");

function handleMouseEnter(index) {
  // 小螢幕時不執行
  if (!mediaQuery.matches) return;

  thumbnails[index].classList.add("hidden");
  videos[index].classList.add("active");
  videos[index].play();
}

function handleMouseLeave(index) {
  // 小螢幕時不執行
  if (!mediaQuery.matches) return;

  videos[index].classList.remove("active");
  thumbnails[index].classList.remove("hidden");
  videos[index].pause();
  videos[index].currentTime = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  webWorks.forEach((link, index) => {
    link.addEventListener("mouseenter", () => {
      handleMouseEnter(index);
    });

    link.addEventListener("mouseleave", () => {
      handleMouseLeave(index);
    });
  });
});

// webWorks.forEach((link, index) => {
//   link.addEventListener("mouseenter", () => {
//     thumbnails[index].classList.add("hidden");
//     videos[index].classList.add("active");
//     videos[index].play();
//   });

//   link.addEventListener("mouseleave", () => {
//     videos[index].classList.remove("active");
//     thumbnails[index].classList.remove("hidden");
//     videos[index].pause();
//     videos[index].currentTime = 0;
//   });
// });
