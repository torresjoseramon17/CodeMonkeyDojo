var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Asus1!',
  database: 'MonkeyDB'
});

connection.connect();

var Users = {
  type : 1,
  user_name: "Pancho",
  email: "PanchoLOCO@Poblanos.com",
  password: "Macaque1!"
};
