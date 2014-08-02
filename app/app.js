require("angular");
require("angular-ui-router");
require("angular-once");

var pages = angular.module("slingput:pages", ["once"]);
var components = angular.module("slingput:components", ["once"]);

require("../components/components.js")(components);
require("../layout/layout.js")(pages);
require("../pages/pages.js")(pages);

var app = angular.module("slingput", [
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

module.exports = app;
