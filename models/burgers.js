const express = require("express");
const router = express.Router();
const orm = require("../config/orm.js");

router.route("/").get(orm.homePage);
router.route("/select").get(orm.selectAll);
router.route("/insert").post(orm.insertOne);
router.route("/update/:id").get(orm.updateOne);

module.exports = router;

