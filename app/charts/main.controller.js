'use strict';

/**
 * @ngdoc function
 * @name insightExplorer.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the insightExplorer
 */
angular.module('insightExplorer').controller('MainCtrl', ['$scope', function ($scope) {


    $scope.$on('chartSelected', function(event, args) {
        console.log('broadcast success!');

        $('#chart').empty();

        console.log('get success!');
        var chart = new insight[args.chartType](args.data, '#chart', args.dataProperties[0], args.dataProperties[1])
            .build();

        chart.draw();



    });
}]);
