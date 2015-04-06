'use strict';

//A factory that manages authentication. It allows for a user to:
// Login
// Logout
// Get current user
// Check if anyone is authenticated

angular.module('sparkWavesApp')
  .factory('LessonService', function($http, API_URLS){

    var lessonService = {};

    lessonService.getLessons = function () {
      var url = API_URLS.lessonURL;
      return $http.get(url);
    };

    lessonService.getLesson = function (id) {
      var url = API_URLS.lessonURL + '/' + id;
      return $http.get(url);
    };

    return lessonService;
  });
