'use strict';

(function () {
  let INVALID_LINK_MESSAGE = 'Пожалуйста, введите корректную ссылку';
  let inputLink = document.querySelector('#link');
  let form = document.querySelector('.add-picture__application');
  if (inputLink) {
    var checkinputLink = () => {
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
  let formUpload = window.showProcess((evt, src) => {
    window.gallery.addStart(src)
    form.reset();

  })

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    formUpload(evt, [inputLink.value])
    window.util.changeIconVisibily();
  });
})();
