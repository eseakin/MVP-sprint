var express = require('express');
var request = require('request');

var cheerio = require('cheerio');

exports.scrape = function (body) {
  var $ = cheerio.load(body)

  //div.thing is the parent div
  //a.thumbnail img src is the thumbnail
  //a.title is the title
  //a.thumbnail href is link

  var results = [];
  $('div.thing').each(function(i, ele) {
    var result = {};

    result.thumb = $('a.thumbnail > img', this).attr('src');
    result.link = $('a.thumbnail', this).attr('href');
    result.title = $('a.title', this).text();

    results.push(result);

  })


  console.log('SCRAPER.SCRAPE');

  return results;
}

exports.parse = function(something) {


}