var express = require('express');
var app = express();

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');


app.use('/findToy', (req,res) => {
  var query = {};
  if (req.query.id){
    query.id = req.query.id;
  }

  if (Object.keys(query).length != 0) {
    Toy.findOne( query, (err, toys) => {
      if (!err)
        if (toys){
          res.json(toys);
        }
        else{
          res.json({});          
        }

      else {
        console.log(err)
        res.json({});
      }
    });
  }
  else {
    res.json({}); // empty query
  }
});

app.use('/', (req, res) => {
	res.json({ msg : 'It works!' });
});


app.listen(3000, () => {
	console.log('Listening on port 3000');
});





// Please do not delete the following line; we need it for testing!
module.exports = app;
