'use strict';

angular.module('sparkWavesApp')
  .directive('signupForm', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/signupForm.html',
      controller: 'AuthCtrl'
    };
  });
