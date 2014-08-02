//Routes and references to other files for home.

module.exports = function (ngModule) {
  ngModule.config([
    "$stateProvider",
    function ($stateProvider) {

      $stateProvider.state("home", {
        url: "/",
        controller: require("./controllers/home.ctrl.js"),
        template: require("./templates/home.jade")
      });

    }
  ]);

};

