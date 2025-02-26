 // humメニュー
 $(function () { 
  $(".header-nav-sp").hide();

  $(".sp-menu-btn").on("click", function () {
    $(this).toggleClass("open");

    if ($(this).hasClass("open")) {
      $(".header-nav-sp").stop().fadeIn(300);
    } else {
      $(".header-nav-sp").stop().fadeOut(300);
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


