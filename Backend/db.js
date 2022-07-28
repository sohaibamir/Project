var mysql = require('mysql');

var con = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "sohaib15",
  database: "cryfts",
  multipleStatements: true
});
con.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });

module.exports=con;

