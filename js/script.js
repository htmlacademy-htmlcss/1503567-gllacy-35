const slides = document.querySelectorAll('.slider-item');
const buttonPrev = document.querySelector('.slider-button-prev');
const buttonNext = document.querySelector('.slider-button-next');
const bullets = document.querySelectorAll('.slider-pagination-button');
const slidesAmount = slides.length;
let currentIndex = 0;

const onSlideChange = (index) => {
  currentIndex = index;
  const activeSlide = document.querySelector('.slider-item.active');
  const activeBullet = document.querySelector('.slider-pagination-button.active');

  document.body.classList.forEach((currentClass) => {
    if (currentClass.startsWith("theme-")) {
      document.body.classList.remove(currentClass);
    }
  });

  document.body.classList.add(`theme-${slides[index].dataset.theme}`);

  activeSlide.classList.remove('active');
  slides[index].classList.add('active');

  activeBullet.classList.remove('active');
  bullets[index].classList.add('active');
};

buttonPrev.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex--;
  currentIndex = (currentIndex < 0) ? slidesAmount - 1 : currentIndex;
  onSlideChange(currentIndex);
});

buttonNext.addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex++;
  currentIndex = (currentIndex === slidesAmount) ? 0 : currentIndex;
  onSlideChange(currentIndex);
});

bullets.forEach((element, index) => element.addEventListener('click', () => onSlideChange(index)));


const modalOpenButton = document.querySelector('.modal-button-open-js')
const modalContainer = document.querySelector('.modal-container')
const modalInner = document.querySelector('.modal-container .modal')
const modalCloseButton = document.querySelector('.modal-button-close-js')

modalOpenButton.addEventListener('click', (event) => {
  event.preventDefault()
  modalContainer.classList.add('is-open')
});

[modalContainer, modalCloseButton].forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault()
    modalContainer.classList.remove('is-open')
  })
});

modalInner.addEventListener('click', (event) => {
  event.stopPropagation();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    modalContainer.classList.remove('is-open')
  }
})
