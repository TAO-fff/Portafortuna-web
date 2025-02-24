// // ページ内リンクのスムーズスクロール
$(function () {
  // ページ内リンクをクリックしたとき
  $('a[href^="#"]').on('click', function (e) {
    // スクロール先のIDを取得
    var target = $($(this).attr('href'));

    // 対象が見つかった場合にスムーズにスクロール
    if (target.length) {
      e.preventDefault();  // デフォルトのリンク動作を無効化
      $('html, body').animate({
        scrollTop: target.offset().top - 50 // 50pxの余白を追加
      }, 500); // 500msでスクロール
    }
  });
});

//home__menu 各メニューfadeUpアニメーション 
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


// reason
// reason 背景色
$(window).on('scroll', function () {
  var triggerPos = $('.home__reason-groupe').offset().top; // 発火位置
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();

  if (scroll + windowHeight > triggerPos) {
      $('.bgextend').each(function () {
          if (!$(this).hasClass('animated')) { // すでにアニメーションが実行されたか確認
              $(this).css('animation-play-state', 'running'); // アニメーションを開始
              $(this).addClass('animated'); // 二度発火を防ぐ
          }
      });
  }
});






// reason wrapper1つずつ表示
document.addEventListener("DOMContentLoaded", function () {
  const reasonItems = document.querySelectorAll(".home__reason-item-wrap");

  function fadeUpOnScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;

    reasonItems.forEach((item, index) => {
      const itemPosition = item.offsetTop;

      if (scrollPosition > itemPosition + 100) {
        setTimeout(() => {
          item.classList.add("fade-in");
        }, index * 1000); 
      }
    });
  }

  window.addEventListener("scroll", fadeUpOnScroll);
});