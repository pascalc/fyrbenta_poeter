
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'home.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

