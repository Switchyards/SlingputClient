module.exports = function (ngModule) {

  var LayoutCtrl = [
    "$scope",
    function ($scope) {
      $scope.session = {};
      console.log("LayoutCtrl");
    }
  ];

  ngModule.controller("app:layout", LayoutCtrl);

  ngModule.run([
    "$rootScope",
    "$state",
    "$stateParams",
    function ($rootScope, $state, $stateParams) {
      console.log("app:layout loaded");
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $rootScope.$state.go("home");
      $rootScope.$on("$viewContentLoaded", function () {
        window.scrollTo(0,0);
        $timeout(function () { window.scrollTo(0,0); }, 100);
      });
    }
  ]);


};