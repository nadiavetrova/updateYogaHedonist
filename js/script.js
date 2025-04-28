

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
console.log(openSlider);

let isSliderStarted = false;

openSlider.addEventListener('click', showSlider);
btnClose.addEventListener('click', closeSlider);

function showSlider() {
  console.log(111);

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



const openSliderAdapt = document.querySelector('.openDocumentSliderAdapt');
const documentsSliderAdapt = document.querySelector('.documentsSlider');
const btnCloseAdapt = document.querySelector('.btnClose');
console.log(openSlider);

let isSliderStartedAdapt = false;

openSliderAdapt.addEventListener('click', showSlider);
btnCloseAdapt.addEventListener('click', closeSlider);

function showSlider() {
  console.log(111);

  documentsSliderAdapt.classList.remove('hide');
  documentsSliderAdapt.classList.add('activeSlider');

  if (!isSliderStartedAdapt) {
    startSlider(1);
    isSliderStartedAdapt = true;
  }
}

function closeSlider() {
  documentsSliderAdapt.classList.remove('activeSlider');
  documentsSliderAdapt.classList.add('hide');
}






function initClasses() {
  const groupClassBtn = document.querySelector('.groupClassBtn')
  const individClassBtn = document.querySelector('.individClassBtn')

  const groupClassBox = document.querySelector('.groupClassBox')
  const individClassBox = document.querySelector('.individClassBox')

  groupClassBtn.addEventListener('click', showGroupClass);
  individClassBtn.addEventListener('click', showIndivClass);




  function showGroupClass() {
    groupClassBtn.classList.add('activeBtn');
    individClassBtn.classList.remove('activeBtn');
    individClassBtn.classList.add('hideBtn');
    groupClassBtn.classList.remove('hideBtn');

    groupClassBox.classList.add('activeClass');
    groupClassBox.classList.remove('hideClass');

    individClassBox.classList.add('hideClass');
    individClassBox.classList.remove('activeClass');
  }

  function showIndivClass() {
    groupClassBtn.classList.remove('activeBtn');
    individClassBtn.classList.add('activeBtn');
    individClassBtn.classList.remove('hideBtn');
    groupClassBtn.classList.add('hideBtn');

    groupClassBox.classList.remove('activeClass');
    groupClassBox.classList.add('hideClass');

    individClassBox.classList.remove('hideClass');
    individClassBox.classList.add('activeClass');
  }
}


initClasses()


// Функция для открытия/закрытия меню
function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  var burgerIcon = document.querySelector('.burgerMenuIcon');

  // Переключение видимости меню
  menu.classList.toggle('show');
  burgerIcon.classList.toggle('active');

  // Если меню открыто, добавляем обработчик закрытия при клике вне меню и на ссылки
  if (menu.classList.contains('show')) {
    document.addEventListener('click', closeMenuOnClickOutside);

    // Добавляем обработчики для ссылок
    var links = menu.querySelectorAll('.headerLink');
    links.forEach(function (link) {
      link.addEventListener('click', closeOnLinkClick);
    });
  } else {
    document.removeEventListener('click', closeMenuOnClickOutside);

    // Убираем обработчики для ссылок
    var links = menu.querySelectorAll('.headerLink');
    links.forEach(function (link) {
      link.removeEventListener('click', closeOnLinkClick);
    });
  }
}

// Функция для закрытия меню при клике вне его
function closeMenuOnClickOutside(event) {
  var menu = document.getElementById('mobileMenu');
  var burgerIcon = document.querySelector('.burgerMenuIcon');

  // Проверяем, был ли клик вне меню и вне кнопки
  if (!menu.contains(event.target) && !burgerIcon.contains(event.target)) {
    closeMenu();
  }
}

// Функция для закрытия меню при клике на ссылку
function closeOnLinkClick() {
  closeMenu();
}

// Вспомогательная функция для закрытия меню
function closeMenu() {
  var menu = document.getElementById('mobileMenu');
  var burgerIcon = document.querySelector('.burgerMenuIcon');
  menu.classList.remove('show');
  burgerIcon.classList.remove('active');
  document.removeEventListener('click', closeMenuOnClickOutside);

  // Убираем обработчики для ссылок
  var links = menu.querySelectorAll('.headerLink');
  links.forEach(function (link) {
    link.removeEventListener('click', closeOnLinkClick);
  });
}