'use strict';

(function () {
  const ESCAPE_BUTTON = 'Escape';
  let randomInteger = (min, max) => (Math.floor(min + Math.random() * (max + 1 - min)));
  let isEscEvent = (evt, action) => {
    if (evt.key === ESCAPE_BUTTON) {
      evt.preventDefault();
      action(evt);
    }
  };

  window.util = {
    isEscEvent: isEscEvent,
    randomInteger: randomInteger
  };
})();
