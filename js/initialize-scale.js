'use strict';

window.initializeScale = (function () {
  return function (element, resizeControlsValueDefault, step) {
  var resizeValue = element.querySelector('.upload-resize-controls-value');
  var resizeValueDec = element.querySelector('.upload-resize-controls-button-dec');
  var resizeValueInc = element.querySelector('.upload-resize-controls-button-inc');
  resizeValue.setAttribute('value', resizeControlsValueDefault + '%');
  var resizeNumber = resizeControlsValueDefault;
  var scaleNumber;

  function valueScaleChange(event) {
    if (event.target.contains(resizeValueDec)) {
      if (resizeNumber > step) {
        resizeNumber = resizeNumber - step;
        scaleNumber = resizeNumber / resizeControlsValueDefault;
        resizeValue.value = resizeNumber + '%';
        window.filterImagePreview.style.transform = 'scale(' + scaleNumber + ')';
      }
    }
    if (event.target.contains(resizeValueInc)) {
      if (resizeNumber < resizeControlsValueDefault) {
        resizeNumber = resizeNumber + step;
        scaleNumber = resizeNumber / resizeControlsValueDefault;
        resizeValue.value = resizeNumber + '%';
        window.filterImagePreview.style.transform = 'scale(' + scaleNumber + ')';
      }
    }
  }
  element.addEventListener('click', valueScaleChange);
};
})();
