var express = require('express');
var request = require('request');
var scraper = require('./scraper');
var app = express();
app.use(express.static('client'));

app.get('/scrape', function(req, res) {
  request('https://www.reddit.com/r/aww', function (error, response, body) {
    console.log('reddit data requested')
    if (!error && response.statusCode == 200) {

      var results = scraper.scrape(body)
console.log('reddit request results', results)
      // results = parse(results);

      res.send(results)
    } else if (error) {
      console.log(error);
    }
  });
});

app.get('/', function(req, res) {
  res.send('index.html')
})


app.listen(8000, function() {
  console.log('listening on 8000')
})


var parse = function (list) {
  var results = "";

  list.forEach(function(ele, i) {
    var html = "<div style='width:300px;display:inline-block;text-align:center;margin:10px'><a style='margin-bottom:5px;display:block;' href="+ele.link+">"+ele.title+"</a><img style='width:200px;height:auto;display:block;text-align:center;margin:auto' src="+ele.thumb+" /></div>";

    results += html;
  });

  return results;
}


exports = module.exports = app;