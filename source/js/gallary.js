'use strict';

(function () {
  var galleryList = document.querySelector('.gallery__list');

  var renderImage = function (src) {
    var image = window.image.render(src);
    image.src = src;
    image.addEventListener('click', function () {
    });
    return image;
  };
  var addImage = function (sources) {
    galleryList.prepend.apply(galleryList, sources.map(renderImage));
  };
  window.gallary = {
    add: addImage
  }
})();
