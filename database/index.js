var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'holacode',
  database: 'MonkeyDB'
});
//I should not be able to change th master master
// connection.connect();
// var Users = {
//   type : 1,
//   user_name: "Pancho",
//   email: "PanchoLOCO@Poblanos.com",
//   password: "Macaque1!"
// };

const selectAll = function(cb) {
  connection.query("SELECT * FROM Users", (err, results, fields) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const insertOne = function(type, user_name,email,password, cb) {
  connection.query(
    "INSERT INTO Users (type, user_name,email,password) VALUES (?, ?)",
    [type, user_name, email, password],
    (err, results, fields) => {
      if (err) {
        cb(err, null);
      } else {
        console.log(results);
        cb(null, results);
      }
    }
  );
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
