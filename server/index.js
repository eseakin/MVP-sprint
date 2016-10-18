var express = require('express');
var request = require('request');
var scraper = require('./scraper');
var app = express();
app.use(express.static('client'));

var dataStorage;

app.get('/scrape', function(req, res) {

  if (!dataStorage){
    request('https://www.reddit.com/r/aww', function (error, response, body) {
      console.log('reddit data requested')
      if (!error && response.statusCode == 200) {

        var results = scraper.scrape(body)
        dataStorage = results;

        res.send(results)
      } else if (error) {
        console.log(error);
      }
    });
  } else {
    console.log('dataStorage exists')
    res.send(dataStorage);
  }
});

app.get('/', function(req, res) {
  res.send('index.html')
})


app.listen(8000, function() {
  console.log('listening on 8000')
})


exports = module.exports = app;