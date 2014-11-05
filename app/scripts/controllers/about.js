'use strict';

/**
 * @ngdoc function
 * @name insightwebappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the insightwebappApp
 */
angular.module('insightwebappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
