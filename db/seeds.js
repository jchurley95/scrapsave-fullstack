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

// USER: JCHurley95
            //SECTION 1 TABLE TOP PIECES
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
        // SECTION 1 TABLE TOP
        const tableTopSection = new Section ({
            name: 'Table Top',
            pieces: [tableTopPiece1, tableTopPiece2, tableTopPiece3]
        });
            // SECTION 2 TABLE LEGS PIECES
            const tableLegPiece1 = new Piece ({
                name: 'Table Legs 1',
                height: 1,
                width: 6,
                length: 56
            });
            const tableLegPiece2 = new Piece ({
                name: 'Table Legs 2',
                height: 1,
                width: 6,
                length: 56
            });
            const tableLegPiece3 = new Piece ({
                name: 'Table Legs 3',
                height: 1,
                width: 6,
                length: 56
            });
            const tableLegPiece4 = new Piece ({
                name: 'Table Legs 3',
                height: 1,
                width: 6,
                length: 56
            });
        // SECTION 2 TABLE LEGS
        const tableLegsSection = new Section ({
            name: 'Table Legs',
            pieces: [tableLegPiece1, tableLegPiece2, tableLegPiece3, tableLegPiece4]
        });
    const outdoorTableProject = new Project ({
        name: 'Outdoor Table',
        imageURL: './images/outdoorTable', // Edit once the real image is in the images file
        sections: [tableLegsSection, tableTopSection],
        projectList: [12, 24, 24, 24, 24, 24, 45, 34, 45],
        stockLength: 10
    });
            // SECTION 1 CHAIR SEAT PIECES
            const chairSeatPiece1 = new Piece ({
                name: 'Chair Seat 1',
                height: 1,
                width: 6,
                length: 20
            });
            const chairSeatPiece2 = new Piece ({
                name: 'Chair Seat 2',
                height: 1,
                width: 6,
                length: 20
            });
            const chairSeatPiece3 = new Piece ({
                name: 'Chair Seat 3',
                height: 1,
                width: 6,
                length: 24
            });
            const chairSeatPiece4 = new Piece ({
                name: 'Cheat Seat 4',
                height: 1,
                width: 6,
                length: 24
            });
        // SECTION 1 CHAIR SEAT
        const chairSeatSection = new Section ({
            name: 'Chair Seat',
            pieces: [chairSeatPiece1, chairSeatPiece2, chairSeatPiece3]
        });
    // PROJECT 2 OUTDOOR CHAIR
    const outdoorChairProject = new Project ({
        name: 'Outdoor Chair',
        imageURL: './images/outdoorTable', // Edit once the real image is in the images file
        sections: [chairSeatSection],
        stockLength: 10,
        projectList: [12, 24, 24, 24, 24, 24, 45, 34, 45]
    });
    //END JCHurley95 Project 2
const JHurleyUser = new User ({
    firstName: "Joey",
    lastName: "Hurley",	
    username: 'JCHurley95',
    company: 'ScrewLooseCarpentry',
    projects: [outdoorTableProject, outdoorChairProject]
});
// END User: JCHurley95


chairSeatPiece1.save().then(() => console.log("chairSeatPiece1 Saved!"));
chairSeatPiece2.save().then(() => console.log("chairSeatPiece2 Saved!"));
chairSeatPiece3.save().then(() => console.log("chairSeatPiece3 Saved!"));
chairSeatPiece4.save().then(() => console.log("chairSeatPiece4 Saved!"));
chairSeatSection.save().then(() => console.log("chairSeatSection Saved!"));
outdoorChairProject.save().then(() => console.log("outdoorChairProject Saved!"));

