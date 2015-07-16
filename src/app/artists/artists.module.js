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
                controller: function ($stateParams, artistsService) {
                    var vm = this;

                    artistsService.get($stateParams.artistId)
                        .then(function (artist) {
                            vm.details = artist;
                        });

                },
                controllerAs: 'artist'
            });
    })
;
