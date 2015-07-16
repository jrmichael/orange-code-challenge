describe('ArtistImageDirective', function () {
    var scope, compile;

    beforeEach(module('musicApp.artists'));

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        compile = $compile;
    }));

    it('shows img with src', function () {
        scope.candidate = {
            images: [{url: 'artistUrl'}]
        };

        var element = compile('<artist-image artist="candidate"></artist-image>')(scope);
        scope.$apply();

        var img = element.find('img');

        expect(img.attr('src')).toEqual('artistUrl')
    });

});
