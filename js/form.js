'use strict';

var uploadForm = document.querySelector('#upload-select-image');
var fotoForm = document.querySelector('.upload-overlay');
var fotoFormClose = fotoForm.querySelector('#upload-cancel');
var uploadFilterControls = document.querySelector('.upload-filter-controls');
var filterImagePreview = document.querySelector('.filter-image-preview');

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

var toggleSetup = function () {
  if (fotoForm.classList.contains('invisible')) {
    fotoForm.classList.remove('invisible');
    document.addEventListener('keydown', setupEscEvent);
  } else {
    fotoForm.classList.add('invisible');
    document.removeEventListener('keydown', setupEscEvent);
  }
};

window.enterPressed = enterPressed;
window.filterImagePreview = filterImagePreview;

uploadForm.addEventListener('change', toggleSetup);
fotoFormClose.addEventListener('click', toggleSetup);

window.initializeFilters(uploadFilterControls);

window.initializeScale(document.querySelector('.upload-resize-controls'), 100, 25);
