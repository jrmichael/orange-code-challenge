angular.module('musicApp.artists')
  .directive('countryCode', function () {
    return {
      require : 'ngModel',
      link : function (scope, element, attrs, ngModel) {
        var codes = ['pl', 'en', 'us'];

        ngModel.$validators.countryCode = function (value) {
          if (!value) {
            return true;
          }
          return codes.indexOf(value) !== -1;
        };
      }
    };


  });
