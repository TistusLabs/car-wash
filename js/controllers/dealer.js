/* use strict */

app.controller('DealerController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$systemUrls', '$helpers', dealerController]);

function dealerController($scope, $rootScope, $state, $timeout, $http, $systemUrls, $helpers) {
    console.log("Dealer controller loaded");

    $scope.addNewDealer = function (dealer) {
        $http({
            method: "POST",
            url: $systemUrls.dealerService,
            data: dealer,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data.IsSuccess) {
                $rootScope.showToast("Dealer details added successfully.");
                $rootScope.navigateToState("all-dealers");
            } else {
                $rootScope.showToast("There was an error when trying to save the dealer details.");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("There was an error when trying to save the dealer details.");
        });
        $scope.dealer = {};
    }

    $scope.getAllDealers = function () {
        $http({
            method: "GET",
            url: $systemUrls.dealerService,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data != null) {
                $("#dealertable").jsGrid({
                    height: "70%",
                    width: "100%",
                    editing: false,
                    sorting: true,
                    paging: true,
                    autoload: true,
                    pageSize: 15,
                    pageButtonCount: 5,
                    deleteConfirm: "Do you really want to delete the dealer?",
                    data: response.data,
                    fields: [
                        { name: "name", title: "Name", type: "text", width: 150 },
                        { name: "address", title: "Address", type: "text", width: 200 },
                        { name: "landline", title: "Landline", type: "text", width: 50 },
                        { name: "mobile", title: "Mobile", type: "text", width: 50 },
                        { name: "create_date", title: "Added Date", type: "number", width: 100 }
                    ]
                });
                $scope.alldealers = response.data;
            } else if (response.data.Error != null) {
                $rootScope.showToast("Failed to get dealer details.");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("Failed to get dealer details.");
        });

    }
    $scope.getAllDealers();
}