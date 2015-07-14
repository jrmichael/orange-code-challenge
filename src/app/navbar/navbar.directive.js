(function () {
  'use strict';

  angular
    .module('musicApp')
    .directive('acmeNavbar', function acmeNavbar() {
      return {
        restrict : 'E',
        templateUrl : 'app/navbar/navbar.html',
        scope : {
          creationDate : '='
        },
        controller : 'NavbarController',
        controllerAs : 'vm',
        bindToController : true
      };

    }
  )
    .controller('NavbarController', function NavbarController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  );


})();
