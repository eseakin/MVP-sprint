angular.module('gridController', ['ngRoute', 'httpMod'])
  .controller('gridController', ['$scope', 'httpFact', function ($scope, httpFact) {
    $scope.results;

    this.hoverEdit = false;
    $scope.imgVis = true;

    $scope.saveData = function(data) {
      // console.log('saveData', data);
      $scope.results = data;
    }

    $scope.init = function() {
      httpFact.getData($scope.saveData);
      // console.log('Grid Ctrl results');
    }

    $scope.init();

    $scope.hoverIn = function () {
      // console.log('hover in');
      this.hoverEdit = true;
    }

    $scope.hoverOut = function () {
      // console.log('hover out');
      this.hoverEdit = false;
    }

    $scope.fav = function (index) {
      console.log('fav');
      httpFact.fav($scope.results[index]);
    }

    $scope.next = function () {
      // console.log('next');
      this.hoverEdit = false;
      $scope.imgVis = false;
    }

  }])
