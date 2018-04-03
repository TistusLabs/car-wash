/* use strict */

app.controller('CustomerController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$systemUrls', '$helpers', '$stateParams', customerController]);

function customerController($scope, $rootScope, $state, $timeout, $http, $systemUrls, $helpers, $stateParams) {
    console.log("Customer page loaded");

    // console.log($state.params);

    $scope.addNewCustomer = function (profile) {
        profile.otherDetails = {};
        profile.otherDetails.vehicles = [];
        $http({
            method: "POST",
            url: $systemUrls.profileService,
            data: profile,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            debugger
            if (response.data.IsSuccess) {
                $rootScope.showToast("New customer added successfully.");
                $rootScope.navigateToState("all-customers");
            } else {
                $rootScope.showToast("There was an error when trying to save the customer details.");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("There was an error when trying to save the customer details.");
        });
        $scope.profile = {};
    }

    $scope.markVehiclesAsTagged = function (profileID, vehicles, index) {
        debugger
        $http({
            method: "POST",
            url: $systemUrls.vehicleService + "s/tag",
            data: { "profileID": profileID, "regNumber": vehicles[index].registrationNumber },
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data.IsSuccess) {
                if (vehicles.length > index + 1) {
                    $scope.markVehiclesAsTagged(profileID, vehicles, index + 1);
                } else {
                    $rootScope.showToast("All vehicles tagged to Customer successfully.");
                    $scope.profile = {};
                    $rootScope.navigateToState("all-customers");
                }
            } else {
                $rootScope.showToast("There was an error when trying to update the customer details.");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("There was an error when trying to update the customer details.");
        });
    }

    $scope.updateProfile = function (profile) {
        $http({
            method: "POST",
            url: $systemUrls.profileService,
            data: profile,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data.IsSuccess) {
                if ($scope.profile.otherDetails.vehicles.length > 0) {
                    $scope.markVehiclesAsTagged($scope.profile._id, $scope.profile.otherDetails.vehicles, 0);
                } else {
                    $rootScope.showToast("Customer details updated successfully.");
                    $scope.profile = {};
                    $rootScope.navigateToState("all-customers");
                }
            } else {
                $rootScope.showToast("There was an error when trying to update the customer details.");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("There was an error when trying to update the customer details.");
        });
    }

    $scope.$on('changedVehicle', function (event, data) {
        $scope.profile.otherDetails.vehicles.splice(data.index, 1, { "registrationNumber": data.vehicle.registrationNumber });;
    });

    $scope.$on('removedVehicle', function (event, data) {
        $scope.profile.otherDetails.vehicles.splice(data.index, 1);;
    });

    $scope.getCustomerByID = function (ID) {
        $http({
            method: "GET",
            url: $systemUrls.profileService + "/" + ID,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data != null) {
                $scope.profile = response.data;
            } else {
                $rootScope.showToast("No Customer found of that ID number..");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("Failed to get customer details.");
        });
    }
    if (!$rootScope.isNullOrEmptyOrUndefined($state.params.customerID)) {
        $scope.getCustomerByID($state.params.customerID);
    }

    $scope.addNewTagToProfile = function () {

        var newObj = {
            "registrationNumber": "Registration Number"
        };
        $scope.profile.otherDetails.vehicles.push(newObj);
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
                $rootScope.showToast("Failed to get vehicle details.");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("Failed to get vehicle details.");
        });
    }

    $scope.getAllCustomers = function () {
        $http({
            method: "GET",
            url: $systemUrls.profileService + "s",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data != null) {
                $("#jsGrid-static").jsGrid({
                    height: "70%",
                    width: "100%",
                    editing: false,
                    sorting: true,
                    paging: true,
                    pageSize: 15,
                    pageButtonCount: 5,
                    deleteConfirm: "Do you really want to delete the customer?",
                    data: response.data,
                    fields: [
                        { name: "firstName", title: "First Name", type: "text", width: 150 },
                        { name: "lastName", title: "Last Name", type: "text", width: 150 },
                        { name: "mobile", title: "Mobile", type: "text", width: 150 },
                        { name: "email", title: "Email", type: "text", width: 150 },
                        { name: "address", title: "Address", type: "text", width: 200 }
                    ],
                    rowClick: function (args) {
                        $state.go("customer-details", { customerID: args.item._id });
                    }
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
    $scope.getAllCustomers();
    $scope.getAllVehicles();
}