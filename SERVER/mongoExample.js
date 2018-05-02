
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("terrorismDB");
  var d = new Date();
  var query = {  };
  var data = [];
  dbo.collection("data").aggregate([{$group:{ _id : "$imonth", count:{$sum:1}}}]).toArray(function(err, result) {  //.find(query).toArray(function(err, result) {
    if (err) throw err;
    
      for (let i = 0; i < result.length; i++) {
        
        var mes = result[i]._id
        var numAttacks = result[i].count
        
        data.push([
          `Mes ${mes}`,
          numAttacks
        ]);
      }
    
      console.log(data);
      db.close();
  });
});