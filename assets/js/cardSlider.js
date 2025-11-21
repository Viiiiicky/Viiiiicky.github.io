// 取得左右箭頭按鈕
const prevArrow = document.querySelector(".graphic-works__button.prev");
const nextArrow = document.querySelector(".graphic-works__button.next");

// 取得作品區塊及個別卡片陣列
const worksWrapper = document.querySelector(".graphic-works__wrapper");
const cardWrapper = Array.from(worksWrapper.children);

// 取得指示點區塊及個別指示點陣列
const indicatorsWrapper = document.querySelector(
  ".graphic-works__indicators-wrapper"
);
const indicators = Array.from(indicatorsWrapper.children);

// 預設索引值為第一張
let currentIndex = 0;
// 確認輪播卡片數量，判斷式若超過此範圍則回到最前/最後一張
const totalCards = cardWrapper.length;

function goToSlide(targetIndex) {
  // 儲存接收到的索引值
  let newIndex = targetIndex;
  // 若超過輪播範圍，跳轉到最前/最後一張
  if (newIndex >= totalCards) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = totalCards - 1;
  }

  // 清除指示點的啟用狀態，避免重複套用
  indicators.forEach((indicator) => indicator.classList.remove("active"));

  // 計算移動到指定卡片的距離
  const moveVW = -50 * newIndex;
  const moveREM = -5 * newIndex;
  // 讓50vw寬的卡片能在畫面置中，需要向左位移25vw距離
  const offsetVW = moveVW + 25;

  let offset = `${offsetVW}vw + ${moveREM}rem`;
  worksWrapper.style.transform = `translateX(calc(${offset}))`;

  // 更新目前索引值
  currentIndex = newIndex;

  // 啟用對應指示點的樣式
  indicators[currentIndex].classList.add("active");
}

// 按鈕監聽事件
nextArrow.addEventListener("click", () => {
  goToSlide(currentIndex + 1);
});

prevArrow.addEventListener("click", () => {
  goToSlide(currentIndex - 1);
});

// 指示點監聽事件
indicatorsWrapper.addEventListener("click", (event) => {
  // 確認點到的指示點
  const clickedIndictor = event.target.closest(".graphic-works__indicator");

  // 避免浪費效能
  if (!clickedIndictor) return;

  // 確認指示點的索引值
  const targetIndex = indicators.indexOf(clickedIndictor);

  // 如果有點到指示點，呼叫goToSlide並傳入索引
  if (targetIndex !== -1) {
    goToSlide(targetIndex);
  }
});

// 網頁載入後啟用預設的卡片及指示點
goToSlide(currentIndex);
