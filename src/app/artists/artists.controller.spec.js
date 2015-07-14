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

  function validForm() {
    return {
      $valid : true,
      $invalid : false
    }
  }

  function invalidForm() {
    return {
      $valid : false,
      $invalid : true
    }
  }

  it('uses http', function () {
    http.expectGET('https://api.spotify.com/v1/search?q=abba&type=artist')
      .respond(200, {artists : {items : ['Abba', 'bubba']}});

    artists.searchParams = {
      q : 'abba',
      type : 'artist'
    };

    artists.search(validForm());
    http.flush();
  });

  it('searches by type', function () {
    http.expectGET('https://api.spotify.com/v1/search?q=abba&type=album')
      .respond(200, {albums : {items : ['Abba', 'bubba']}});

    artists.searchParams = {
      q : 'abba',
      type : 'album'
    };

    artists.search(validForm());
    http.flush();
  });

  it('does not search when form invalid', function () {

    artists.search(invalidForm());

    http.verifyNoOutstandingExpectation();
  });

  it('assigns artists list', function () {
    artists.searchParams = {
      q : 'iron',
      type : 'artist'
    };

    artists.type = 'artist';
    http.expectGET('https://api.spotify.com/v1/search?q=iron&type=artist')
      .respond(200, {artists : {items : ['Iron Man', 'Iron Maiden']}});

    artists.search(validForm());
    http.flush();

    expect(artists.list).toEqual(['Iron Man', 'Iron Maiden']);
  });

  it('saves results to local storage', function () {
    artists.searchParams = {
      q : 'iron',
      type : 'artist'
    };

    http.expectGET('https://api.spotify.com/v1/search?q=iron&type=artist')
      .respond(200, {artists : {items : ['Iron Man', 'Iron Maiden']}});

    artists.search(validForm());
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
