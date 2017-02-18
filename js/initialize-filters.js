'use strict';

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