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
      // 追加: scrolledクラスの設定
      $(".sp-menu-btn").addClass("scrolled");
    } else {
      // 閉じる処理
      $(".header-nav-sp").stop().fadeOut(300);
      // 追加: scrolledクラスの削除
      $(".sp-menu-btn").removeClass("scrolled");
    }
  });

  // スクロールイベント
  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop();
    const individualTopHeight = $(".individual-top").outerHeight();

    // スクロール位置が .individual-top より下にきたら
    if (scrollTop > individualTopHeight) {
      $(".sp-menu-btn").addClass("scrolled");
    } else {
      $(".sp-menu-btn").removeClass("scrolled");
    }
  });
});

  