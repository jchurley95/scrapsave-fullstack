require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Piece = require('../models/piece');
var Section = require('../models/section');
var Project = require('../models/project');
var User = require('../models/user');

// Use native promises
mongoose.Promise = global.Promise;

Piece.remove({}, (err) => console.log(err));
Section.remove({}, (err) => console.log(err));
Project.remove({}, (err) => console.log(err));
User.remove({}, (err) => console.log(err));

const tableTopPiece1 = new Piece ({
    name: 'Table Top 1',
    height: 1,
    width: 6,
    length: 36
});
const tableTopPiece2 = new Piece ({
    name: 'Table Top 2',
    height: 1,
    width: 6,
    length: 36
});
const tableTopPiece3 = new Piece ({
    name: 'Table Top 3',
    height: 1,
    width: 6,
    length: 36
});

const tableTopSection = new Section ({
    name: 'Table Top',
    pieces: [tableTopPiece1, tableTopPiece2, tableTopPiece3]
});

const outdoorTableProject = new Project ({
    name: 'Outdoor Table',
    imageURL: './images/outdoorTable', // Edit once the real image is in the images file
    sections: [tableTopSection]
});

const JHurleyUser = new User ({
    firstName: "Joey",
    lastName: "Hurley",	
    username: 'JCHurley95',
    company: 'ScrewLooseCarpentry',
    projects: [outdoorTableProject]
});

tableTopPiece1.save().then(() => console.log("tableTopPiece1 Saved!"));
tableTopPiece2.save().then(() => console.log("tableTopPiece2 Saved!"));
tableTopPiece3.save().then(() => console.log("tableTopPiece3 Saved!"));
tableTopPiece3.save().then(() => console.log("tableTopSection Saved!"));
outdoorTableProject.save().then(() => console.log("outdoorTableProject Saved!"));
JHurleyUser.save().then(() => console.log("JHurleyUser Saved!"));

mongoose.connection.close();