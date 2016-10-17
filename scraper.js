var express = require('express');
var request = require('request');

var cheerio = require('cheerio');

exports.scrape = function (body) {
  var $ = cheerio.load(body)

  //div.thing is the parent div
  //a.thumbnail is the thumbnail
  //a.title is the title

  var results = [];
  $('a.title').each(function(i, ele) {
    results.push($(this).text())
  })


  console.log('SCRAPER.SCRAPE', results);
}

exports.parse = function(something) {


}