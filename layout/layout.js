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
    function ($rootScope, $state, $stateParams, $timeout) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $rootScope.$on("$viewContentLoaded", function () {
        window.scrollTo(0,0);
        $timeout(function () { window.scrollTo(0,0); }, 100);
      });
    }
  ]);
};
