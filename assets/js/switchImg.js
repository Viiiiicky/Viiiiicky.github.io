const ecommerceList = document.querySelector(".ecommerce-works__list");
const listItem = Array.from(ecommerceList.children);
// const infoText = Array.from(
//   ecommerceList.querySelectorAll(".ecommerce-works__project-info")
// );

const ecommerceWrapper = document.querySelector(".ecommerce-works__ad-content");
const ecommerceImg = document.querySelectorAll(".ecommerce-works__ad-img");

const padScreen = document.querySelector(".ecommerce-works__mobile-screen");

let currentIndex = 0;

function updateContent(newIndex) {
  if (newIndex === currentIndex) return;

  listItem.forEach((item) => item.classList.remove("active"));
  ecommerceImg.forEach((img) => img.classList.remove("active"));

  currentIndex = newIndex;

  padScreen.scrollTop = 0;

  ecommerceImg[currentIndex].classList.add("active");
  listItem[currentIndex].classList.add("active");
}

ecommerceList.addEventListener("click", (event) => {
  event.preventDefault();

  const clickedItem = event.target.closest(".ecommerce-works__list-item");
  if (!clickedItem) return;

  const newIndex = listItem.indexOf(clickedItem);

  updateContent(newIndex);
});

listItem[currentIndex].classList.add("active");
ecommerceImg[currentIndex].classList.add("active");
