/* use strict */

app.controller('CustomerController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$systemUrls', '$helpers', customerController]);

function customerController($scope, $rootScope, $state, $timeout, $http, $systemUrls, $helpers) {
    console.log("Customer page loaded");

    $scope.addNewCustomer = function (profile) {
        $http({
            method: "POST",
            url: $systemUrls.profileService,
            data: profile,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data != null) {
                Materialize.toast('<span>Hiya! I am a toast.</span>', 1500);
            } else if (response.data.Error != null) {
                Materialize.toast('<span>Hiya! I am a toast.</span>', 1500);
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            Materialize.toast('<span>Hiya! I am a toast.</span>', 1500);
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
                    autoload: true,
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
                    ]
                });
            } else if (response.data.Error != null) {
                Materialize.toast('<span>Hiya! I am a toast.</span>', 3000);
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            Materialize.toast('<span>Hiya! I am a toast.</span>', 3000);
        });

    }
    $scope.getAllCustomers();
}