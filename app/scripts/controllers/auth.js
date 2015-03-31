'use strict';


angular.module('sparkWavesApp')
  .controller('AuthCtrl', function ($scope, $location, ProfileService) {
    $scope.newProfilFormModel = {};

    $scope.newProfile = function (){
      ProfileService.addProfile($scope.newProfilFormModel.email)
      .then(function () {
        $location.path('newSignUp');
      }, function (res) {
        debugger;
        $scope.newProfilFormModel.errors = res.data.email;
      });
    };
  });
