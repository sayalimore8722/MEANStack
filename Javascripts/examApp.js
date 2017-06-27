var app=angular.module('examApp',[]);

app.controller('mainController',function($scope){

});

app.controller('authController',function($scope)
{
  $scope.user = {username: '',password: ''};
  $scope.error_message = '';

$scope.login = function()
{
  $scope.error_message = 'Login request for ' + $scope.user.username;
};

$scope.register = function()
{
  $scope.error_message = 'Registeration request for ' + $scope.user.username;
};

});
