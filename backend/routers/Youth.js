const express = require("express");
const router = express.Router();
const { Youth } = require("../models");


router.post("/", async (req, res) => {
    const youth = req.body;
    await Youth.create(youth);
    res.json(youth);
  });

  module.exports = router
