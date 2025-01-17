const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slideTitle = document.getElementById('slide-title');
const slideText = document.getElementById('slide-text');

const slides = [
  { title: 'Victor', text: 'This is the description for Slide 1.', image: './Assets/Images/logo.png' },
  { title: 'Sam', text: 'This is the description for Slide 2.', image: './Assets/Images/logo.png' },
  { title: 'Joseph', text: 'This is the description for Slide 3.', image: './Assets/Images/logo.png' },
  { title: 'Dillon', text: 'This is the description for Slide 3.', image: './Assets/Images/logo.png' }
];

let currentIndex = 0;

function updateCarousel(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  slideTitle.textContent = slides[index].title;
  slideText.textContent = slides[index].text;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});