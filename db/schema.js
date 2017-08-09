var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

const pieceSchema = new Schema({
    name: String,
    height: Number,
    width: Number,
    length: Number
})

const sectionSchema = new Schema ({
    name: String,
    pieces: [pieceSchema]
})

const projectSchema = new Schema({
    name: String,
    imageURL: String,
    sections: [sectionSchema]
});

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    company: String,
    projects: [projectSchema]
});

// gameSchema.pre('save', function(next){
//     const emptyBoard = [
//         false, false, false, false, false, false,
//         false, false, false, false, false, false,
//         false, false, false, false, false, false,
//         false, false, false, false, false, false,
//         false, false, false, false, false, false,
//     ];
//     this.board = emptyBoard;
//     next();
// });

const Piece = mongoose.model('Piece', pieceSchema);
const Section = mongoose.model('Section', sectionSchema);
const Project = mongoose.model('Project', projectSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    Piece: Piece,
    Section: Section,
    Project: Project,
    User: User
};