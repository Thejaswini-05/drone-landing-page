let index = 0;  // Initial slide index

function showSlide(n) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  
  // Calculate the correct index
  index = (n + items.length) % items.length;

  // Apply transform to slide
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Move to next slide automatically
function nextSlide() {
  showSlide(index + 1);
}

// Set the carousel to autoplay every 3 seconds
setInterval(nextSlide, 4000);

// Ensure smooth transition from last to first slide
document.querySelector('.carousel').addEventListener('transitionend', () => {
  const items = document.querySelectorAll('.carousel-item');
  if (index === items.length) {
    index = 0;
    document.querySelector('.carousel').style.transition = 'none';  // Remove transition for instant move
    document.querySelector('.carousel').style.transform = 'translateX(0)';
    setTimeout(() => {
      document.querySelector('.carousel').style.transition = 'transform 0.5s ease-in-out';
    });
  }
});
