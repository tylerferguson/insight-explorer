/**
 * Created by tferguson on 26/11/2014.
 */

angular.module('insightExplorer').controller('SideCtrl', function ($scope) {

    $scope.selectChart = function(chartType) {

        console.log('binding success!');
        $scope.$root.$broadcast('chartSelected', {chartType: chartType});

    };
});

