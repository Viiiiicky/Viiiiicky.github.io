const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-list-item");
const innerList = document.querySelector(".inner-list-wrapper");
const innerLinks = innerList.querySelectorAll(".navbar__list-link");

const menuImg = document.querySelector(".navbar__menu-icon");
const closeImg = document.querySelector(".navbar__close-icon");

const mediaQuery = window.matchMedia("(min-width: 62.5em)");

function toggleMenu(shouldOpen) {
  if (mediaQuery.matches) return;

  // 確認現在選單為開啟或關閉
  const isCurrentlyOpen = !innerList.classList.contains("folded");

  // 若需切換選單狀態，將其設為與目前狀態相反的值: !isCurrentlyOpen
  let targetState = shouldOpen !== undefined ? shouldOpen : !isCurrentlyOpen;

  if (targetState) {
    // 選單開啟時的設定
    menuImg.classList.add("hidden");
    closeImg.classList.remove("hidden");
    innerList.classList.remove("folded");
  } else {
    // 選單關閉時的設定
    closeImg.classList.add("hidden");
    menuImg.classList.remove("hidden");
    innerList.classList.add("folded");
  }
}

// 點擊時呼叫toggleMenu切換選單狀態
menuButton.addEventListener("click", (event) => {
  // 因為是anchor元素，所以要避免預設行為:重整頁面
  event.preventDefault();
  // 避免點擊事件冒泡到document導致重複監聽
  event.stopPropagation();
  toggleMenu();
});

// 點擊選單內選項後關閉選單
innerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu(false);
  });
});

// 點擊選單以外的地方關閉選單
document.addEventListener("click", (event) => {
  const isMenuOpen = !innerList.classList.contains("folded");

  if (isMenuOpen && !navbar.contains(event.target)) {
    toggleMenu(false);
  }
});

// 控制不同尺寸下選單是否摺疊
function handleScreenChange(event) {
  if (event.matches) {
    innerList.classList.remove("folded");
  } else {
    toggleMenu(false);
  }
}

// 監聽視窗尺寸以顯示對應的選單
mediaQuery.addEventListener("change", handleScreenChange);

document.addEventListener("DOMContentLoaded", () => {
  if (!mediaQuery.matches) {
    toggleMenu(false);
  }
});
