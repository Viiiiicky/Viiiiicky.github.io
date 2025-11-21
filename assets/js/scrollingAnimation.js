// 傳單元素
const flyersWrapper = document.querySelector(".flyers-wrapper");
const allInfo = document.querySelectorAll(".flyer__project-wrapper");

// 淡入標題元素
const fadeInItems = document.querySelectorAll(".fade-in");

// 平板滑入
const ecommerceWrapper = document.querySelector(".ecommerce-works");
const ipadWrapper = document.querySelector(".ecommerce-works__mobile-wrapper");

// IntersectionObserver的選項配置
const options = { root: null, rootMargin: "0px", thresholds: 0.5 };

// 創建 observer 實例
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // 目前正在被觀察的元素
    const target = entry.target;

    // 若監聽對象進入可視區域，加上對應類別
    if (entry.isIntersecting) {
      if (target.classList.contains("fade-in")) {
        target.classList.add("is-revealed");
      }

      if (target === ecommerceWrapper) {
        ipadWrapper.classList.add("slide-in");
      }

      if (target === flyersWrapper) {
        target
          .querySelectorAll(".flyers-wrapper__flyer")
          .forEach((flyer) => flyer.classList.add("is-revealed"));
        // allInfo.forEach((info) => info.classList.add("is-revealed"));
      }
    } else {
      // 若監聽對象離開可視區域，移除當前離開元素的類別
      if (target.classList.contains("fade-in")) {
        target.classList.remove("is-revealed");
      }

      if (target === ecommerceWrapper) {
        ipadWrapper.classList.remove("slide-in");
      }

      if (target === flyersWrapper) {
        target
          .querySelectorAll(".flyers-wrapper__flyer")
          .forEach((flyer) => flyer.classList.remove("is-revealed"));
        // allInfo.forEach((info) => info.classList.remove("is-revealed"));
      }
    }
  });
}, options);

// 監聽flyersWrapper區塊
observer.observe(flyersWrapper);

// 監聽標題元素
fadeInItems.forEach((title) => observer.observe(title));

// 監聽eCommerce區塊
observer.observe(ecommerceWrapper);
