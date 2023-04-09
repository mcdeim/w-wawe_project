// PODCASTS OPEN
$(document).ready(function() {
    var list = $(".podcast__list .podcast__item");
    var numToShow = 8;
    var button = $(".podcast__button");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
      button.show();
    }
    list.slice(0, numToShow).show();
    button.click(function() {
      var showing = list.filter(':visible').length;
      list.slice(showing - 1, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      if (nowShowing >= numInList) {
        button.hide();
      }
    });
  });

  // PODCASTS OPEN MOBILE (360px)
$(document).ready(function() {
    var list = $(".podcast__list-360 .podcast__item");
    var numToShow = 4;
    var button = $(".podcast__button");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
      button.show();
    }
    list.slice(0, numToShow).show();
    button.click(function() {
      var showing = list.filter(':visible').length;
      list.slice(showing - 1, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      if (nowShowing >= numInList) {
        button.hide();
      }
    });
  });

//   CUSTOM SELECT
const element = document.querySelector('.broadcast__select');
const choices = new Choices(element, {

    itemSelectText: '',

    searchEnabled: false,

    position: 'bottom',

    sorter: function(a, b) {
        return b.label.length - a.label.length;
    },
    
});

// SCROLL ANCHORS
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// GUEST ACCORDION
new Accordion('.accordion-container');

// GUEST TABS
document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {
            btn.classList.remove('tabs-nav__btn--active')
        });

        e.currentTarget.classList.add('tabs-nav__btn--active');

        document.querySelectorAll('.tabs__item').forEach(function(tabsBtn) {
            tabsBtn.classList.remove('tabs__item--active')
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
    });
});

// SWIPER
const swiper = new Swiper('.swiper-object-1440 .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-uniq',
      prevEl: '.swiper-button-prev-uniq',
    },
  });

const swiperOne = new Swiper('.swiper-object-1024 .swiper', {
// Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-uniq',
    prevEl: '.swiper-button-prev-uniq',
  },
});

const swiperPlylist = new Swiper('.playlist__form-360', {

    freeMode: {
        enabled: true,
        sticky: false,
      },
    
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 15,
    autoHeight: true,
    });

// let PlBtnMob = document.querySelectorAll('.playlist-360__btn');
// PlBtnMob.forEach(function (e) {
//     e.addEventListener('click', function () {
//         e.classList.toggle('playlist-360__btn--active')
//     })
// })

//   BUTTON-SEARCH
let search = document.querySelector('.header__button-search');
let searchOpen = document.querySelector('.header__input-search');

search.addEventListener('click', 
    function () {
        searchOpen.classList.toggle('header__input-search--active');
    });

// BUTTON-ENTR
let enterBtn = document.querySelector('.header__button-entr');
let enterPopup = document.querySelector('.header__popup-entr');
let closePopupBtn = document.querySelector('.popup__close-btn');

enterBtn.addEventListener('click', 
    function () {
        enterPopup.classList.add('header__popup-entr--active');
        document.body.classList.add('body__popup--active');
    });

closePopupBtn.addEventListener('click', 
    function () {
        enterPopup.classList.remove('header__popup-entr--active');
        document.body.classList.remove('body__popup--active');
})

// MANAGE BUTTON PLAY / PAUSE
let playBtn1 = document.querySelector('.manager__box-button-1-play--active');
let pauseBtn1 = document.querySelector('.manager__box-button-1-pause--active');
let playBtn2 = document.querySelector('.manager__box-button-2-play--active');
let pauseBtn2 = document.querySelector('.manager__box-button-2-pause--active');

playBtn1.addEventListener('click', 
    
    function () {
        playBtn1.classList.add('manager__box-button-1-play--deactive');
        pauseBtn1.classList.remove('manager__box-button-1-pause--deactive');
        pauseBtn2.classList.add('manager__box-button-2-pause--deactive');
        playBtn2.classList.remove('manager__box-button-2-play--deactive');
});

pauseBtn1.addEventListener('click', 
    
function () {
        pauseBtn1.classList.add('manager__box-button-1-pause--deactive');
        playBtn1.classList.remove('manager__box-button-1-play--deactive');
});


playBtn2.addEventListener('click', 
    
    function () {
        playBtn2.classList.add('manager__box-button-2-play--deactive');
        pauseBtn2.classList.remove('manager__box-button-2-pause--deactive');
        pauseBtn1.classList.add('manager__box-button-1-pause--deactive');
        playBtn1.classList.remove('manager__box-button-1-play--deactive');
});

pauseBtn2.addEventListener('click', 
    
function () {
        pauseBtn2.classList.add('manager__box-button-2-pause--deactive');
        playBtn2.classList.remove('manager__box-button-2-play--deactive');
});


// VALIDATE FORM

const validation = new JustValidate('#about-us-form', {
    errorLabelStyle: {
      color: '#D52B1E',
    }
  });

  validation
  .addField('#about-us-text', [
  {
    rule: 'required',
    errorMessage: 'Добавьте в это поле сообщение для нас!'
  },
  ])

  .addField('#about-us-name', [
  {
    rule: 'required',
    errorMessage: 'Как вас зовут?',
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Не короче 3 символов',
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Слишком длинное имя',
  },
])
  .addField('#about-us-email', [
  {
    rule: 'required',
    errorMessage: 'Укажите ваш e-mail',
  },
  {
    rule: 'email',
    errorMessage: 'Email не корректный!',
  }
])
;

// BURGER BUTTON REALIZE

let burger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.header__nav-top');
let burgerMenuBtn = document.querySelectorAll('.nav__item-top');

burger.addEventListener('click',
    function () {
        burger.classList.toggle('burger--active');
        burgerMenu.classList.toggle('header__nav-top--active');
        document.body.classList.toggle('body__burger--active')
    });



burgerMenuBtn.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('burger--active');
        burgerMenu.classList.remove('header__nav-top--active');
        document.body.classList.remove('body__burger--active');
    });
});

// WHAT IS IN LIVE?
let buttonOpenLiveMobile = document.querySelector('.manage__box-btn-320');
let LiveMobile = document.querySelector('.manage__box-wrapper-320-bottom');

buttonOpenLiveMobile.addEventListener('click', 
    function () {
        buttonOpenLiveMobile.classList.toggle('manage__box-btn-320--active');
        LiveMobile.classList.toggle('manage__box-wrapper-320-bottom--active');
    });