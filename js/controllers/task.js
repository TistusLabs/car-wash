/* use strict */

app.controller('TaskController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$systemUrls', '$helpers', '$utilFunctions', taskController]);

function taskController($scope, $rootScope, $state, $timeout, $http, $systemUrls, $helpers, $utilFunctions) {
    console.log("Task controller loaded");

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $scope.initiateNewTask = function () {
        $scope.task = {
            regNumber: "",
            taskNumber: 0,
            date: new Date(),
            customerName: ""
        };
        //debugger
        //console.log($scope.task);
    }
    $scope.initiateNewTask();

    $scope.addNewTask = function (task) {
        debugger
        task.regNumber = task.regNumber.registrationNumber;
        $http({
            method: "POST",
            url: $systemUrls.taskService,
            data: task,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data.IsSuccess) {
                $rootScope.showToast("New task added successfully.");
                $rootScope.navigateToState("tasks-ongoing");
            } else {
                $rootScope.showToast("There was an error when trying to save the task details.");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("There was an error when trying to save the task details.");
        });
    }

    $scope.loadCustomerInfo = function (vehicle) {
        //debugger
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

    $scope.getAllOngoingtasks = function () {
        $http({
            method: "GET",
            url: $systemUrls.taskService + "s/ongoing",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data != null) {
                $("#allongoingtasks").jsGrid({
                    height: "70%",
                    width: "100%",
                    editing: false,
                    sorting: true,
                    paging: true,
                    fields: [
                        { name: "registrationNumber", title: "Vehicle", type: "text", width: 150 },
                        { name: "taskNumber", title: "Task No.", type: "text", width: 200 },
                        { name: "currentMileage", title: "Mileage", type: "text", width: 200 }
                    ],
                    data: response.data.Data
                });
            } else if (response.data.Error != null) {
                $rootScope.showToast("Failed to get customer details.");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("Failed to get customer details.");
        });
    }

    $scope.getAllTasks = function () {
        $http({
            method: "GET",
            url: $systemUrls.taskService + "s",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data != null) {
                $("#alltasks").jsGrid({
                    height: "70%",
                    width: "100%",
                    editing: false,
                    sorting: true,
                    paging: true,
                    fields: [
                        { name: "registrationNumber", title: "Vehicle", type: "text", width: 150 },
                        { name: "taskNumber", title: "Task No.", type: "text", width: 200 },
                        { name: "currentMileage", title: "Mileage", type: "text", width: 200 }
                    ],
                    data: response.data
                });
            } else if (response.data.Error != null) {
                $rootScope.showToast("Failed to get customer details.");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("Failed to get customer details.");
        });
    }

    if ($state.current.name == "tasks-ongoing") {
        $scope.getAllOngoingtasks();
    } else if ($state.current.name == "all-tasks") {
        $scope.getAllTasks();
    }
}