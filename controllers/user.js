const express = require('express');
const User = require('../models/user');
const router = express.Router();
const Project = require('../models/project');


//INDEX OF ALL USERS/PROJECTS
router.get("/", (req,res) => {
  User.find().then(users => {
    res.json(users);
  })
});

//SHOW PUBLIC VERSION OF THIS USER'S PROJECT
  // GET /:id
router.get("/:id/public", (req,res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  });
});

//SHOW ALL OF THIS USER'S PROJECTS
  // GET /:id
router.get("/:id", (req,res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  });
});

//CREATE A NEW PROJECT FOR THIS USER
  // POST /new
router.post("/:id/project", (req,res) => {
  const userIdToUpdate = req.params.id;
  User.findById(userIdToUpdate)
    .then((user) => {
      console.log(req.body);
      const newProject = new Project(req.body);
      console.log("New Project is: " + newProject);
      user.projects.push(newProject);
      user.save();
    })
})

//UPDATE USER PROJECT
  // PUT/PATCH /:id
  router.put('/:userId/project/:projectId', (req, res) => {
    const userIdToUpdate = req.params.userId;
    const projectIdToUpdate = req.params.projectId;
    const infoToUpdate = req.body;
    User.findById(userIdToUpdate)
    .then((user) => {
        res.redirect(`/users/${projectIdToUpdate}`)
    })
    .catch((error) => {
        console.log(`Project with ID of ${projectIdToUpdate} failed to update!`)
        console.log(error);
    })
 })

//EDIT USER's PROJECT
  // GET /:id/edit
  router.get('./:userId/project/:projectID'), (req, res) => {
    Project.findById(req.params.projectId).then((project) => {
      res.json(project);
    });
  }

//DELETE
  // DELETE /:
  
  // router.get('/:projectId/delete', (req, res) => {
  //   const userId = req.params.userId;
  //   const projectId = req.params.projectId;
  //   var arrayOfProjects = [];
  //   User.findById(userId)
  //     .then((user) => {
  //       arrayOfProjects = user.projects;
        
  //       user.projects.id(projectId).remove();
        
  //       return user.save();
  //     })
  //   }).catch((error) => {
  //     console.log(`Failed to delete project with ID of ${projectId}`);
  //     console.log(error);
  //   });


// router.delete("/:id/project", (req,res) => {
//   User.findById(req.params.id)
//     .then((user) => {
//       console.log(req.body);
//       const newProject = new Project(req.body);
//       console.log("New Project is: " + newProject);
//       user.projects.push(newProject);
//       user.save();
//     })
// })

module.exports = router;