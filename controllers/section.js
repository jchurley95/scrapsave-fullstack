const express = require('express');
const Section = require('../models/section');
const router = express.Router();

router.get("/", (req,res) => {
  Section.find().then(sections => {
    res.json(sections);
  })
});

router.get("/:id", (req,res) => {
  Section.findById(req.params.id).then((sections) => {
    res.json(section);
  });
});

module.exports = router;