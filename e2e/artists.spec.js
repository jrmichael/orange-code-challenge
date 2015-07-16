'use strict';

describe('The Artists view', function () {
  var page;

  beforeEach(function () {
    page = require('./artists.po');
    browser.get(page.url);
  });

  it('has Artists heading', function () {
    expect(page.heading()).toEqual('Artists');
  });

  it('can search for Iron Maiden', function (done) {
    page.search('Iron Maiden', 2).then(function () {
      expect(page.resultsCount()).toEqual(2);

      done();
    });
  });
});
