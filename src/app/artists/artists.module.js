angular.module('musicApp.artists', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider.state('artists', {
      url : '/artists',
      templateUrl : '/app/artists/artists.html',
      controller : 'ArtistsController',
      controllerAs : 'artists'
    });
  })
;
