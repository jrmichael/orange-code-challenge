(function() {
  'use strict';

  angular
    .module('musicApp', [
      'ngAnimate', 'ngSanitize', 'ngMessages',
      'ui.router', 'ui.bootstrap',
      'musicApp.artists'
    ]);

})();
