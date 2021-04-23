
'use strict';

(function () {

  var dropZone = document.querySelector('.gallery__more');
  const dragNdropClass = 'gallery__more--dragndrop';

  let onDragOver = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    dropZone.classList.add(dragNdropClass)
  }

  let onDrop = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    dropZone.classList.remove(dragNdropClass);
    let files = evt.dataTransfer.files;
    onReaderLoad(evt, files);
    window.util.changeIconVisibily();
  }

  let onReaderLoad = window.showProcess((evt , files) => {
    for (let i=0, file; file=files[i]; i++) {
      if (file.type.match(/image.*/)) {
        let reader = new FileReader();
        reader.addEventListener('load', (evt) => {
          window.gallery.addEnd([evt.target.result])
        })
        reader.readAsDataURL(file);
      }
    }
  })
  let DNDturnOn = () => {
    dropZone.classList.toggle(window.util.visuallyHiddenClass);
    dropZone.addEventListener('dragover', onDragOver);
    dropZone.addEventListener('drop', onDrop);
  }

   let DNDturnOff = () => {
     dropZone.removeEventListener('dragover', onDragOver);
     dropZone.removeEventListener('drop', onDrop);
     dropZone.classList.toggle(window.util.visuallyHiddenClass);
   }
   window.dragndrop = {
    on: DNDturnOn,
    off: DNDturnOff,
   }
})();
