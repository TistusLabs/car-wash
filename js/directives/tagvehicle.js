
app.directive("tagvehicle", function ($filter, ) {

    return {
        restrict: "EAA",
        scope: {
            untaggedvehiclelist: "=",
            tagged: "=",
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

            scope.changed= function(){
                debugger
                scope.$apply();
                console.log(scope.tagged);
            }

        }

    }
});