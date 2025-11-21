const webWorks = document.querySelectorAll(".web-works__link");
const videos = document.querySelectorAll(".web-works__teaser");
const thumbnails = document.querySelectorAll(".web-works__thumbnail");

webWorks.forEach((link, index) => {
  link.addEventListener("mouseenter", () => {
    thumbnails[index].classList.add("hidden");
    videos[index].classList.add("active");
    videos[index].play();
  });

  link.addEventListener("mouseleave", () => {
    videos[index].classList.remove("active");
    thumbnails[index].classList.remove("hidden");
    videos[index].pause();
    videos[index].currentTime = 0;
  });
});
