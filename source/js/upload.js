'use strict';

(function () {
  let fileChooser = document.querySelector('.add-picture__upload input[type=file]');
  let uploadIcon = document.querySelector(`.gallery__upload`);
  const visuallyHiddenClass = `visually-hidden`;
  const keyJsonUrls = 'galleryImages';
  let timeout = null
  let showUpload = function (fileChooser) {
    console.log('bfb')
    let fileReader = new FileReader();
    uploadIcon.classList.toggle(visuallyHiddenClass);
    fileReader.onload = (evt) => {
      timeout = setTimeout(onReaderLoad, 1000, evt);
    }
    fileReader.readAsText(fileChooser.files.item(0));
    fileChooser.value = '';
  };

  function onReaderLoad(evt){
    if(timeout > 0) {
      clearTimeout(timeout)
    }
    let sources = JSON.parse(evt.target.result)[keyJsonUrls].map(item => item.url);
    uploadIcon.classList.toggle(visuallyHiddenClass);
    window.gallary.add(sources);
  }

  fileChooser.addEventListener('change', function (evt) { showUpload(fileChooser,evt)});
})();
