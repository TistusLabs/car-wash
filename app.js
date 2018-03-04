var app = angular.module('filemanager', [
    'ui.router',
    'uiKernel',
    'angular.filter'
]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'partials/dashboard.html',
            controller: 'DashboardController'
        })
        .state('documents', {
            url: '/documents',
            templateUrl: 'partials/documents.html',
            controller: 'DocumentController'
        }).state('fileupload', {
            url: '/fileupload',
            templateUrl: 'partials/fileupload.html',
            controller: 'DocumentController'
        });

}

);

app.controller('MainController', ['$scope', '$rootScope', '$state', '$timeout', '$http', mainController]);

function mainController($scope, $rootScope, $state, $timeout, $http) {
    console.log("Main Application started");
    $('body').addClass('loaded');

    $scope.menuOptions = {
        dashboard: {
            notifications: 1
        }
    }
}