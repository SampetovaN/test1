'use strict';
(function () {
  const uploadingTime = 1000;

  window.showProcess = function (onTimeout) {
    var lastTimeoutId = 0;
    return function () {
      var parameters = arguments;
      if (lastTimeoutId > 0) {
        window.clearTimeout(lastTimeoutId);
      }
      lastTimeoutId = window.setTimeout(function () {
        window.util.changeIconVisibily();
        onTimeout.apply(null, parameters);
      }, uploadingTime);
    };
  };
})();
