'use strict';

(function () {
  let imgTemplate = document.querySelector('#image')
    .content
    .querySelector('.gallery__image');

  let renderImage = (src) => {
    let item = imgTemplate.cloneNode(true);
    let image = item.querySelector('img');
    image.src = src.trim();
    let button = item.querySelector('button');
    button.addEventListener('click', function () {
      item.remove();
    })
    return item;
  };
  window.image = {
    render: renderImage,
  };
})();
