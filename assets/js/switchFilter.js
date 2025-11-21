const flyersList = document.querySelector(".flyer__list");
const flyerDescription = Array.from(flyersList.children);

const flyerImages = document.querySelectorAll(".flyers-wrapper__flyer-img");

let currentIndex = 0;

function updateContent(index) {
  if (index === currentIndex) return;

  flyerDescription.forEach((description) => {
    description.classList.remove("active");
  });

  flyerImages.forEach((img) => {
    img.classList.remove("selected");
  });

  currentIndex = index;

  flyerDescription[currentIndex].classList.add("active");
  flyerImages[currentIndex].classList.add("selected");
}

flyersList.addEventListener("click", (event) => {
  event.preventDefault();

  const clickedItem = event.target.closest(".flyer__list-item");
  if (!clickedItem) return;

  const newIndex = flyerDescription.indexOf(clickedItem);

  updateContent(newIndex);
});

flyerDescription[currentIndex].classList.add("active");
flyerImages[currentIndex].classList.add("selected");
