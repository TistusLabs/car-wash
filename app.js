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
        }).state('tasks-ongoing', {
            url: '/tasks-ongoing',
            templateUrl: 'partials/tasks-ongoing.html',
            controller: 'TaskController'
        }).state('fileupload', {
            url: '/fileupload',
            templateUrl: 'partials/fileupload.html',
            controller: 'DocumentController'
        }).state('new-customer', {
            url: '/new-customer',
            templateUrl: 'partials/customer-new.html',
            controller: 'CustomerController'
        }).state('all-customers', {
            url: '/all-customers',
            templateUrl: 'partials/customers-all.html',
            controller: 'CustomerController'
        }).state('customer-details', {
            url: '/customer/:customerID',
            templateUrl: 'partials/customer-details.html',
            controller: 'CustomerController'
        }).state('new-vehicle', {
            url: '/new-vehicle',
            templateUrl: 'partials/vehicle-new.html',
            controller: 'VehicleController'
        }).state('all-vehicles', {
            url: '/all-vehicles',
            templateUrl: 'partials/vehicles-all.html',
            controller: 'VehicleController'
        }).state('new-task', {
            url: '/new-task',
            templateUrl: 'partials/vehicle-task.html',
            controller: 'TaskController'
        }).state('all-tasks', {
            url: '/all-tasks',
            templateUrl: 'partials/tasks-all.html',
            controller: 'TaskController'
        }).state('new-inventory', {
            url: '/new-inventory',
            templateUrl: 'partials/inventory-addnew.html',
            controller: 'InventoryController'
        }).state('all-inventory', {
            url: '/all-inventory',
            templateUrl: 'partials/inventory-all.html',
            controller: 'InventoryController'
        }).state('all-dealers', {
            url: '/all-dealers',
            templateUrl: 'partials/dealers-all.html',
            controller: 'DealerController'
        }).state('new-dealer', {
            url: '/new-dealer',
            templateUrl: 'partials/dealer-new.html',
            controller: 'DealerController'
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

    $rootScope.showToast = function (Message) {
        Materialize.toast('<span>' + Message + '</span>', 3000);
    }

    $rootScope.isNullOrEmptyOrUndefined = function (value) {
        return !value;
    };

    $rootScope.navigateToState = function (to) {
        $state.go(to);
    }
}