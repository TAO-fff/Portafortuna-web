 // home voice スライダー
$(function () {
  $(".home__voice-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 1000,
          touchMove: true,
        },
      },
    ],
  });

  // 非アクティブスライドに tabindex="-1" を追加
  $(".home__voice-slider").on("afterChange", function (event, slick, currentSlide) {
    $(".home__voice-area").attr("tabindex", "-1").attr("aria-hidden", "true");
    $(".slick-active").attr("tabindex", "0").attr("aria-hidden", "false");
  });

  // 初期化時にも tabindex を設定
  $(".home__voice-slider").on("init", function () {
    $(".home__voice-area").attr("tabindex", "-1").attr("aria-hidden", "true");
    $(".slick-active").attr("tabindex", "0").attr("aria-hidden", "false");
  });
});
