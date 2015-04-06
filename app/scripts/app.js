'use strict';

/**
 * @ngdoc overview
 * @name sparkWavesApp
 * @description
 * # sparkWavesApp
 *
 * Main module of the application.
 */
var BASE_URL = 'http://localhost:8003';

angular
  .module('sparkWavesApp', [
    'ngAnimate',
    'ngRoute',
    'ui.scrollfix',
    'duScroll'
  ])
  .constant('API_URLS', {
    baseURL: BASE_URL,
    profileURL: BASE_URL + '/api/profiles',
    lessonURL: BASE_URL + '/api/lessons',
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lessons', {
        templateUrl: 'views/lessonList.html',
        controller: 'LessonListCtrl'
      })
      .when('/lessons/:lessonId', {
        templateUrl: 'views/singleLesson.html',
        controller: 'SingleLessonCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .when('/newSignUp', {
        templateUrl: 'views/newSignUp.html',
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
