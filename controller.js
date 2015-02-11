var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {

  var getUsers = function() {
    mainService.getUsers().then(function(data) {
      $scope.users = data;
      console.log($scope.users);
    }); 
  }

  getUsers(); 
  
  
  
  
});