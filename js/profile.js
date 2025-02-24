// outfit-fadeUp アニメーションをスクロール時に発火させる
const items = document.querySelectorAll('.profile__photo-outfit-item');

const orderedItems = [items[0], items[2], items[1]];

orderedItems.forEach((item, index) => {
  const delay = index * 0.4; 
  item.style.transitionDelay = `${delay}s`;
  item.classList.add('outfit-fadeUp');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('play');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.2 });

orderedItems.forEach(item => observer.observe(item));


// sp- outfit アニメーション
$(document).ready(function () {
  function fadeUpOnScroll(target) {
    $(target).each(function () {
      let position = $(this).offset().top; // 要素の位置
      let scroll = $(window).scrollTop();  // スクロール位置
      let windowHeight = $(window).height(); // ウィンドウの高さ

      if (scroll > position - windowHeight + 100) { // 100px 手前で発火
        $(this).animate({ opacity: 1, top: 0 }, 800); // フェードアップ
      }
    });
  }

  // 初期設定：画像を隠し、下にオフセット
  $(".sp-profile__outfit-left-img img, .sp-profile__outfit-center-img img, .sp-profile__outfit-right-img img").css({
    opacity: 0,
    position: "relative",
    top: "50px"
  });

  // スクロールイベント
  $(window).on("scroll", function () {
    fadeUpOnScroll(".sp-profile__outfit-left-img img");
    fadeUpOnScroll(".sp-profile__outfit-center-img img");
    fadeUpOnScroll(".sp-profile__outfit-right-img img");
  });
});



//  768px以下 実績toggle-btn
$(document).ready(function () {
  if ($(window).width() <= 768) {
    $(".profile__experience-ttl-wrap").on("click", function () {
      var $toggleList = $(this).next(".profile__toggle-list");
      var $toggleBtn = $(this).find(".sp-profile__experience-toggle-btn");

      $toggleList.stop().slideToggle(300, function () {
        // 表示/非表示が完了したら opacity を調整
        if ($toggleList.is(":visible")) {
          $toggleList.addClass("show");
        } else {
          $toggleList.removeClass("show");
        }
      });

      // ボタンの回転を切り替え
      $toggleBtn.toggleClass("active");
    });
  }
});
