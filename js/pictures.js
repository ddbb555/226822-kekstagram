'use strict';

window.load('https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data',
    function (e) {

      var pictures = JSON.parse(e.target.response);
      var templateElement = document.querySelector('#picture-template');
      var pictureFrame = templateElement.content.querySelector('.picture');
      var pictureContainer = document.querySelector('.pictures');
      var pictureFilters = document.querySelector('.filters');
      var pictureArrCommented = pictures.slice(0);

      var cleanGallery = function (param) {
        while (param.firstChild) {
          param.removeChild(param.firstChild);
        }
      };

      var renderPictures = function (elements) {
        elements.forEach(function (pictureItem) {
          var picture = pictureFrame.cloneNode(true);
          var image = picture.querySelector('img');
          var comments = picture.querySelector('.picture-comments');
          var likes = picture.querySelector('.picture-likes');
          image.setAttribute('src', pictureItem.url);
          comments.textContent = pictureItem.comments.length;
          likes.textContent = pictureItem.likes;
          picture.setAttribute('tabindex', '0');
          pictureContainer.appendChild(picture);
          picture.addEventListener('click', function (event) {
            event.preventDefault();
            window.showGallery(pictureItem);
          });
        });
      };

      function filterToggle(condition, pictures) {
        switch (condition) {
          case ('filter-popular'):
            cleanGallery(pictureContainer);
            return pictures.slice(0).sort()
            break;
          case ('filter-new'):
            cleanGallery(pictureContainer);
            return pictures.slice(0).sort(function () {
              return Math.random() - 0.5;
            }).slice(0, 10);
            break;
          case ('filter-discussed'):
            cleanGallery(pictureContainer);
            return pictures.slice(0).sort(function (left, right) {
              return right.comments.length - left.comments.length;
            });
            break;
        }
      }

      pictureFilters.classList.remove('hidden');

      renderPictures(pictures);

      pictureFilters.addEventListener('click', function (event) {
        var condition = event.target.htmlFor;
        renderPictures(filterToggle(condition, pictures));
      });

      pictureFilters.addEventListener('keydown', function (event) {
        if (window.utils.isActivationEvent(event)) {
          event.target.control.checked = true;
          filterToggle(event.target.htmlFor);
        }
      });
    });


