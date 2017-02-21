'use strict';

var uploadForm = document.querySelector('#upload-select-image');
var fotoForm = document.querySelector('.upload-overlay');
var fotoFormClose = fotoForm.querySelector('#upload-cancel');
var uploadFilterControls = document.querySelector('.upload-filter-controls');
var filterImagePreview = document.querySelector('.filter-image-preview');
var SCALE_STEP = 25;
var SCALE_DEFAULT_VALUE = 100;

function setupEscEvent(evt) {
  if (window.utils.isDeactivationEvent(evt)) {
    toggleSetup();
  }
}

function toggleSetup (evt) {
  if (fotoForm.classList.contains('invisible')) {
    fotoForm.classList.remove('invisible');
    document.addEventListener('keydown', setupEscEvent);
  } else {
    fotoForm.classList.add('invisible');
    document.removeEventListener('keydown', setupEscEvent);
  }
};

uploadForm.addEventListener('change', toggleSetup);
fotoFormClose.addEventListener('click', toggleSetup);

window.initializeFilters(filterImagePreview, uploadFilterControls, 'click');
window.initializeFilters(filterImagePreview, uploadFilterControls, 'keydown');
window.initializeScale(document.querySelector('.upload-resize-controls'), SCALE_DEFAULT_VALUE, SCALE_STEP);
