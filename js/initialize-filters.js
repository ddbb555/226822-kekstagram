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

  return function (previewScreen, setOfFilters, eventType) {
    setOfFilters.addEventListener(eventType, function (evt) {
      for (var prop in dictionary) {
        if (evt.type === 'click') {
          previewScreen.classList.remove(dictionary[prop]);
          previewScreen.classList.add(dictionary[evt.target.id]);
        } else if (window.utils.isActivationEvent(evt)) {
          previewScreen.classList.remove(dictionary[prop]);
          previewScreen.classList.add(dictionary[document.activeElement.htmlFor]);
        }
      }
    });
  };
})();
