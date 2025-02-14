 // ハンバーガー
 $(function () {
    // ページロード時に必ず非表示に設定
    $(".header-nav-sp").hide();
  
    $(".sp-menu-btn").on("click", function () {
      $(this).toggleClass("open");
  
      if ($(this).hasClass("open")) {
        // 開く処理
        $(".header-nav-sp").stop().fadeIn(300);
      } else {
        // 閉じる処理
        $(".header-nav-sp").stop().fadeOut(300);
      }
    });
  });
  