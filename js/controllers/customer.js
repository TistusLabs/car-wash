/* use strict */

app.controller('CustomerController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$systemUrls', '$helpers', '$stateParams', customerController]);

function customerController($scope, $rootScope, $state, $timeout, $http, $systemUrls, $helpers, $stateParams) {
    console.log("Customer page loaded");

    // console.log($state.params);

    $scope.addNewCustomer = function (profile) {
        $http({
            method: "POST",
            url: $systemUrls.profileService,
            data: profile,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data.IsSuccess) {
                $rootScope.showToast("New customer added successfully.");
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
    if(!$rootScope.isNullOrEmptyOrUndefined($state.params.customerID)){
        $scope.getCustomerByID($state.params.customerID);
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
}