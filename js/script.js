

function startSlider(initSlideNumber) {
  const slider = document.querySelector('.slider');
  const sliderLine = document.querySelector('.slider-line');
  const slides = document.querySelectorAll('.slide');

  const store = {
    width: slider.offsetWidth,
    currentSlide: initSlideNumber,
    maxSliderNumber: slides.length
  };

  if (typeof initSlideNumber !== 'number') {
    store.currentSlide = 1;
  }

  function sliderInit() {
    store.width = slider.offsetWidth;

    slides.forEach(function (slide) {
      slide.style.width = store.width + 'px';
    });

    let sliderLineWidth = slides.length * store.width;
    sliderLine.style.width = sliderLineWidth + 'px';
  }

  sliderInit()

  function moveSlide() {
    const offset = (store.currentSlide - 1) * store.width;
    sliderLine.style.left = -offset + 'px';
  }

  function handleClick(event) {

    const isSliderBtn = event.target.tagName == 'IMG';
    if (isSliderBtn) {
      const isPrevBtn = event.target.classList.contains('fa-circle-arrow-prev');
      const isNextBtn = event.target.classList.contains('fa-circle-arrow-next');

      if (isPrevBtn && store.currentSlide > 1) {
        store.currentSlide -= 1;
      }

      if (isNextBtn && store.currentSlide < store.maxSliderNumber) {
        store.currentSlide += 1;
      }
      moveSlide();
    }
  }

  slider.addEventListener('click', handleClick)

  window.addEventListener('resize', function () {
    sliderInit();
    moveSlide();
  });
}




const openSlider = document.querySelector('.openDocumentSlider');
const documentsSlider = document.querySelector('.documentsSlider');
const btnClose = document.querySelector('.btnClose');
console.log(btnClose);
let isSliderStarted = false;

openSlider.addEventListener('click', showSlider);
btnClose.addEventListener('click', closeSlider);

function showSlider() {
  documentsSlider.classList.remove('hide');
  documentsSlider.classList.add('activeSlider');

  if (!isSliderStarted) {
    startSlider(1);
    isSliderStarted = true;
  }
}

function closeSlider() {
  documentsSlider.classList.remove('activeSlider');
  documentsSlider.classList.add('hide');
}
