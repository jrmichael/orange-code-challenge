describe('ArtistsController', function () {
  beforeEach(module('musicApp.artists'));

  var artists, http, localStorage, controller;

  beforeEach(inject(function ($controller, $httpBackend) {

    localStorage = jasmine.createSpyObj('localStorage', ['getItem', 'setItem']);
    artists = $controller('ArtistsController',
      {$window : {localStorage : localStorage}});
    http = $httpBackend;
    controller = $controller;
  }));

  it('uses http', function () {
    http.expectGET('https://api.spotify.com/v1/search?q=abba&type=artist')
      .respond(200, {artists : {items : ['Abba', 'bubba']}});

    artists.query = 'abba';

    artists.search();
    http.flush();
  });

  it('assigns artists list', function () {
    artists.query = 'iron';
    http.expectGET('https://api.spotify.com/v1/search?q=iron&type=artist')
      .respond(200, {artists : {items : ['Iron Man', 'Iron Maiden']}});

    artists.search();
    http.flush();

    expect(artists.list).toEqual(['Iron Man', 'Iron Maiden']);
  });

  it('saves results to local storage', function () {
    artists.query = 'iron';
    http.expectGET('https://api.spotify.com/v1/search?q=iron&type=artist')
      .respond(200, {artists : {items : ['Iron Man', 'Iron Maiden']}});

    artists.search();
    http.flush();

    expect(localStorage.setItem)
      .toHaveBeenCalledWith('artists', JSON.stringify(['Iron Man', 'Iron Maiden']));
  });

  it('loads artists from local storage', function () {
    localStorage = {
      getItem : function () {
      }
    };
    spyOn(localStorage, 'getItem').and.returnValue('["Nirvana"]');

    artists = controller('ArtistsController',
      {$window : {localStorage : localStorage}});

    expect(artists.list).toEqual(['Nirvana']);
  });
});
