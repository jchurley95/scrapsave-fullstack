const express = require('express');
const User = require('../models/user');
const Project = require('../models/project');
const router = express.Router();

router.get("/", (req,res) => {
  Project.find().then(project => {
    res.json(project);
  })
});

router.get("/:id", (req,res) => {
  Project.findById(req.params.id).then((project) => {
    res.json(project);
  });
});

module.exports = router;