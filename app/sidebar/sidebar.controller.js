/**
 * Created by tferguson on 26/11/2014.
 */

(function() {

    'use strict';

    angular.module('insightExplorer').controller('SideCtrl', ['$scope', '$http', function ($scope, $http) {

        var self = this;

        $scope.dataFields = [];
        $scope.dataProperties = [];
        $scope.charts = [];
        $scope.selected = [];
        $scope.prop = 0;

        $http.get('sidebar/charts.json')
            .success(function (data) {
                $scope.charts = data;
            });

        $scope.$on('dataReceived', function (event, args) {

            self.data = args.data;
            $scope.dataFields = Object.keys(self.data[0]);

        });

        var setProperty = function (dataField) {

            $scope.dataProperties.push(dataField);
        };

        var removeProperty = function(item) {
            $scope.dataProperties.splice(item, 1);

            console.log( $scope.dataProperties);
        };

        var selectProperty = function(item, prop) {
            $scope.selected[item] = {
                item: item,
                prop: prop
            };
            $scope.prop++;
        };

        var deselectProperty = function(item) {

            if ($scope.selected[item].prop < 2 ) {

                var toUnselect = $scope.selected.filter(function(element) {
                    return element.prop > $scope.selected[item].prop;
                });

                if (toUnselect[0]) {
                    deselectProperty(toUnselect[0].item);
                }
            }

            $scope.selected[item] = {};
            $scope.prop--;

        };

        $scope.select = function(item, prop, dataField) {

            console.log(arguments);

            if($.isEmptyObject(($scope.selected[item]))) {

                selectProperty(item, prop);
                setProperty(dataField);
            } else {

                deselectProperty(item);
                removeProperty(item);

            }

        };


        $scope.isSelected = function(index, prop) {

            var selected = $scope.selected[index];

            if (selected) {
                return selected.item === index && selected.prop === prop;
            }


        };

        $scope.filterByChosenProperties = function () {

            return $scope.dataProperties.length >= 2;
        };

        $scope.enableByChosenProperties = function (value) {

            var filterByNumProperties = value.type === 'SimpleBubbleChart' ? $scope.dataProperties.length >= 3 : $scope.dataProperties.length >= 2;

            if (filterByNumProperties) {

                var isOrdinal = !Number(self.data[0][$scope.dataProperties[0]]);

                return isOrdinal ? value.type === 'SimpleLineChart' || value.type === 'SimpleScatterChart' : false;
            }

            return true;
        };

        $scope.selectChart = function (chartType) {

            $scope.$root.$broadcast('chartSelected', {
                chartType: chartType,
                data: self.data,
                dataProperties: $scope.dataProperties
            });
        };
    }]);
})();

