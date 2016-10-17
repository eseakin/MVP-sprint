var express = require('express');
var request = require('request');
var scraper = require('./scraper');
var app = express();

app.get('/scrape', function(req, res) {
  request('https://www.reddit.com/r/aww', function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var results = scraper.scrape(body)

      results = parse(results);

      res.send(results)
    } else if (error) {
      console.log(error);
    }
  });
});

app.get('/', function(req, res) {
  res.send('success')
})


app.listen(8000, function() {
  console.log('listening on 8000')
})


var parse = function (list) {
  var results = "";

  list.forEach(function(ele, i) {
    var html = "<div><a style='display:block' href="+ele.link+">"+ele.title+"</a><img style='width:200px; height:auto;display:block' src="+ele.thumb+" /></div>";

    results += html;
  });

  return results;
}


exports = module.exports = app;