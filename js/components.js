 // humメニュー
 $(function () { 
  // ページロード時に必ず非表示に設定
  $(".header-nav-sp").hide();
  
  $(".sp-menu-btn").on("click", function () {
    $(this).toggleClass("open");

    // ハンバーガーメニューが開かれているかどうかで処理を分ける
    if ($(this).hasClass("open")) {
      // 開く処理
      $(".header-nav-sp").stop().fadeIn(300);
      $(".sp-menu-btn").addClass("hidden"); // sp-menu-btn を非表示
      $(".sp-menu-btn span::before, .sp-menu-btn span::after").css("background-color", "#fff");
    } else {
      // 閉じる処理
      $(".header-nav-sp").stop().fadeOut(300);
      $(".sp-menu-btn").removeClass("hidden"); // sp-menu-btn を表示
    }
  });
});

 // スクロールイベント
 $(window).on("scroll", function () {
  const scrollTop = $(this).scrollTop();
  const windowHeight = $(window).height();
  const spMenu = $(".sp-menu-btn");

  let isWhite = false; // 白にするかどうかのフラグ

  // 判定する要素
  const targets = [
    ".individual-top",
    ".header-nav-sp",
    ".home__reason",
    ".reserve__container",
    ".footer"
  ];

  targets.forEach((selector) => {
    const target = $(selector);
    if (target.length) {
      const targetTop = target.offset().top;
      const targetBottom = targetTop + target.outerHeight();
      
      // sp-menu-btn がターゲットの範囲内にある場合
      if (scrollTop + spMenu.height() >= targetTop && scrollTop <= targetBottom) {
        isWhite = true;
      }
    }
  });

  if (isWhite) {
    spMenu.addClass("white-bg").removeClass("scrolled");
  } else {
    spMenu.addClass("scrolled").removeClass("white-bg");
  }
});


