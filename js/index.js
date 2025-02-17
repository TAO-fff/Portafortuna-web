// reason
$(document).ready(function () {
  $(window).on("scroll", function () {
      let scrollTop = $(window).scrollTop();
      let triggerPos = $(".home__reason-area").offset().top - $(window).height() * 0.8;

      if (scrollTop > triggerPos) {
          // ① 各 home__reason-item の背景色を上から下に伸ばす
          $(".home__reason-item").each(function (index) {
              $(this)
                  .delay(index * 200) // 0.2秒ずつ遅延
                  .animate({ backgroundSize: "100% 100%" }, 500);
          });

          // ② 各 home__reason-item-wrap を順番にフェードイン
          $("#homeReason1").delay(800).fadeIn(800);
          $("#homeReason2").delay(1600).fadeIn(800);
          $("#homeReason3").delay(2400).fadeIn(800);
          $("#homeReason4").delay(3200).fadeIn(800);
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
