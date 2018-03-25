
app.directive("tagvehicle", function ($filter, ) {

    return {
        restrict: "EAA",
        scope: {
            untaggedvehiclelist: "=",
            tagged: "=",
            objindex: "=",
            'updateApplication': '&',
            'reloadpage': '&'
        },

        templateUrl: 'partials/directive-tagvehicle.html',

        link: function (scope) {
            console.log(scope.untaggedvehiclelist);
            scope.mode = "view";
            scope.changeMode = function (mode) {
                scope.mode = mode
            };

            scope.changed = function () {
                scope.$emit('changedVehicle', { "vehicle": scope.tagged, "index": scope.objindex });
            }

            scope.removeVehicle = function () {
                scope.$emit('removedVehicle', { "vehicle": scope.tagged, "index": scope.objindex });
            }

        }

    }
});