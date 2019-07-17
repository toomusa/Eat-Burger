const connection = require("./connection.js");

const orm = {
    homePage: (req, res) => {
        res.render("index", {title: "Burgers"});
    },
    selectAll: (req, res) => {
        console.log("Select All Route");
    },
    insertOne: (req, res) => {
        console.log("Insert One Route");
    },
    updateOne: (req, res) => {
        console.log("Update One Route");
    }
};

module.exports = orm;