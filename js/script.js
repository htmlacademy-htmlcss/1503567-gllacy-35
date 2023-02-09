const contactsButton = document.querySelector('.feedback-button');
const modalContainer = document.querySelector('.popup');

contactsButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalContainer.classList.add('popup-active');
});

modalContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.cross-btn')) {
    evt.preventDefault();
    modalContainer.classList.remove('popup-active');
  }
  if (evt.target.closest('.popup-body')) {
    return;
  }
  evt.preventDefault();
  modalContainer.classList.remove('popup-active');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modalContainer.classList.remove('popup-active');
  }
});

const sliderButtonPrev = document.querySelector('.slider-preview');
const sliderButtonNext = document.querySelector('.slider-next');
const slides = document.querySelectorAll('.slider-item');
const bullets = document.querySelectorAll('.bullet');

let currentSlide = 0;

const removeSlideActiveState = () => {
  slides[currentSlide].classList.remove('active');
  bullets[currentSlide].classList.remove('bullet-current');
};

const addSlideActiveState = () => {
  slides[currentSlide].classList.add('active');
  document.body.style.backgroundColor = slides[currentSlide].dataset.theme;
  bullets[currentSlide].classList.add('bullet-current');
};

sliderButtonPrev.addEventListener('click', (evt) => {
  evt.preventDefault();
  removeSlideActiveState();
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide -= 1;
  }
  addSlideActiveState();
});

sliderButtonNext.addEventListener('click', (evt) => {
  evt.preventDefault();
  removeSlideActiveState();
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }
  addSlideActiveState();
});

bullets.forEach((element, index) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    removeSlideActiveState();
    currentSlide = index;
    addSlideActiveState();
  });
})
