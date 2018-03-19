/* use strict */

app.controller('VehicleController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$systemUrls', '$helpers', vehicleController]);

function vehicleController($scope, $rootScope, $state, $timeout, $http, $systemUrls, $helpers) {
    console.log("Vehicle controller loaded");

    $scope.addNewVehicle = function (vehicle) {
        $http({
            method: "POST",
            url: $systemUrls.vehicleService,
            data: vehicle,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data.IsSuccess) {
                $rootScope.showToast("Vehicle details added successfully.");
                $rootScope.navigateToState("all-vehicles");
            } else {
                $rootScope.showToast("There was an error when trying to save the vehicle details.");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("There was an error when trying to save the vehicle details.");
        });
        $scope.vehicle = {};
    }

    $scope.getAllVehicles = function () {
        $http({
            method: "GET",
            url: $systemUrls.vehicleService + "s",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data != null) {
                $("#vehicleDetailsTable").jsGrid({
                    height: "70%",
                    width: "100%",
                    editing: false,
                    sorting: true,
                    paging: true,
                    autoload: true,
                    pageSize: 15,
                    pageButtonCount: 5,
                    deleteConfirm: "Do you really want to delete the customer?",
                    data: response.data,
                    fields: [
                        { name: "registrationNumber", title: "Registration Number", type: "text", width: 150 },
                        { name: "make", title: "Make", type: "text", width: 150 },
                        { name: "model", title: "Model", type: "text", width: 150 },
                        { name: "currentMileage", title: "Mileage", type: "number", width: 150 }
                    ]
                });
                $scope.allvehicles = response.data;
            } else if (response.data.Error != null) {
                $rootScope.showToast("Failed to get customer details.");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("Failed to get customer details.");
        });

    }
    $scope.getAllVehicles();
}