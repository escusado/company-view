'use strict';

var onDomReady = function onDomReady() {
  //create
  window.app = new App();
  window.app.setup();

  //render
  document.body.appendChild(app.element);
};

//on dom ready
if (document.readyState != 'loading'){
  onDomReady();
} else {
  document.addEventListener('DOMContentLoaded', onDomReady);
}
