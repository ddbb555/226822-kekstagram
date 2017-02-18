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

var toggleSetup = function() {
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




//------------------------------фильтры---------------------------------------
/*
var uploadOverlay = document.querySelector('.upload-overlay');
var filterImagePreview = uploadOverlay.querySelector('.filter-image-preview');
var uploadFilterControls = uploadOverlay.querySelector('.upload-filter-controls');

var dictionary = {
    'upload-filter-chrome': 'filter-chrome',
    'upload-filter-none': 'filter-none',
    'upload-filter-sepia': 'filter-sepia',
    'upload-filter-marvin': 'filter-marvin',
    'upload-filter-phobos': 'filter-phobos',
    'upload-filter-heat': 'filter-heat'
};

var removeAllFilters = function() {
    filterImagePreview.classList.remove('filter-none');
    filterImagePreview.classList.remove('filter-chrome');
    filterImagePreview.classList.remove('filter-sepia');
    filterImagePreview.classList.remove('filter-marvin');
    filterImagePreview.classList.remove('filter-phobos');
    filterImagePreview.classList.remove('filter-heat');
};

function addFilter(evt) {
    if (evt.type === 'click') {
        removeAllFilters();
        filterImagePreview.classList.add(dictionary[evt.target.id]);
    } else if (enterPressed(evt)) {
        removeAllFilters();
        filterImagePreview.classList.add(dictionary[document.activeElement.htmlFor]);
    }
};

window.initializeFilters = function(element) {
    element.addEventListener('click', addFilter);
    element.addEventListener('keydown', addFilter);
};
*/
window.initializeFilters(uploadFilterControls);

//------------------------------Масштаб---------------------------------------
/*
var uploadSection = document.querySelector('.upload');
var imgPreview = uploadSection.querySelector('.filter-image-preview');
var resizeValue = uploadSection.querySelector('.upload-resize-controls-value');
var resizeValueDec = uploadSection.querySelector('.upload-resize-controls-button-dec');
var resizeValueInc = uploadSection.querySelector('.upload-resize-controls-button-inc');

window.initializeScale = function(element, resizeControlsValueDefault, step) {
    resizeValue.setAttribute('value', resizeControlsValueDefault + '%');
    var resizeNumber = resizeControlsValueDefault;
    function valueScaleChange(event) {
        if (event.target.contains(resizeValueDec)) {
            if (resizeNumber > step) {
                resizeNumber = resizeNumber - step;
                var scaleNumber = resizeNumber / resizeControlsValueDefault;
                resizeValue.value = resizeNumber + '%';
                imgPreview.style.transform = 'scale(' + scaleNumber + ')';;
            }
        }
        if (event.target.contains(resizeValueInc)) {
            if (resizeNumber < resizeControlsValueDefault) {
                resizeNumber = resizeNumber + step;
                var scaleNumber = resizeNumber / resizeControlsValueDefault;
                resizeValue.value = resizeNumber + '%';
                imgPreview.style.transform = 'scale(' + scaleNumber + ')';;
            }
        }
    }
    element.addEventListener('click', valueScaleChange);
};
*/
window.initializeScale(document.querySelector('.upload-resize-controls'), 100, 25);