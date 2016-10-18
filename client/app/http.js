angular.module('httpMod', ['ngRoute'])
  .factory('httpFact', function($http) {

    favorites = [];

    var fav = function (ele) {
      favorites.push(ele);
      console.log('http fav', favorites)

    }


    data = null;

    var getData = function(cb) {
      // console.log('httpFact.getData')
      $http({
        method: 'GET',
        url: '/scrape',
      }).then(function successCallback(response) {
        data = dataParse(response.data);
        // console.log('httpFact got data', data)
        cb(data);

      }, function errorCallback(response) {
        console.log('error', response)
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      })
    }

    var dataParse = function(data) {
      var results = [];

      data.forEach(function(ele, i) {

//===============LINK CLEANUP==============
        var link = ele.link;
        if (link[link.length - 1] === '/') {
          return;
        }

        var split = link.split('.');
        var ending = split[split.length - 1];
        // console.log('link ending',ending)

        if (ending !== 'jpg' && ending !== 'gifv' && ending !== 'gif') {
          ele.link += '.jpg';
          ele.solo = ele.link;
        }

        if (ending === 'gifv' || ending === 'gif') {
          ele.solo = ele.thumb; 
        } else if (ending === 'jpg' || ending === 'png') {
          // console.log('ending jpg')
          ele.solo = ele.link;
        } else {
          if (!ele.solo) {
            ele.solo = ele.thumb;
          }
        }

//===============TITLE CLEANUP==============
        if (ele.title.length > 35) {
          ele.title = ele.title.slice(0, 35);
          ele.title += '...';
        }

        results.push(ele)

      });

      return results;
    }

    return {
      getData: getData,
      data: data,
      fav: fav,
      favorites: favorites
    }
  })




















