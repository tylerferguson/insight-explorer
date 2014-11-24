/**
 * Created by tferguson on 24/11/2014.
 */

angular.module('insightExplorer').controller('NavCtrl', function($scope) {

    $scope.toggleSelect = function(event) {

        var button = $(event.target).parent();

        button.toggleClass('active', !(button.hasClass('active')));
    }
});
