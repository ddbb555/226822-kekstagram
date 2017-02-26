'use strict';

window.load('https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data',
    function (e) {

      var pictures = JSON.parse(e.target.response);
      var templateElement = document.querySelector('#picture-template');
      var pictureFrame = templateElement.content.querySelector('.picture');
      var pictureContainer = document.querySelector('.pictures');
      var pictureFilters = document.querySelector('.filters');
      var pictureArrCommented = pictures.slice(0);

      function sortMostCommented(arr) {
        function compareObj(left, right) {
          return right.comments.length - left.comments.length;
        }
        return arr.sort(compareObj);
      }

      function getRandomArrFromArr(arr, n) {
        var shuffleArr = arr.sort(function () {
        return Math.random() - 0.5 });
        var elemToSortAmount = n;
        var randomArr = shuffleArr.slice(0, elemToSortAmount);
        return randomArr;
      }

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

      function filterToggle(condition) {
        switch (condition) {
          case ('filter-popular'):
            cleanGallery(pictureContainer);
            renderPictures(pictures);
            break;
          case ('filter-new'):
            cleanGallery(pictureContainer);
            renderPictures(getRandomArrFromArr(pictures.slice(0), 10));
            break;
          case ('filter-discussed'):
            cleanGallery(pictureContainer);
            sortMostCommented(pictureArrCommented);
            renderPictures(pictureArrCommented);
            break;
        }
      }

      pictureFilters.classList.remove('hidden');

      renderPictures(pictures);

      pictureFilters.addEventListener('click', function (event) {
        filterToggle(event.target.htmlFor);
      });

      pictureFilters.addEventListener('keydown', function (event) {
        if (window.utils.isActivationEvent(event)) {
          event.target.control.checked = true;
          filterToggle(event.target.htmlFor);
        }
      });
    });
