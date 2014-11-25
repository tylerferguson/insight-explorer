'use strict';

/**
 * @ngdoc function
 * @name insightExplorer.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the insightExplorer
 */
angular.module('insightExplorer').controller('MainCtrl', function () {
    
    var data = [
        { 'name': 'Hancock Campbell', 'age': 39, 'broticity': 78, 'eyeColor': 'blue' },
        { 'name': 'Sybil Nielsen', 'age': 27, 'broticity': 49, 'eyeColor': 'green' },
        { 'name': 'Pierce Rice', 'age': 29, 'broticity': 53, 'eyeColor': 'green' },
        { 'name': 'Ferguson Dotson', 'age': 34, 'broticity': 15, 'eyeColor': 'green' },
        { 'name': 'Alicia Byrd', 'age': 33, 'broticity': 54, 'eyeColor': 'blue' },
        { 'name': 'Dean Fisher', 'age': 23, 'broticity': 64,'eyeColor': 'green' },
        { 'name': 'Mckinney Harvey', 'age': 31, 'broticity': 23, 'eyeColor': 'blue' },
        { 'name': 'Lakisha Battle', 'age': 33, 'broticity': 19, 'eyeColor': 'brown' },
        { 'name': 'Levine Franklin', 'age': 37, 'broticity': 78, 'eyeColor': 'blue' },
        { 'name': 'Kathrine Lewis', 'age': 27, 'broticity': 80, 'eyeColor': 'blue' },
        { 'name': 'Jefferson Everett', 'age': 34, 'broticity': 59, 'eyeColor': 'brown' },
        { 'name': 'Moss Vasquez', 'age': 39, 'broticity': 3, 'eyeColor': 'green' }
    ];
    
    var chart = new insight.SimpleColumnChart(data, '#chart', 'name', 'age')
        .build();

    chart.draw();
  });
