/**************
concept toggle
**************/
document.addEventListener('DOMContentLoaded', () => {
  const conceptGroups = document.querySelectorAll('.menu__concept-left-wrap, .menu__concept-center-wrap, .menu__concept-right-wrap');

  conceptGroups.forEach(group => {
      const toggleBtn = group.querySelector('.sp-concept__toggle-btn');
      const conceptTxt = group.querySelector('.menu__concept-txt');
      const clickableArea = group.querySelector('.menu__concept-left, .menu__concept-center, .menu__concept-right');

      const toggleContent = () => {
          if (window.innerWidth <= 768) {
              conceptTxt.classList.toggle('active');
              toggleBtn.classList.toggle('active'); // ここでボタンにもクラスを付与
          }
      };

      if (toggleBtn) {
          toggleBtn.addEventListener('click', (e) => {
              e.stopPropagation();  
              toggleContent();
          });
      }

      if (clickableArea) {
          clickableArea.addEventListener('click', toggleContent);
      }
  });
});


/**************
 menu-flow toggle
 **************/
 $(document).ready(function () {
  $(".sp-menu__flow-btn").on("click", function () {
    if ($(window).width() <= 768) {
      // クリックされたボタンの直後の .menu__item-flow をスライド
      $(this).closest(".menu__item-bottom").find(".menu__item-flow").stop().slideToggle(300);
      
      // トグルボタンの回転アニメーション
      $(this).find(".sp-menu__item-toggle-btn").toggleClass("active");
    }
  });
});



/**************
 menu-area  タブ切替表示
 **************/
// ページ読み込み時に最初の.menu__area-innerのみis-activeを付与
$(document).ready(function() {
  // 最初の .menu__area-inner のみに is-active を付与
  var firstMenuAreaInner = $('.menu__area-inner').first();
  firstMenuAreaInner.addClass('is-active');

  // 最初の .menu__area-tab の li に active を付与
  var firstMenuTab = $('.menu__area-tab li').first();
  firstMenuTab.addClass('active');

  // .menu__area-tab のリンクがクリックされた時の処理
  $('.menu__area-tab a').on('click', function(event) {
    event.preventDefault(); // デフォルトのリンク動作を無効化
    
    // クリックされたリンクのhref属性を取得（例：#lunch）
    var targetId = $(this).attr('href');

    // 全ての.menu__area-innerからis-activeを削除
    $('.menu__area-inner').removeClass('is-active');
    
    // 対応する.menu__area-innerにis-activeを付与
    $(targetId).addClass('is-active');

    // 全ての.menu__area-tabのliからactiveを削除
    $('.menu__area-tab li').removeClass('active');
    
    // クリックされたタブにactiveを付与
    $(this).parent().addClass('active');
  });
});






/************** 
 qa toggle
**************/

document.addEventListener('DOMContentLoaded', () => {
  const qaItems = document.querySelectorAll('.menu__qa-list');

  qaItems.forEach(item => {
    const toggleBtn = item.querySelector('.sp-menu__qa-toggle-btn'); // ボタン
    const question = item.querySelector('.menu__qa-list-q'); // 質問部分

    question.addEventListener('click', () => {
      // クリックした項目の開閉
      item.classList.toggle('active');

      // アイコンの向きを変更
      if (toggleBtn) {
        toggleBtn.classList.toggle('active');
      }
    });
  });
});
