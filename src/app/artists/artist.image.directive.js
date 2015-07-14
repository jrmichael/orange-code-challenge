angular.module('musicApp.artists')
  .directive('artistImage', function () {
    return {
      template : '<img ng-src="{{image.source()}}"/>',
      scope : {
        artist : '='
      },
      controller : 'ArtistImageController',
      controllerAs : 'image'
    }
  })
  .controller('ArtistImageController', function ($scope) {
    this.source = function () {
      var images = $scope.artist.images;
      return images.length ? images[images.length - 1].url : undefined;
    };
  });
