/* use strict */

app.controller('DashboardController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$systemUrls', '$helpers', dashboardController]);

function dashboardController($scope, $rootScope, $state, $timeout, $http, $systemUrls, $helpers) {
    console.log("Dashboard page loaded");

    $scope.dashboardmenu = "main";

    $scope.changeMenu = function (menu) {
        $scope.dashboardmenu = menu;
    }
}