tableLegPiece1.save().then(() => console.log("tableLegPiece1 Saved!"));
tableLegPiece2.save().then(() => console.log("tableLegPiece2 Saved!"));
tableLegPiece3.save().then(() => console.log("tableLegPiece3 Saved!"));
tableLegPiece4.save().then(() => console.log("tableLegPiece4 Saved!"));
tableLegsSection.save().then(() => console.log("tableLegsSection Saved!"));
tableTopPiece1.save().then(() => console.log("tableTopPiece1 Saved!"));
tableTopPiece2.save().then(() => console.log("tableTopPiece2 Saved!"));
tableTopPiece3.save().then(() => console.log("tableTopPiece3 Saved!"));
tableTopSection.save().then(() => console.log("tableTopSection Saved!"));
outdoorTableProject.save().then(() => console.log("outdoorTableProject Saved!"));

JHurleyUser.save().then(() => console.log("JHurleyUser Saved!"));

// USER: RonSwanson
            //SECTION 1 TABLE TOP PIECES
            const tableTopPiece_1 = new Piece ({
                name: 'Table Top 1',
                height: 1,
                width: 6,
                length: 36
            });
            const tableTopPiece_2 = new Piece ({
                name: 'Table Top 2',
                height: 1,
                width: 6,
                length: 36
            });
            const tableTopPiece_3 = new Piece ({
                name: 'Table Top 3',
                height: 1,
                width: 6,
                length: 36
            });
        // SECTION 1 TABLE TOP
        const tableTopSection_ = new Section ({
            name: 'Table Top',
            pieces: [tableTopPiece_1, tableTopPiece_2, tableTopPiece_3]
        });
            // SECTION 2 TABLE LEGS PIECES
            const tableLegPiece_1 = new Piece ({
                name: 'Table Legs 1',
                height: 1,
                width: 6,
                length: 56
            });
            const tableLegPiece_2 = new Piece ({
                name: 'Table Legs 2',
                height: 1,
                width: 6,
                length: 56
            });
            const tableLegPiece_3 = new Piece ({
                name: 'Table Legs 3',
                height: 1,
                width: 6,
                length: 56
            });
            const tableLegPiece_4 = new Piece ({
                name: 'Table Legs 3',
                height: 1,
                width: 6,
                length: 56
            });
        // SECTION 2 TABLE LEGS
        const tableLegsSection_ = new Section ({
            name: 'Table Legs',
            pieces: [tableLegPiece_1, tableLegPiece_2, tableLegPiece_3, tableLegPiece_4]
        });
    const outdoorTableProject_ = new Project ({
        name: 'Outdoor Table',
        imageURL: './images/outdoorTable', // Edit once the real image is in the images file
        sections: [tableTopSection_, tableLegsSection_],
        projectList: [12, 24, 24, 24, 24, 24, 45, 34, 45],
        stockLength: 10
    
    });
    // END RonSwanson Project 1

const RonSwansonUser = new User ({
    firstName: "Ron",
    lastName: "Swanson",	
    username: 'RonSwanson',
    company: 'ReallyGoodWoodShop',
    projects: [outdoorTableProject_]
});
// END User: RonSwanson


tableLegPiece_1.save().then(() => console.log("tableLegPiece_1 Saved!"));
tableLegPiece_2.save().then(() => console.log("tableLegPiece_2 Saved!"));
tableLegPiece_3.save().then(() => console.log("tableLegPiece_3 Saved!"));
tableLegPiece_4.save().then(() => console.log("tableLegPiece_4 Saved!"));
tableLegsSection_.save().then(() => console.log("tableLegsSection_ Saved!"));
tableTopPiece_1.save().then(() => console.log("tableTopPiece_1 Saved!"));
tableTopPiece_2.save().then(() => console.log("tableTopPiece_2 Saved!"));
tableTopPiece_3.save().then(() => console.log("tableTopPiece_3 Saved!"));
tableTopSection_.save().then(() => console.log("tableTopSection_ Saved!"));
outdoorTableProject_.save().then(() => console.log("outdoorTableProject_ Saved!"));

RonSwansonUser.save().then(() => console.log("RonSwanson Saved!"));


mongoose.connection.close();