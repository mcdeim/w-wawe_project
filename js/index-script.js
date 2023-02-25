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
const swiper = new Swiper('.swiper-object .swiper', {
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