const express = require("express");
const router = express.Router();
const burgers = require("../models/burgers.js");

router.use("/", burgers);

module.exports = router;
