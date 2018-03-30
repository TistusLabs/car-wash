/* use strict */

app.controller('TaskController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$systemUrls', '$helpers', '$utilFunctions', taskController]);

function taskController($scope, $rootScope, $state, $timeout, $http, $systemUrls, $helpers, $utilFunctions) {
    console.log("Task controller loaded");

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $("#jsGrid-static").jsGrid({
        height: "70%",
        width: "100%",
        editing: true,
        sorting: true,
        paging: true,
        fields: [
            { name: "Name", type: "text", width: 150 },
            { name: "Age", type: "number", width: 50 },
            { name: "Address", type: "text", width: 200 },
            { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
            { name: "Married", type: "checkbox", title: "Is Married" },
            { type: "control" }
        ],
        data: db.clients
    });

    $scope.initiateNewTask = function () {
        $scope.task = {
            regNumber: "",
            taskID: $utilFunctions.createuuid(),
            date: new Date(),
            customerName: ""
        };
        //debugger
        //console.log($scope.task);
    }
    $scope.initiateNewTask();

    $scope.addNewTask = function () {
        debugger
        console.log($scope.task);
    }

    $scope.loadCustomerInfo = function (vehicle) {
        debugger
        $http({
            method: "GET",
            url: $systemUrls.profileService + "/" + vehicle.profileID,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data != null) {
                $scope.task.customerName = response.data.firstName + " " + response.data.lastName;
            } else {
                $rootScope.showToast("No Customer found of that ID number..");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("Failed to get customer details.");
        });
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