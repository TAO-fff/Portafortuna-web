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
          var elemPos = $(this).offset().top - 0; // 要素の位置（100px 上）
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll >= elemPos - windowHeight) {
              $(this).stop().delay(index * 800).fadeIn(1000); // 300msの遅延を加えて、1つずつ表示
          } else {
              $(this).stop().fadeOut(500); // 画面外に出たらフェードアウト
          }
      });
  }

  // 初回読み込み時に一度実行（スクロールしなくても発火するように）
  fadeAnime();
});
