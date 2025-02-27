// humメニュー
$(function () {
  $(".sp-menu-btn").on("click", function () {
    $(this).toggleClass("open");
    $(".header-nav-sp").toggleClass("open");
  });

  $(".header-nav-sp a").on("click", function () {
    $(".sp-menu-btn").removeClass("open");
    $(".header-nav-sp").removeClass("open");
  });
});
