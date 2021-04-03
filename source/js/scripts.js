'use strict';

const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');
const headerToggle = document.querySelector('.header__toggle');

header.classList.remove('header--no-js');

headerToggle.addEventListener('click', () => {
  headerNav.classList.toggle('header__nav--closed');
});
