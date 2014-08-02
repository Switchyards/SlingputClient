
module.exports = function (ngModule) {
    ngModule.directive("spInput", ["$compile", function ($compile) {

        var link = function (scope, element, attrs) {
          console.log("sp-input");
        };

        return {
            restrict: "AE",
            link: link
        };

    }]);
};
