document.addEventListener('DOMContentLoaded', () => {
    const snowElements = document.querySelectorAll('.snow');
    
    snowElements.forEach((element, index) => {
      element.style.setProperty('--i', index);  // 文字ごとにアニメーションの遅延を設定
    });
  });
  