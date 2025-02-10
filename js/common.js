 // home voice スライダー
 $(function () {
    $(".home__voice-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      pauseOnFocus: false,//フォーカスで一時停止
      pauseOnHover: false,//マウスホバーで一時停止
      pauseOnDotsHover: false,//ドットナビをマウスホバーで一時停止
      centerMode: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoPlaySpeed: 1000,
            touchMove: true
          },
        },
      ],
    });
  });