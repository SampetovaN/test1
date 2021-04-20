'use strict';

(function () {
  var INVALID_LINK_MESSAGE = 'Пожалуйста, введите корректную ссылку';
  var inputLink = document.querySelector('#link');
  var form = document.querySelector('.add-picture__application');
  if (inputLink) {
    var checkinputLink = function () {
      if (inputLink.validity.patternMismatch) {
        inputLink.setCustomValidity(INVALID_LINK_MESSAGE);
      } else {
        inputLink.setCustomValidity('');
      }
    };
    inputLink.addEventListener('input', function () {
      checkinputLink();
    });
  }
  form.addEventListener('submit', function (evt) {
    window.gallary.add([inputLink.value])
    form.reset();
    evt.preventDefault();
  });
})();
