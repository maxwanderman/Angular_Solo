var app = angular.module('myApp', []);

app.controller('MainController', function($scope){

  $scope.toDoList = [];

  $scope.runClick = function(){
  console.log('crazytown');
  $scope.toDoList.push($scope.listItem);
  console.log($scope.toDoList);
  };

});
