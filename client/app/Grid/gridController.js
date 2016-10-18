angular.module('gridController', ['ngRoute', 'httpMod'])
  .factory('grid', function() {

    var display = function() {
      console.log('grid display')

      return 5;
    }

    return {
      display: display
    }
  })
  .controller('gridController', ['$scope', 'grid', 'httpFact', function ($scope, grid, httpFact) {
    $scope.results = [];

    this.hoverEdit = false;
    $scope.imgVis = true;

    $scope.saveData = function(data) {
      console.log('saveData', data);
      $scope.results = data;
    }

    $scope.init = function() {
      httpFact.getData($scope.saveData);
      console.log('Grid Ctrl results');
    }

    $scope.init();

    $scope.hoverIn = function () {
      console.log('hover in');
      this.hoverEdit = true;
    }

    $scope.hoverOut = function () {
      console.log('hover out');
      this.hoverEdit = false;
    }

    $scope.fav = function () {
      console.log('fav');
      this.hoverEdit = false;
      $scope.imgVis = false;
    }

    $scope.next = function () {
      console.log('next');
      this.hoverEdit = false;
      $scope.imgVis = false;
    }

  }])
