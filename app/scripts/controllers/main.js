'use strict';

/**
 * @ngdoc function
 * @name insightwebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the insightwebappApp
 */
angular.module('insightwebappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
