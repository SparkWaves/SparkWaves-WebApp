'use strict';

/**
 * @ngdoc overview
 * @name sparkWavesApp
 * @description
 * # sparkWavesApp
 *
 * Main module of the application.
 */
angular
  .module('sparkWavesApp', [
    'ngAnimate',
    'ngRoute'
  ])
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
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
