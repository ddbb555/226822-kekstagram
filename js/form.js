'use strict';

var uploadForm = document.querySelector('#upload-select-image'); //выбор фото
var fotoForm = document.querySelector('.upload-overlay'); // сами фото
var uploadFile = document.querySelector('#upload-file'); // загрузка
var fotoFormClose = fotoForm.querySelector('#upload-cancel'); // крестик закрытия

var toggle = function () {
    uploadForm.classList.toggle('invisible');
    fotoForm.classList.toggle('invisible');
  }

function openOrClose() {
  uploadFile.addEventListener('change', toggle);
  fotoFormClose.addEventListener('click',toggle);
};

openOrClose();

//Фильтры
var uploadSection = document.querySelector('.upload');
var filterNone = uploadSection.querySelector('#upload-filter-none');
var filterChrome = uploadSection.querySelector('#upload-filter-chrome');
var filterSepia = uploadSection.querySelector('#upload-filter-sepia');
var filterMarvin = uploadSection.querySelector('#upload-filter-marvin');
var filterPhobos = uploadSection.querySelector('#upload-filter-phobos');
var filterHeat = uploadSection.querySelector('#upload-filter-heat');
var imgPreview = uploadSection.querySelector('.filter-image-preview');

var allFilters = ['filter-none', 'filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat' ]

filterNone.addEventListener('click', function () {
  imgPreview.classList.remove(allFilters);
  imgPreview.classList.add('filter-none');
});
filterChrome.addEventListener('click', function () {
  imgPreview.classList.remove(allFilters);
  imgPreview.classList.add('filter-chrome');
});
filterSepia.addEventListener('click', function () {
  imgPreview.classList.remove(allFilters);
  imgPreview.classList.add('filter-sepia');
});
filterMarvin.addEventListener('click', function () {
  imgPreview.classList.remove(allFilters);
  imgPreview.classList.add('filter-marvin');
});
filterPhobos.addEventListener('click', function () {
  imgPreview.classList.remove(allFilters);
  imgPreview.classList.add('filter-phobos');
});
filterHeat.addEventListener('click', function () {
  imgPreview.classList.remove(allFilters);
  imgPreview.classList.add('filter-heat');
});

var resizeValue = fotoForm.querySelector('.upload-resize-controls-value');
var resizeValueDec = fotoForm.querySelector('.upload-resize-controls-button-dec');
var resizeValueInc = fotoForm.querySelector('.upload-resize-controls-button-inc');

var resizeNumber = 100;
resizeValue.value = resizeNumber + '%';

var valueScaleChange = function () {
  var scaleNumber = resizeNumber / 100;
  resizeValue.value = resizeNumber + '%';
  imgPreview.style.transform = 'scale(' + scaleNumber + ')';
};

resizeValueDec.addEventListener('click', function () {
  if (resizeNumber > 25) {
    resizeNumber = resizeNumber - 25;
    valueScaleChange();
  }
});

resizeValueInc.addEventListener('click', function () {
  if (resizeNumber < 100) {
    resizeNumber = resizeNumber + 25;
    valueScaleChange();
  }
});