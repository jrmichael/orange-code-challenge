angular.module('musicApp.artists')
  .controller('ArtistsController', function (artistsService, $window) {
    var vm = this;

    vm.searchParams = {};

    vm.types = ['artist', 'album', 'track'];

    vm.list = loadArtists();

    vm.search = function (form) {
      if (form.$invalid) {
        return;
      }
      artistsService.search(vm.searchParams)
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
