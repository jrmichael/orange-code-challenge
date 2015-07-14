angular.module('musicApp.artists')
  .service('artistsService', function ($http) {
    this.search = function (query) {
      return $http.get('https://api.spotify.com/v1/search', {params : {type : 'artist', q : query}})
        .then(function (resp) {
          return resp.data.artists.items;
        });

    };
  });
