'use strict';

var ArtistsPage = function() {
  this.url = '/#/artists';

  this.heading = function () {
    return element(by.css('#artists h1')).getText();
  };

  this.search = function (query, count) {
    element(by.model('artists.searchParams.q')).sendKeys(query);
    element(by.model('artists.searchParams.limit')).sendKeys(count);
    return element(by.css('button.btn.btn-primary.form-control')).click();
  };

  this.resultsCount = function () {
    return element.all(by.repeater('artist in artists.list')).count();
  };
};

module.exports = new ArtistsPage();
