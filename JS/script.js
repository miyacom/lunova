const swiper = new Swiper('.hero__slider', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// 大画像をJavaScriptで操作できるようにする
const mainImage = document.querySelector(".product-detail__main-image img");


const mainLink = document.querySelector(".product-detail__main-link");

// サムネイル画像を取得する
const thumbnails = document.querySelectorAll(".product-detail__thumbnail img");


// すべてのサムネイルに対して同じ処理をする
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const largeImage = thumbnail.getAttribute("data-large");

    mainImage.src = largeImage;
    mainImage.alt = thumbnail.alt;
    mainLink.href = largeImage;
  });
});


const thumbnailSwiper = new Swiper(".product-detail__thumbnail-swiper", {
  loop: true,

  slidesPerView: "auto",

  spaceBetween: 10,

  navigation: {
    nextEl: ".product-detail__thumb-next",
    prevEl: ".product-detail__thumb-prev",
  },
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("lb-image")) {
    lightbox.end();
  }
});

// 画像が開くスピードを調節している。数字が大きいとゆっくり
lightbox.option({
  resizeDuration: 200,
  fadeDuration: 200
});