/* use strict */

app.controller('InventoryController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$systemUrls', '$helpers', inventoryController]);

function inventoryController($scope, $rootScope, $state, $timeout, $http, $systemUrls, $helpers) {
    console.log("Inventory controller loaded");

    $scope.addNewItem = function(item){
        alert("hi");
    }
}