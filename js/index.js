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
      }, 500);
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
$(document).ready(function () {
  // スクロールイベントを監視
  $(window).on("scroll", function () {
      fadeAnime();
  });

  // 最低限おぼえておきたい動きの関数
  function fadeAnime() {
      // 背景色が伸びて出現（上下から）
      $(".bgUDextendTrigger").each(function () {
          var elemPos = $(this).offset().top - -50; // 要素の位置（50px 上）
          var scroll = $(window).scrollTop(); // 現在のスクロール位置
          var windowHeight = $(window).height(); // ウィンドウの高さ
          if (scroll >= elemPos - windowHeight) {
              $(this).addClass("bgUDextend"); // 画面内に入ったらクラスを追加
          } else {
              $(this).removeClass("bgUDextend"); // 画面外に出たらクラスを削除
          }
      });

      // 背景色が伸びて出現（テキスト表示）
      $(".bgappearTrigger").each(function () {
          var elemPos = $(this).offset().top - 5;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll >= elemPos - windowHeight) {
              $(this).addClass("bgappear");
          } else {
              $(this).removeClass("bgappear");
          }
      });

      // home__reason-item-wrapを1つずつ表示
      $(".home__reason-item-wrap").each(function (index) {
          var elemPos = $(this).offset().top - 0;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll >= elemPos - windowHeight) {
              $(this).stop().delay(index * 600).fadeIn(1000); // 300msの遅延を加えて、1つずつ表示
          } else {
              $(this).stop().fadeOut(500); // 画面外に出たらフェードアウト
          }
      });
  }

  // 初回読み込み時に一度実行（スクロールしなくても発火するように）
  fadeAnime();
});


//768px以下 アコーディオン
  $(document).ready(function () {
    $(".sp-home__reason-item-wrap").on("click", function () {
      var $item = $(this).closest(".sp-home__reason-item");
      var $content = $item.find(".sp-home__reason-txt");
      var $arrow = $item.find(".sp-home__reason-arrow");

      if ($item.hasClass("active")) {
        $content.slideUp(300);
        $item.removeClass("active");
      } else {
        $(".sp-home__reason-item").removeClass("active").find(".sp-home__reason-txt").slideUp(300);
        $item.addClass("active");
        $content.slideDown(300);
      }
    });
  });
