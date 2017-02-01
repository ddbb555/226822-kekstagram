'use strict';

var uploadForm = document.querySelector('#upload-select-image'); //выбор фото
var fotoForm = document.querySelector('.upload-overlay'); // сами фото
var uploadFile = document.querySelector('#upload-file'); // загрузка
var fotoFormClose = fotoForm.querySelector('#upload-cancel'); // крестик закрытия

var toggleFormClass = function () {
    uploadForm.classList.toggle('invisible');
    fotoForm.classList.toggle('invisible');
  }

var openOrClose = function (event, eventName) {
  event.addEventListener(eventName,toggleFormClass);
};

openOrClose(uploadFile, 'change');
openOrClose(fotoFormClose, 'click');


//Фильтры
var uploadSection = document.querySelector('.upload');
var filterNone = uploadSection.querySelector('#upload-filter-none');
var filterChrome = uploadSection.querySelector('#upload-filter-chrome');
var filterSepia = uploadSection.querySelector('#upload-filter-sepia');
var filterMarvin = uploadSection.querySelector('#upload-filter-marvin');
var filterPhobos = uploadSection.querySelector('#upload-filter-phobos');
var filterHeat = uploadSection.querySelector('#upload-filter-heat');
var imgPreview = uploadSection.querySelector('.filter-image-preview');

filterNone.addEventListener('click', function () {
  imgPreview.classList.remove('filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
  imgPreview.classList.add('filter-none');
});
filterChrome.addEventListener('click', function () {
  imgPreview.classList.remove('filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
  imgPreview.classList.add('filter-chrome');
});
filterSepia.addEventListener('click', function () {
  imgPreview.classList.remove('filter-chrome', 'filter-marvin', 'filter-phobos', 'filter-heat');
  imgPreview.classList.add('filter-sepia');
});
filterMarvin.addEventListener('click', function () {
  imgPreview.classList.remove('filter-chrome', 'filter-sepia', 'filter-phobos', 'filter-heat');
  imgPreview.classList.add('filter-marvin');
});
filterPhobos.addEventListener('click', function () {
  imgPreview.classList.remove('filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-heat');
  imgPreview.classList.add('filter-phobos');
});
filterHeat.addEventListener('click', function () {
  imgPreview.classList.remove('filter-chrome', 'filter-sepia', 'filter-phobos', 'filter-marvin');
  imgPreview.classList.add('filter-heat');
});