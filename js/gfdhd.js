/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

function createCarousel(slidesCount = 5) {

  function createContainer() {
    container = document.querySelector('#carousel');

    elem = document.createElement('div');
  
    elem.setAttribute('id', 'carousel');
    elem.setAttribute('class', 'carousel');
    document.querySelector('body').appendChild(elem);
  
  }


  
}

createCarousel(4);