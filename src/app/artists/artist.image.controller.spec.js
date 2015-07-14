describe('ArtistImageController', function () {
  var artistImage, scope;

  beforeEach(module('musicApp.artists'));

  beforeEach(inject(function (_$rootScope_, $controller) {
    scope = _$rootScope_.$new();
    artistImage = $controller('ArtistImageController', {$scope : scope});
  }));

  it('shows artist image', function () {
    scope.artist = {
      images : [
        {url : 'testUrl'}
      ]
    };

    expect(artistImage.source()).toEqual('testUrl');
  });

  it('shows last image', function () {
    scope.artist = {
      images : [
        {url : 'testUrl'},
        {url : 'lastUrl'}
      ]
    };

    expect(artistImage.source()).toEqual('lastUrl');

  });

  it('does not fail when empty images', function () {
    scope.artist = {
      images : []
    };

    expect(artistImage.source()).toBeUndefined();
  });

  it('does not fail when no images', function () {
    scope.artist = {};

    expect(artistImage.source()).toBeUndefined();
  });
});
