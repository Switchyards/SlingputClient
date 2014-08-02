module.exports = [
  "$scope",
  "$http",
  function($scope, $http) {
    var ideas = [
      "",
      "",
      ""
    ];

    $scope.randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    
    $scope.email = "";
    $scope.submitEmail = function() {
      var data = {
        "email": $scope.email
      };
      $http.post('/email', data).success(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      });
    };
  }
];
