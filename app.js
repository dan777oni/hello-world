(function(){

var app = angular.module('gitViewer', []);

var MainController =  function($scope,$http) {
  
  var onUserComplete = function(response){
    $scope.user = response.data;
  };
  
  var onError = function(reason){
    $scope.error = "Could not get the data";
  };
   
  $http.get("https://api.github.com/users/angular")
  .then(onUserComplete, onError);

  $scope.question = 'How is your GitHub Training?';
  $scope.username = "angular";
  
};

app.controller('MainCtrlDM', MainController);
  
}());
