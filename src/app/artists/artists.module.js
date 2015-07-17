angular.module('musicApp.artists', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('artists', {
                url: '/artists',
                templateUrl: '/app/artists/artists.html',
                controller: 'ArtistsController',
                controllerAs: 'artists'
            })
            .state('artist', {
                url: '/artists/:artistId',
                templateUrl: '/app/artists/artist.html',
                controller: function (details) {
                    this.details = details
                },
                controllerAs: 'artist',
                resolve: {
                    details: function($stateParams, artistsService) {
                        return artistsService.get($stateParams.artistId)
                    }
                }
            });
    })
;
