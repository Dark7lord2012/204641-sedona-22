'use strict';

// Открытие шапки в мобильной версии

const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');
const headerToggle = document.querySelector('.header__toggle');

header.classList.remove('header--no-js');

headerToggle.addEventListener('click', () => {
  headerNav.classList.toggle('header__nav--closed');
  headerToggle.classList.toggle('header__toggle--closed');
});

// Интерактивная карта Яндекс

ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
          center: [59.938635, 30.323118],
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Sedona?',
          balloonContent: 'Sedona!!!'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map-marker.svg',
          iconImageSize: [27, 27],
          iconImageOffset: [-14, -14]
      });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom'); // Убрать прокрутку карты колесиком мыши
  myMap.controls.remove('searchControl'); // Удалил поисковую строку
});
