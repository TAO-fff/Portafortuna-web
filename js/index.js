// reason
// 各アイテムを順番にアニメーションする関数
function animateItemsSequentially(items, delay) {
  items.forEach((item, index) => {
    // 背景色アニメーションが完了した後にフェードイン開始
    setTimeout(() => {
      item.classList.add('fade-in'); // フェードアップアニメーション用クラスを追加
    }, index * delay);
  });
}

// Intersection Observerでスクロール位置が.home__reasonに達したら発火
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = document.querySelectorAll('.home__reason-item-wrap');
      items.forEach((item) => {
        item.classList.add('bg-animate'); // 背景アニメーション用クラスを追加
      });

      // 背景色アニメーションが終わる1秒後にフェードアップ処理を開始
      setTimeout(() => {
        animateItemsSequentially(items, 800); // 500ms間隔で順番にフェードアップ
      }, 1000);

      observer.unobserve(entry.target); // 一度実行したら監視を停止
    }
  });
}, { threshold: 0.3 });

// home__reasonを監視
document.addEventListener('DOMContentLoaded', () => {
  const reasonSection = document.querySelector('.home__reason');
  observer.observe(reasonSection);
});


//home__menu アニメーション 
function menuScrollAnime() {
  var time = 750;

  $('.home__menu-list').each(function () {
    var parent = this;
    var elemPos = $(this).offset().top; // 要素の位置
    var scroll = $(window).scrollTop(); // 現在のスクロール位置
    var windowHeight = $(window).height(); // 画面の高さ
    var childs = $(this).find('.home__menu-item'); // home__menu-itemを取得

    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
      $(parent).addClass("play"); // playクラスを追加して一度だけ実行

      // 各home__menu-itemを順番に表示
      $(childs).each(function (i) {
        var that = this;
        setTimeout(function () {
          $(that).addClass("fadeInLeft");
        }, i * time); // iの値で遅延時間を調整
      });
    }
  });
}

$(window).on('scroll', function () {
  menuScrollAnime();
});
