/**
 * Created by tferguson on 20/11/2014.
 */

angular.module('insightExplorer')
    .config(function ($routeProvider) {

        'use strict';

        $routeProvider
            .when('/', {
                templateUrl: 'charts/chart.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'charts/chart.html',
                controller: 'MainCtrl'
            })
            .when('/contact', {
                templateUrl: 'charts/chart.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

