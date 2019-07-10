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

// alternative: (no need for var query)
//     var toyId = req.query.id;
//     Toy.findOne({id:toyId} , (err, toy) => {
//      ... ...

app.use('/findAnimals', (req, res) =>{

    var query = {};
    if(req.query.species){
        query.species = req.query.species;
    }
    if(req.query.gender){
        query.gender = req.query.gender;
    }
    if(req.query.trait){
        query.traits= req.query.trait;
    }

    if(Object.keys(query).length == 0 ){
        res.type('html').status(200);
        res.json({});
    }
    else{
      Animal.find(query, (err, animals) =>{
        if(err){
            res.type('html').status(500);
            res.json('Error: '+err);
        }
        else if(animals.length==0){
            res.type('html').status(200);
            res.json({});
        }
        else{
            var animalList = [];
            for(i = 0; i < animals.length; i++){
                var animal = {};
                animal.name = animals[i].name;
                animal.species = animals[i].species;
                animal.breed = animals[i].breed;
                animal.gender = animals[i].gender;
                animal.age = animals[i].age;
                animalList.push(animal);
            }
            res.json(animalList);

        }

      });
    }

});

app.use('/animalsYoungerThan', (req,res) =>{

  var query = {};
  if (req.query.age){
    query.age = { $lt: req.query.age };
  }

  if(Object.keys(query).length == 0 ){
      res.type('html').status(200);
      res.json({});
  }
  else{
    Animal.find(query, (err, animals) =>{
      if(err){
          res.type('html').status(500);
          res.json('Error: '+err);
      }

      else if(animals.length==0){
        var retVal = {};
        retVal.count = 0;
        res.json(retVal);
      }
      else{
          var retVal = {};
          var nameArray = [];
          for(var i = 0; i < animals.length; i++){
            var currentName = animals[i].name;
            nameArray.push(currentName);
          }
          retVal.count = animals.length;
          retVal.names = nameArray;
          res.json(retVal);

      }
    });
  }


});


app.use('/calculatePrice', (req,res) =>{

  var ids =  []
  ids = req.query.id;
  var qtyArray = []
  qtyArray = req.query.qty;

  if(Object.keys(req.query).length==0){
    res.type('html').status(200);
    res.json({});
  }
  else  if(ids.length != qtyArray.length){
    res.type('html').status(200);
    res.json({});
  }
  else {
    var query = {id: {$in: ids}};

    Toy.find(query, (err, toys) =>{
      if(err){
          res.type('html').status(500);
          res.json('Error: '+err);
      }

      else if(toys.length==0){
        var retVal = {};
        retVal.totalPrice = 0;
        retVal.items = [];
        res.json(retVal);
      }

      else{
          var retVal = {};
          var price = 0;
          var itemsArray = [];

          // TODO simplify!
          var simplifiedIds = ids;
          var simplifiedQty = qtyArray;

          // for each id in simplifiedIds
          // get the toy
          var numberSimple = simplifiedIds.length;
          var numberFound = toys.length;

          for(var i = 0; i < numberSimple; i++){
            var currentId = simplifiedIds[i];
            // check all toys in result of query
            for (var j = 0; j < numberFound; j++){
              // TODO check NaN!
              if (currentId == toys[j].id){
                var currentItem = {};
                var itemQty = simplifiedQty[i];
                currentItem.item = currentId;
                currentItem.qty = itemQty;
                // get subtotal = price * quantity
                var itemPrice = toys[j].price;
                var subtotal = itemPrice * itemQty;
                currentItem.subtotal = subtotal;

                itemsArray.push(currentItem);

                price += subtotal;
              }
            }
          }

          retVal.totalPrice = price;
          retVal.items = itemsArray;
          res.json(retVal);

      }
    });
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
