angular.module('gridController', ['ngRoute'])
  .factory('grid', function() {

    var display = function() {
      console.log('grid display')

      return 5;
    }

    return {
      display: display
    }
  })
  .controller('gridController', ['$scope', 'grid', function ($scope, grid) {
    $scope.results = [
      {
        link: 'https://www.google.com',
        thumb: 'http://b.thumbs.redditmedia.com/-DlSKbdYluO0QSRHGgJw1JL6a1FC_TgkefUSA2VJr1o.jpg',
        title: 'Puppys first time'
      },
      {
        link: 'https://www.google.com',
        thumb: 'https://b.thumbs.redditmedia.com/UAH2Fthmf7WuWk04CUyovWAkW5WooZDRXRRGMmt8SJQ.jpg',
        title: 'Future sheep dog'
      },
      {
        link: 'https://www.google.com',
        thumb: 'https://b.thumbs.redditmedia.com/jEoCRUGRzP3Y_GjoErnyOcZKcba0ajHpx-A9IXToIKc.jpg',
        title: 'So tired!'
      }
    ]

    $scope.link = 'https://www.google.com';
    $scope.thumb = 'http://b.thumbs.redditmedia.com/-DlSKbdYluO0QSRHGgJw1JL6a1FC_TgkefUSA2VJr1o.jpg'
    $scope.title = 'Puppys first time'

    $scope.gridView = function () {
      console.log('grid click')
      grid.display();
    }

  }])
