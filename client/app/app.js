var app = angular.module('app', ['ngRoute', 'ngAnimate', 'gridController', 'soloController', 'favCtrl'])


  .config(function($routeProvider) {
    $routeProvider
      .when('/soloView', {
        templateUrl: 'app/Solo/soloView.html',
        controller: 'soloController'
      })
      .when('/gridView', {
        templateUrl: 'app/Grid/gridView.html',
        controller: 'gridController'
      })
      .when('/favorites', {
        templateUrl: 'app/Fav/favView.html',
        controller: 'favCtrl'
      })
      .otherwise({
        redirectTo: '/soloView'
      });
  })