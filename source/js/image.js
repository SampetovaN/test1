'use strict';

(function () {
  let imgTemplate = document.querySelector('#image')
    .content
    .querySelector('.gallery__image');

  let renderImage = (src) => {
    let item = imgTemplate.cloneNode(true);
    let image = item.querySelector('img');
    image.src = src.trim();

    return item;
  };
  window.image = {
    render: renderImage,
  };
})();
