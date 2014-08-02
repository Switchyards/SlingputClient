require("angular");
require("angular-resource");
require("angular-ui-router");
require("angular-once");

var pages = angular.module("slingput:pages", ["once"]);
var components = angular.module("slingput:components", ["ngResource", "once"]);

require("../components/components.js")(components);
require("../layout/layout.js")(pages);
require("../pages/pages.js")(pages);

var app = angular.module("app", [
  "ngAnimate",
  "ui.router",
  "once",
  "slingput:components",
  "slingput:pages"
]);

app.config([
  "$locationProvider",
  function ($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
  }
]);

app.run([
  "$rootScope",
  function ($rootScope) {
    $rootScope.pageTitle = "Slingput";
  }
]);

module.exports = app;
