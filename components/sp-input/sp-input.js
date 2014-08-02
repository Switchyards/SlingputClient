
module.exports = function (ngModule) {
    ngModule.directive("spInput", ["$compile", function ($compile) {

        var link = function (scope, element, attrs) {
        };

        return {
            restrict: "AE",
            link: link
        };

    }]);
};
