//reason afdein 
function delayScrollAnime() {
  var time = 1.2; // 遅延時間
  var value = time;

  $('.delayScroll').each(function () {
    var parent = this;
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var childs = $(this).children();

    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
      $(childs).each(function () {
        if (!$(this).hasClass("fadeUp")) {
          $(parent).addClass("play");
          $(this).css("animation-delay", value + "s");
          $(this).addClass("fadeUp");
          value = value + time;

          // 最後の要素が終わったらplayクラスを外す
          var index = $(childs).index(this);
          if ((childs.length - 1) == index) {
            $(parent).removeClass("play");
          }
        }
      });
    } else {
      $(childs).removeClass("fadeUp");
      value = time;
    }
  });
}

// スクロールイベントでdelayScrollAnimeを実行
$(window).on('scroll', function () {
  delayScrollAnime();
});
