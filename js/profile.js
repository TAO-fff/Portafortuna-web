// outfit-fadeUp アニメーションをスクロール時に発火させる
const items = document.querySelectorAll('.profile__photo-outfit-item');

const orderedItems = [items[0], items[2], items[1]];

orderedItems.forEach((item, index) => {
  const delay = index * 0.4; 
  item.style.transitionDelay = `${delay}s`;
  item.classList.add('outfit-fadeUp');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('play');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.2 });

orderedItems.forEach(item => observer.observe(item));
