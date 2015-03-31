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
    'ngRoute'
  ])
  .constant('API_URLS', {
    baseURL: BASE_URL,
    profileURL: BASE_URL + '/api/profiles',
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lessons', {
        templateUrl: 'views/lessons.html',
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
