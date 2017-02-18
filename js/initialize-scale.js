'use strict';

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