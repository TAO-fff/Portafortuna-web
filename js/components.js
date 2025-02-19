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

  // スクロールイベント
  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop();
    const homeTopHeight = $(".home__reason").outerHeight() || 0; // 存在しない場合は0
    const individualTopHeight = $(".individual-top").outerHeight() || 0;
    const triggerHeight = Math.max(homeTopHeight, individualTopHeight); // どちらか大きい方を基準

    // スクロール位置が home__top または individual-top より下にきたら
    if (scrollTop > triggerHeight) {
      $(".sp-menu-btn").addClass("scrolled");
      $(".sp-menu-btn span::before, .sp-menu-btn span::after").css("background-color", "#715F5A");
    } else {
      $(".sp-menu-btn").removeClass("scrolled");
      $(".sp-menu-btn span::before, .sp-menu-btn span::after").css("background-color", ""); // 初期状態に戻す
    }
  });
});
