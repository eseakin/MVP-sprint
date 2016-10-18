angular.module('soloController', ['ngRoute', 'httpMod'])
  .controller('soloController', ['$scope', 'httpFact', function ($scope, httpFact) {

    $scope.results;
    $scope.index = 0;

    this.hoverEdit = false;

    $scope.saveData = function(data) {
      // console.log('saveData', data);
      $scope.results = data;
    }

    $scope.init = function() {
      httpFact.getData($scope.saveData);
      // console.log('Solo Ctrl results');
    }
    $scope.init();

    $scope.hoverIn = function() {
      // console.log('hover in');
      this.hoverEdit = true;
    }

    $scope.hoverOut = function() {
      // console.log('hover out');
      this.hoverEdit = false;
    }

    $scope.fav = function() {
      console.log('fav');
      this.hoverEdit = false;
      httpFact.fav($scope.results[$scope.index]);
      if($scope.results[$scope.index+1]) {
        $scope.index++
      }
    }

    $scope.next = function() {
      // console.log('next');
      this.hoverEdit = false;
      if($scope.results[$scope.index+1]) {
        $scope.index++
      }
    }
  }])
