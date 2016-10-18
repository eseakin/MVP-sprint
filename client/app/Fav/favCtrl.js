angular.module('favCtrl', ['ngRoute', 'httpMod'])
  .controller('favCtrl', ['$scope', 'httpFact', function ($scope, httpFact) {
    $scope.favorites = [];

    $scope.init = function () {
      $scope.favorites = httpFact.favorites;
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

//SHOULD UNFAV WHEN CLICKED AND REMOVE
    $scope.fav = function() {
      console.log('fav');
      this.hoverEdit = false;
      httpFact.fav($scope.results[$scope.index]);
      if($scope.results[$scope.index+1]) {
        $scope.index++
      }
    }

  }])
