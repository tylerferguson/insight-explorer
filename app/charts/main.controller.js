'use strict';

/**
 * @ngdoc function
 * @name insightExplorer.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the insightExplorer
 */
angular.module('insightExplorer').controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {


    $scope.$on('chartSelected', function(event, args) {
        console.log('broadcast success!');

        $('#chart').empty();

        $http.get('../data.json')
            .success( function(data) {
                console.log('get success!');
                var chart = new insight[args.chartType](data, '#chart', 'broticity', 'age')
                    .build();

                chart.draw();
            });


    });
}]);
