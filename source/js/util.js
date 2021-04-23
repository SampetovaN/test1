'use strict';

(function () {
  const uploadIcon = document.querySelector(`.gallery__upload`);
  const visuallyHiddenClass = `visually-hidden`;
  const deleteButton = 46;
  let changeIconVisibily = () => {
    uploadIcon.classList.toggle(visuallyHiddenClass);
  }

  let isDeleteEvent =  (evt) => (evt.keyCode === deleteButton);
  window.util = {
    changeIconVisibily,
    visuallyHiddenClass,
    isDeleteEvent
  };
})();
