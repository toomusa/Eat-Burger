const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "zdqrc0judbp33866",
  password: "h4qudtk2s1d3gbo6",
  database: "sy3pgm26675ss6c4"
})

// let connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: process.env.SQLPASS,
//     database: "burgers_db"
// })

module.exports = connection;
