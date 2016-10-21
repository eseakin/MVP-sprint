var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected');
});

var dataSchema = mongoose.Schema({
  thumb: String,
  link: String,
  Title: String,
  time: Number
});

var Data = mongoose.model('Data', dataSchema);

var saveData = function(dataList) {
  if (err) return console.error(err);

  dataList.forEach(function(ele, i) {
    ele.time = new Date();
    var item = new Data(ele);

    item.save(function(err, item) {
      console.log('item saved', item);
    });
  })
}

var removeItem = function(id) {
  Data.find({_id: id}).remove().exec();
}

var pullData = function() {
  Data.find({}).sort('time').exec(function(err, data) {
    if (err) return console.error(err);

    console.log(data);
  })
}



