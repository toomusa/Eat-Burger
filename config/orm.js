const connection = require("./connection.js");

const orm = {
    homePage: (req, res) => {
        res.render("index")
    },
    selectAll: async (req, res) => {
        await connection.query("SELECT * FROM burgers ORDER BY id DESC", (err, data) => {
            if (err) throw err;
            let burgers = [];
            let newItems = [];
            let eatenItems = [];
            let leftSectionHeader = "Try a New Burger!";
            let rightSectionHeader = "Already Eaten!";
            let col1 = "Item #";
            let col2 = "Burger Name";
            let col3 = "Devoured?";
            data.forEach(item => {
                burgers.push({
                    Item: item.id,
                    Burger: item.burger_name,
                    Devoured: (item.devoured === 0) ? "nope" : "oh yeah!"
                })
                if (item.devoured === 0) {
                    newItems.push({
                        Item: item.id,
                        Burger: item.burger_name,
                    })
                }
                if (item.devoured !== 0) {
                    eatenItems.push({
                        Item: item.id,
                        Burger: item.burger_name,
                    })
                }
            })
            burgers.sort((a, b) => (a.Item > b.Item) ? 1 : -1);
            res.render("index", {burgers, newItems, eatenItems, leftSectionHeader, rightSectionHeader, col1, col2, col3})
        })
    },
    insertOne: async (req, res) => {
        let newBurger = req.body.burger;
        await connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)", [newBurger], (err, data) => {
            if (err) throw err;
        })
        res.redirect("/select")
    },
    updateOne: async (req, res) => {
        let burgerId = req.params.id
        await connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [burgerId], (err, data) => {
            if (err) throw err;
        })
        res.redirect("/select")
    }
};

module.exports = orm;