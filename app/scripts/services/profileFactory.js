'use strict';

//A factory that manages authentication. It allows for a user to:
// Login
// Logout
// Get current user
// Check if anyone is authenticated

angular.module('sparkWavesApp')
  .factory('ProfileService', function($http, API_URLS){

    var profileService = {};

    profileService.addProfile = function (email) {
      var url = API_URLS.profileURL;
      return $http.post(url, {
        email: email
      });
    };

    return profileService;
  });
