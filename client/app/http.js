angular.module('httpMod', ['ngRoute'])
  .factory('httpFact', function($http) {

    data = [];

    var getData = function(cb) {
      console.log('httpFact.getData')
      $http({
        method: 'GET',
        url: '/scrape',
      }).then(function successCallback(response) {
        data = response.data;
        console.log('httpFact got data', data)
        cb(data);

      }, function errorCallback(response) {
        console.log('error', response)
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      })
    }

    return {
      getData: getData,
      data: data
    }
  })