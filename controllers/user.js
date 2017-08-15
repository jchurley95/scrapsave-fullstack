const express = require('express');
const User = require('../models/user');
const router = express.Router();
const Project = require('../models/project');
const Section = require('../models/section');
const Piece = require('../models/piece');


//INDEX OF ALL USERS/PROJECTS
router.get("/", (req, res) => {
  User.find().then(users => {
    res.json(users);
  })
});

//SHOW PUBLIC VERSION OF THIS USER'S PROJECT
// GET /:id
router.get("/:id/public", (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  });
});

//SHOW ALL OF THIS USER'S PROJECTS
// GET /:id
router.get("/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  });
});

//CREATE A NEW PROJECT FOR THIS USER
// POST /new
router.post("/:userId/project", (req, res) => {
  const userIdToUpdate = req.params.userId;
  User.findById(userIdToUpdate)
    .then((user) => {
      console.log(req.body);
      const newProject = new Project(req.body);
      console.log("New Project is: " + newProject);
      user.projects.push(newProject);
      user.save();
      
    })
})

//CREATE A NEW SECTION FOR THIS PROJECT FOR THIS USER
// POST /new
router.post("/:userId/project/:projectId/section", (req, res) => {
  const userIdToUpdate = req.params.userId;
  const projectIdToUpdate = req.params.projectId;
  Project.findById(projectIdToUpdate)
    .then((project) => {
      console.log(req.body);
      const newSection = new Section(req.body);
      console.log("New Section is: " + newSection);
      project.sections.push(newSection);
      project.save();
    })
})

//CREATE A NEW PIECE FOR THIS SECTION FOR THIS PROJECT FOR THIS USER
// POST /new
router.post("/:userId/project/:projectId/section/:sectionId/piece", (req, res) => {
  const userIdToUpdate = req.params.userId;
  const projectIdToUpdate = req.params.projectId;
  const sectionIdToUpdate = req.params.sectionId;
  Section.findById(sectionIdToUpdate)
    .then((section) => {
      console.log(req.body);
      const newPiece = new Piece(req.body);
      console.log("New Piece is: " + newPiece);
      section.pieces.push(newPiece);
      section.save();
    })
})

//UPDATE USER PROJECT
// PUT/PATCH /:id
router.put('/:userId/project/:projectId', (req, res) => {
  const userIdToUpdate = req.params.userId;
  const projectIdToUpdate = req.params.projectId;
  const infoToUpdate = req.body;
  Project.findByIdAndUpdate(projectIdToUpdate, infoToUpdate)
    .then((user) => {
      res.send("Updated Successfully");
    })
    .catch((error) => {
      console.log(`Project with ID of ${projectIdToUpdate} failed to update!`)
      console.log(error);
    })
})

//EDIT USER's PROJECT
// GET /:id/edit
router.get('/:userId/project/:projectId'), (req, res) => {
  Project.findById(req.params.projectId).then((project) => {
    res.json(project);
  });
}

//EDIT USER's PROJECT SECTION
// GET /:id/edit
router.get('/:userId/project/:projectId/section/:sectionId'), (req, res) => {
  Section.findById(req.params.sectionId).then((section) => {
    res.json(section);
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

router.delete("/:userId/project/:projectId", (req, res) => {
  console.log(req.params);
  Project.find()
  // Project.findByIdAndRemove(req.params.projectId)
  User.findById(req.params.userId).then(user => {
    const newProjects = user.projects.filter(project => {
      return project.id !== req.params.projectId
    });
    console.log(newProjects);
    user.projects = newProjects;
    return user.save();
  })
  .then((project) => {
    console.log(project);
    res.send("Successfully Deleted");
  })
  .catch(err => console.log(err))
})



module.exports = router;