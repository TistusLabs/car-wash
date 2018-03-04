/* use strict */

app.controller('DocumentController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$systemUrls', '$helpers', documentController]);

function documentController($scope, $rootScope, $state, $timeout, $http, $systemUrls, $helpers) {
    console.log("Document controller loaded");

    $('.dropify').dropify();

    $scope.documentLis = [
        {
            "Name":"My photo",
            "Descriptiob":"This is a photo of me",
        }
    ];
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
}