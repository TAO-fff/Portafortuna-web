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
