'use strict';

(function () {
  var HIDDEN = 'visually-hidden';
  var catalog = document.querySelector('.site-list__item--catalog a');
  var catalogList = document.querySelector('.catalog-list');
  catalogList.classList.add(HIDDEN);
  var onCatalogListItemClick = function (evt) {
    evt.preventDefault();
    var target = evt.target;
    var targetParent = target.parentNode;
    var findProducts = function () {
      for (var i = 0; i < window.data.length; i++) {
        if (target.className.indexOf(window.data[i].type) !== -1) {
          return window.data[i];
        }
      }
    };
    var currentSubmenu = targetParent.querySelector('.catalog-list__submenu');
    if (currentSubmenu) {
      window.submenu.remove(currentSubmenu);
    } else {
      window.submenu.render(targetParent, findProducts())
    }
  };
  var toggleEventListener = function (element, onClickFunction) {
    element.classList.contains(HIDDEN) ? element.removeEventListener('click', onClickFunction) : element.addEventListener('click', onClickFunction);
  }
  var onCatalogClick = function (evt) {
    evt.preventDefault();
    catalogList.classList.toggle(HIDDEN);
    toggleEventListener(catalog, onCatalogClick);
    toggleEventListener(catalogList, onCatalogListItemClick);
  };
  catalog.addEventListener('click', onCatalogClick);
})();
