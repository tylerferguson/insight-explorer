'use strict';

/**
 * @ngdoc overview
 * @name insightwebappApp
 * @description
 * # insightwebappApp
 *
 * Main module of the application.
 */
angular
  .module('insightwebappApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
