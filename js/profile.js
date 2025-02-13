// outfit-fadeUp アニメーションをスクロール時に発火させる
const items = document.querySelectorAll('.profile__photo-outfit-item');
const randomizedOrder = [...items].sort(() => Math.random() - 0.5); // ランダムな順番に並び替え

randomizedOrder.forEach((item, index) => {
  const delay = index * 0.4; // 0.3秒ずつ遅れてアニメーションする
  item.style.transitionDelay = `${delay}s`;
  item.classList.add('outfit-fadeUp');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('play');
      observer.unobserve(entry.target); // 1回だけ発火
    }
  });
}, { threshold: 0.2 });

randomizedOrder.forEach(item => observer.observe(item));
