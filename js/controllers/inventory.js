/* use strict */

app.controller('InventoryController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$systemUrls', '$helpers', inventoryController]);

function inventoryController($scope, $rootScope, $state, $timeout, $http, $systemUrls, $helpers) {
    console.log("Inventory controller loaded");

    $scope.addNewItem = function (item) {
        alert("hi");
    }

    $scope.getAllInventoryItems = function () {
        $http({
            method: "GET",
            url: $systemUrls.inventoryService,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data != null) {
                $("#inventoryOverviewTable").jsGrid({
                    height: "70%",
                    width: "100%",
                    editing: false,
                    sorting: true,
                    paging: true,
                    autoload: true,
                    pageSize: 15,
                    pageButtonCount: 5,
                    deleteConfirm: "Do you really want to delete the item?",
                    data: response.data,
                    fields: [
                        { name: "partNumber", title: "Part Number", type: "text", width: 150 },
                        { name: "supplierPartNumber", title: "Sup. Pt. No", type: "text", width: 150 },
                        { name: "nameDescription", title: "Name / Description", type: "text", width: 150 },
                        { name: "itemType", title: "Type", type: "text", width: 150 },
                        { name: "make", title: "Make", type: "text", width: 150 },
                        { name: "dealerPrice", title: "Dealer Price", type: "number", width: 150 },
                        { name: "sellingPrice", title: "Selling Price", type: "number", width: 150 }
                    ]
                });
                $scope.allinventoryitems = response.data;
            } else if (response.data.Error != null) {
                $rootScope.showToast("Failed to get inventory details.");
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
            $rootScope.showToast("Failed to get inventory details.");
        });

    }
    $scope.getAllInventoryItems();
}