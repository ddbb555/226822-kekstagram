'use strict';

window.initializeScale = (function () {
  return function (element, resizeControlsValueDefault, step, callback) {
    var resizeValue = element.querySelector('.upload-resize-controls-value');
    var resizeValueDec = element.querySelector('.upload-resize-controls-button-dec');
    var resizeValueInc = element.querySelector('.upload-resize-controls-button-inc');
    resizeValue.setAttribute('value', resizeControlsValueDefault + '%');
    var resizeNumber = resizeControlsValueDefault;
    
    function valueScaleChange(event) {
      if (event.target.contains(resizeValueDec)) {
        if (resizeNumber > step) {
          resizeNumber = resizeNumber - step;
          resizeValue.value = resizeNumber + '%';
        }
        callback(resizeNumber, resizeControlsValueDefault);
      }
      if (event.target.contains(resizeValueInc)) {
        if (resizeNumber < resizeControlsValueDefault) {
          resizeNumber = resizeNumber + step;
          resizeValue.value = resizeNumber + '%';
        }
        callback(resizeNumber, resizeControlsValueDefault);
      }
    }
    element.addEventListener('click', valueScaleChange);
  };
})();
