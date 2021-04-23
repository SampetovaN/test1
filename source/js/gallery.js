'use strict';

(function () {
  let galleryList = document.querySelector('.gallery__list');
  let dragndropOn = window.dragndrop.on;
  let renderImage = function (src) {
    let item = window.image.render(src);
    item.src = src;
    let button = item.querySelector('button');
    button.addEventListener('click', function () {
      item.remove();
      checkImageAmount();
    })
    return item;
  };
  let checkImageAmount = () => {
    let galleryCur = document.querySelector('.gallery__list');
    if([galleryCur].length >= 1 && dragndropOn) {
      dragndropOn()
      dragndropOn = null;
    } else if (![galleryCur].length) {
      window.dragndrop.off();
      dragndropOn = window.dragndrop.on();
    }
  }

  let addImageStart =  (sources) => {
    galleryList.prepend.apply(galleryList, sources.map(renderImage));
    checkImageAmount();
  };
  let addImageEnd = (sources) => {
    galleryList.append.apply(galleryList, sources.map(renderImage));
    checkImageAmount();
  };
  window.gallery = {
    addStart: addImageStart,
    addEnd: addImageEnd,
  }
})();
