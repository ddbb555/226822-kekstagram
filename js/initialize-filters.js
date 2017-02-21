'use strict';

window.initializeFilters = (function () {
    var dictionary = {
        'upload-filter-chrome': 'filter-chrome',
        'upload-filter-none': 'filter-none',
        'upload-filter-sepia': 'filter-sepia',
        'upload-filter-marvin': 'filter-marvin',
        'upload-filter-phobos': 'filter-phobos',
        'upload-filter-heat': 'filter-heat'
    };
    var removeAllFilters = function() {
        window.filterImagePreview.classList.remove('filter-none');
        window.filterImagePreview.classList.remove('filter-chrome');
        window.filterImagePreview.classList.remove('filter-sepia');
        window.filterImagePreview.classList.remove('filter-marvin');
        window.filterImagePreview.classList.remove('filter-phobos');
        window.filterImagePreview.classList.remove('filter-heat');
    };
    return function (previewScreen, setOfFilters, eventType) {
    setOfFilters.addEventListener(eventType, function (evt) {
        if (evt.type === 'click') {
            removeAllFilters();
            previewScreen.classList.add(dictionary[evt.target.id]);
        } else if (window.utils.isActivationEvent(evt)) {
            removeAllFilters();
            previewScreen.classList.add(dictionary[document.activeElement.htmlFor]);
        }
    })
};
})();
