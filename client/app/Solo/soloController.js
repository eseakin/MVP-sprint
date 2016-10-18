angular.module('soloController', ['ngRoute'])
  .factory('solo', function() {

    var display = function() {
      console.log('solo display')
      return 5;
    }

    return {
      display: display,
    }
  })
  .controller('soloController', ['$scope', 'solo', function ($scope, solo) {
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

    $scope.link = 'http://i.imgur.com/ZgQ8ZbK.jpg';
    $scope.thumb = 'http://i.imgur.com/ZgQ8ZbK.jpg'
    $scope.title = 'Moments before attacking my phone'

    this.hoverEdit = false;
    this.imgVis = true;

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
      this.imgVis = false;
    }

    $scope.next = function () {
      console.log('next');
      this.hoverEdit = false;
      this.imgVis = false;
    }
  }])
