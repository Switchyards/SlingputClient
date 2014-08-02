/* globals $, window */

var LayoutCtrl = [
  "$scope",
  "$state",
  function ($scope, $state) {
    $state.go("home");
  }
];

module.exports = function (ngModule) {
  ngModule.controller("app:layout", LayoutCtrl);

  ngModule.run([
    "$rootScope",
    "$state",
    "$stateParams",
    "$timeout",
    "$http",
    function ($rootScope, $state, $stateParams, $timeout, $http) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $rootScope.$on("$viewContentLoaded", function () {
        window.scrollTo(0,0);
        $timeout(function () { window.scrollTo(0,0); }, 100);
      });
    }
  ]);

  // From initial run.js file
  ngModule.run(["$rootScope", "$location", "$http", "$state", function($rootScope, $location, $http, $state) {
    return $rootScope.bodyClick = function(e) {
      return $rootScope.$broadcast("body:click", e);
    };
  }
  ]);
};
