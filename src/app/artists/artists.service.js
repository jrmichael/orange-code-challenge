angular.module('musicApp.artists')
    .service('artistsService', function ($http) {
        this.search = function (params) {
            return $http.get('https://api.spotify.com/v1/search', {params: params})
                .then(function (resp) {
                    return resp.data[params.type + 's'].items;
                });
        };

        this.get = function (id) {
            return $http.get('https://api.spotify.com/v1/artists/' + id)
                .then(function (response) {
                    return response.data;
                })
        };
    });
