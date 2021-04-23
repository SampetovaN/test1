'use strict';

(function () {
  let fileChooser = document.querySelector('.upload-picture__field input[type=file]');
  const keyJsonUrls = 'galleryImages';
  let prevVal = null
  let onReaderLoad = window.showProcess((evt) => {
    let sources = JSON.parse(evt.target.result)[keyJsonUrls].map(item => item.url);
    window.gallery.addStart(sources);
  })
  let showUpload = function () {
    if(prevVal) {
      prevVal = '';
    }
    let fileReader = new FileReader();
    window.util.changeIconVisibily();
    fileReader.addEventListener('load', onReaderLoad);
    fileReader.readAsText(fileChooser.files[0]);
    prevVal = fileChooser.value;
  };

  fileChooser.addEventListener('change', showUpload);

  window.upload = {
    show: showUpload
  }
})();
