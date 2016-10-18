angular.module('favCtrl', ['ngRoute', 'httpMod'])
  .controller('favCtrl', ['$scope', 'httpFact', function ($scope, httpFact) {
    $scope.favorites = [];

    $scope.init = function () {
      if (!httpFact.favorites.length) {
        $scope.favorites = [{title: 'No favorites yet!', thumb: '../../img/empty-heart.jpg'}]
      } else {
        $scope.favorites = httpFact.favorites;      
      }
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
    $scope.fav = function(index) {
      console.log('fav');
      $scope.favorites.splice(index, 1);
    }

  }])
