ready(function(){

  // В этом месте должен быть написан ваш код




  // ВНИМАНИЕ!
  // Нижеследующий код (кастомный селект и выбор диапазона цены) работает
  // корректно и не вызывает ошибок в консоли браузера только на главной.
  // Одна из ваших задач: сделать так, чтобы на странице корзины в консоли
  // браузера не было ошибок.

  // Кастомные селекты (кроме выбора языка)


//burger



let menu = document.querySelector(".main-nav");
let burger = document.querySelector(".burger");
menu.classList.add('.main-nav--open');

burger.addEventListener('click', (e) => {
  menu.classList.toggle('main-nav--open');
  burger.classList.toggle('burger--close');
});

//slider

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 4,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.popular__slider-btn--right',
      prevEl: '.popular__slider-btn--left',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

//filter

function filter() {
    let findfilter = document.querySelector('#filters-trigger');

    findfilter.addEventListener('click', function(e) {
      e.preventDefault();

      //console.log(findfilter);

      findfilter.closest('.filters').classList.toggle('filters--open');
    });

};

filter();

//dataJS

  const template = document.querySelector('.j-article');
  const templateFragment = document.createDocumentFragment();

  for (i=0; i < 8; i++) {

    const bookTemplate = template.content.cloneNode(true);

    bookTemplate.querySelector('.card__title').textContent = books[i].name;
    bookTemplate.querySelector('.card__price').textContent = books[i].price + ' ₽';
    bookTemplate.querySelector('.card__img').src = 'img/books/' + books[i].uri + '.jpg';

    // if (books[i].new === 1) {
    //   bookTemplate.appendChild(querySelector('.card__title')).innerHTML = '<span class="card__new">new</span>';
    // }

    templateFragment.appendChild(bookTemplate);
  };

  document.querySelector('.catalog__books-list').appendChild(templateFragment);

//popup


let cardPopup = document.querySelectorAll('.card__inner');
for (i = 0, len = cardPopup.length; i < len; i++) {
  cardPopup[i].onclick = function() {
    showPopup();
  };
}


function showPopup() { 
  let showPopup = document.querySelector('.modal');
  showPopup.classList.add('modal--open');
  return;
}; 

let closePopup = document.querySelector('.modal__close');
closePopup.addEventListener('click', event => {
  
  let close = document.querySelector('.modal--open');
  close.classList.remove('modal--open');;
});


  new Choices('.field-select:not(#lang) select.field-select__select', {
    searchEnabled: false,
    shouldSort: false,
  });
  // Кастомный селект выбора языка отдельно
  new Choices('#lang select.field-select__select', {
    searchEnabled: false,
    shouldSort: false,
    callbackOnCreateTemplates: function (template) {
      return {
        item: (classNames, data) => {
          return template(`
            <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable}" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''} ${data.disabled ? 'aria-disabled="true"' : ''}>
              ${getLangInSelectIcon(data.value)} ${data.label.substr(0,3)}
            </div>
          `);
        },
        choice: (classNames, data) => {
          return template(`
            <div class="${classNames.item} ${classNames.itemChoice} ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}" data-select-text="${this.config.itemSelectText}" data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'} data-id="${data.id}" data-value="${data.value}" ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
              ${getLangInSelectIcon(data.value)} ${data.label}
            </div>
          `);
        },
      };
    }
  });
  
  function getLangInSelectIcon(value) {
    if (value == 'ru') return '<span class="field-select__lang-ru"></span>';
    else if (value == 'en') return '<span class="field-select__lang-en"></span>';
    return '<span class="field-select__lang-null"></span>';
  }

  // Выбор диапазона цен
  var slider = document.getElementById('price-range');
  noUiSlider.create(slider, {
    start: [400, 1000],
    connect: true,
    step: 100,
    range: {
      'min': 200,
      'max': 2000
    }
  });

});

function ready (fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
