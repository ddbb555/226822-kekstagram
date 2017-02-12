'use strict';

var uploadForm = document.querySelector('#upload-select-image'); //выбор фото
var fotoForm = document.querySelector('.upload-overlay'); // сами фото
var fotoFormClose = fotoForm.querySelector('#upload-cancel'); // крестик закрытия

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;


function enterPressed(evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
}

function setupEscEvent(evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
        toggleSetup();
    }
}

function toggleSetup() {
    if (fotoForm.classList.contains('invisible')) {
        fotoForm.classList.remove('invisible');
        document.addEventListener('keydown', setupEscEvent);

    } else {
        fotoForm.classList.add('invisible');
        document.removeEventListener('keydown', setupEscEvent);

    }
}


uploadForm.addEventListener('change', toggleSetup);

fotoFormClose.addEventListener('click', toggleSetup);


//Фильтры
var uploadSection = document.querySelector('.upload');
var filterNone = uploadSection.querySelector('#upload-filter-none');
var filterChrome = uploadSection.querySelector('#upload-filter-chrome');
var filterSepia = uploadSection.querySelector('#upload-filter-sepia');
var filterMarvin = uploadSection.querySelector('#upload-filter-marvin');
var filterPhobos = uploadSection.querySelector('#upload-filter-phobos');
var filterHeat = uploadSection.querySelector('#upload-filter-heat');
var imgPreview = uploadSection.querySelector('.filter-image-preview');



filterNone.addEventListener('click', function() {
    imgPreview.classList.remove('filter-none', 'filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
    imgPreview.classList.add('filter-none');
});
filterChrome.addEventListener('click', function() {
    imgPreview.classList.remove('filter-none', 'filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
    imgPreview.classList.add('filter-chrome');
});
filterSepia.addEventListener('click', function() {
    imgPreview.classList.remove('filter-none', 'filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
    imgPreview.classList.add('filter-sepia');
});
filterMarvin.addEventListener('click', function() {
    imgPreview.classList.remove('filter-none', 'filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
    imgPreview.classList.add('filter-marvin');
});
filterPhobos.addEventListener('click', function() {
    imgPreview.classList.remove('filter-none', 'filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
    imgPreview.classList.add('filter-phobos');
});
filterHeat.addEventListener('click', function() {
    imgPreview.classList.remove('filter-none', 'filter-chrome', 'filter-sepia', 'filter-marvin', 'filter-phobos', 'filter-heat');
    imgPreview.classList.add('filter-heat');
});

var resizeValue = fotoForm.querySelector('.upload-resize-controls-value');
var resizeValueDec = fotoForm.querySelector('.upload-resize-controls-button-dec');
var resizeValueInc = fotoForm.querySelector('.upload-resize-controls-button-inc');

var resizeNumber = 100;
resizeValue.setAttribute('value', '100%');


var valueScaleChange = function() {
    var scaleNumber = resizeNumber / 100;
    resizeValue.value = resizeNumber + '%';
    imgPreview.style.transform = 'scale(' + scaleNumber + ')';
};

resizeValueDec.addEventListener('click', function() {
    if (resizeNumber > 25) {
        resizeNumber = resizeNumber - 25;
        valueScaleChange();
    }
});

resizeValueInc.addEventListener('click', function() {
    if (resizeNumber < 100) {
        resizeNumber = resizeNumber + 25;
        valueScaleChange();
    }
});