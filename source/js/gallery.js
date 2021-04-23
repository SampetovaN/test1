'use strict';

(function () {
  let galleryList = document.querySelector('.gallery__list');
  let dragndropOn = window.dragndrop.on;
  let removeEl = (el) => {
    el.remove();
    el = null;
    switchDnD();
  }
  let renderImage = function (src) {
    let item = window.image.render(src);
    item.src = src;
    let button = item.querySelector('button');
    item.tabIndex = 0
    button.addEventListener('click', function () {
      removeEl(item);
    })
    return item;
  };
  document.addEventListener('keydown', function(evt) {
    evt.preventDefault();
    if(window.util.isDeleteEvent(evt) && checkGalleryChildren()) {
      let lastEl = document.querySelector('.gallery__list').lastChild;
      lastEl.focus()
      removeEl(lastEl)
    }
  });
  let switchDnD = () => {
    let isGalleryHasChildren = checkGalleryChildren();
    if(isGalleryHasChildren && dragndropOn) {
      dragndropOn()
      dragndropOn = null;
    } else if (!isGalleryHasChildren) {
      window.dragndrop.off();
      dragndropOn = window.dragndrop.on;
    }
  }
  let checkGalleryChildren = () => {
    return document.querySelector('.gallery__list').hasChildNodes();
  }

  let addImageStart =  (sources) => {
    galleryList.prepend.apply(galleryList, sources.map(renderImage));
    switchDnD();
  };
  let addImageEnd = (sources) => {
    galleryList.append.apply(galleryList, sources.map(renderImage));
    switchDnD();
  };
  window.gallery = {
    addStart: addImageStart,
    addEnd: addImageEnd,
  }
})();
