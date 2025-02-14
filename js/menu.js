document.addEventListener('DOMContentLoaded', () => {
    const conceptGroups = document.querySelectorAll('.menu__concept-left-wrap, .menu__concept-center-wrap, .menu__concept-right-wrap');
  
    conceptGroups.forEach(group => {
      const toggleBtn = group.querySelector('.sp-concept__toggle-btn');
      const conceptTxt = group.querySelector('.menu__concept-txt');
      const clickableArea = group.querySelector('.menu__concept-left, .menu__concept-center, .menu__concept-right');
  
      const toggleContent = () => {
        if (window.innerWidth <= 767) {
          conceptTxt.classList.toggle('active');
        }
      };
  
      if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
          e.stopPropagation();  // 他のクリックイベントとバッティングしないようにする
          toggleContent();
        });
      }
  
      if (clickableArea) {
        clickableArea.addEventListener('click', toggleContent);
      }
    });
  });
  