'use strict';

(function () {
  let fileForm = document.querySelector('.upload-picture');
  let fileChooser = document.querySelector('.upload-picture__field input[type=file]');
  const keyJsonUrls = 'galleryImages';
  let onReaderLoad = window.showProcess((evt) => {
    let sources = JSON.parse(evt.target.result)[keyJsonUrls].map(item => item.url);
    window.gallery.addStart(sources);
  })
  let showUpload = function () {
    let fileReader = new FileReader();
    window.util.changeIconVisibily();
    fileReader.addEventListener('load', onReaderLoad);
    fileReader.readAsText(fileChooser.files[0]);
    //fileChooser.value = '';
    fileForm.reset()
  };

  fileChooser.addEventListener('change', showUpload);

  window.upload = {
    show: showUpload
  }
})();
