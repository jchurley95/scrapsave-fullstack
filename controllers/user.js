const express = require('express');
const User = require('../models/user');
const router = express.Router();
const Project = require('../models/project');

router.get("/", (req,res) => {
  User.find().then(users => {
    res.json(users);
  })
});

router.get("/:id", (req,res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  });
});

router.post("/:id/project", (req,res) => {
  User.findById(req.params.id)
    .then((user) => {
      console.log(req.body);
      const newProject = new Project(req.body);
      console.log("New Project is: " + newProject);
      user.projects.push(newProject);
      user.save();
    })
})

module.exports = router;