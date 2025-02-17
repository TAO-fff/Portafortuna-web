// voice gallery スライダー
$(window).on("load", function () {
  setTimeout(function () {
    $(".voice__gallery-slider-list").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinite: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      autoplay: true,
      autoplaySpeed: 3000,
      appendArrows: ".voice__gallery-slider-arrows", // 独自のarrowコンテナを指定
      appendDots: ".voice__gallery-slider-dots", // 独自のdotsコンテナを指定
      customPaging: function (slider, i) {
        return '<span class="voice__dot"></span>'; // dotsのカスタムHTML
      },
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    console.log("Slick initialized with delay");
  }, 500);
});
