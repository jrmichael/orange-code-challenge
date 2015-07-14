angular.module('musicApp.artists')
  .controller('ArtistsController', function (artistsService, $window) {
    var vm = this;

    vm.list = loadArtists();

    vm.search = function () {
      artistsService.search(vm.query)
        .then(function (results) {
          vm.list = results;
          $window.localStorage.setItem('artists', JSON.stringify(results));
        });
    };


    function loadArtists() {
      var cached = $window.localStorage.getItem('artists');
      return cached ? JSON.parse(cached) : undefined;
    }
  });
