
document.addEventListener('DOMContentLoaded', () => {
  const carouselInner = document.querySelector('.carousel-inner');
  let intervalId;

  const startCarousel = () => {
      intervalId = setInterval(() => {
          const firstCard = carouselInner.querySelector('.event-card');
          carouselInner.appendChild(firstCard);
          carouselInner.style.transition = 'none';
          carouselInner.style.transform = 'translateX(-33.3333%)';
          requestAnimationFrame(() => {
              carouselInner.style.transition = 'transform 0.5s ease';
              carouselInner.style.transform = 'translateX(0)';
          });
      }, 3000); 
  };

  const stopCarousel = () => {
      clearInterval(intervalId);
  };

  carouselInner.addEventListener('mouseover', stopCarousel);
  carouselInner.addEventListener('mouseout', startCarousel);

  startCarousel();
});
