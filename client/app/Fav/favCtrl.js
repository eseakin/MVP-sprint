angular.module('favCtrl', ['ngRoute'])
  .factory('fav', function() {

    var display = function() {
      console.log('fav display')

      return 5;
    }

    return {
      display: display
    }
  })
  .controller('favCtrl', ['$scope', 'fav', function ($scope, fav) {
    $scope.link = 'https://www.google.com';
    $scope.thumb = 'http://b.thumbs.redditmedia.com/-DlSKbdYluO0QSRHGgJw1JL6a1FC_TgkefUSA2VJr1o.jpg'
    $scope.title = 'Favorites'

    $scope.favView = function () {
      console.log('fav click')
      fav.display();
    }

  }])
