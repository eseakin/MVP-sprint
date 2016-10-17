var express = require('express');
var request = require('request');
var scraper = require('./scraper');
var app = express();

app.get('/scrape', function(req, res) {
  request('https://www.reddit.com/r/aww', function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var results = scraper.scrape(body)

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

exports = module.exports = app;