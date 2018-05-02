var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const express = require('express')
const cors = require('cors') // Esto es por seguridad para evitar inserciones de codigo o datos
const app = express()

app.use(cors())

app.get('/data', (req, res) => {

  // Get the data from mongoDB
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("terrorismDB");
    var d = new Date();
    var query = {  };
    const data = [];

    dbo.collection("data").aggregate([{$group:{ _id : "$imonth", count:{$sum:1}}}]).toArray(function(err, result) {  //.find(query).toArray(function(err, result) {
      
      if (err) throw err;
        for (let i = 0; i < result.length; i++) {
          
          var mes = result[i]._id
          var numAttacks = result[i].count
          
          data.push([`Mes ${mes}`, numAttacks]);
        }
        db.close();
        res.send(data)
        
    });

  });

  

})

app.get('/*', (req, res) => res.send('To get de data go to /data'))


app.listen(3000, () => console.log('App listening on port 3000!'))