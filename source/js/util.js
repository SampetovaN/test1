'use strict';

(function () {
  const uploadIcon = document.querySelector(`.gallery__upload`);
  const visuallyHiddenClass = `visually-hidden`;
  let changeIconVisibily = () => {
    uploadIcon.classList.toggle(visuallyHiddenClass);
  }

  window.util = {
    changeIconVisibily,
    visuallyHiddenClass
  };
})();
