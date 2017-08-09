var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

const pieceSchema = new Schema({
    name: String,
    height: Number,
    width: Number,
    length: Number,
    created_at: Date,
    updated_at: Date
})

const sectionSchema = new Schema ({
    name: String,
    pieces: [pieceSchema],
    created_at: Date,
    updated_at: Date
})

const projectSchema = new Schema({
    name: String,
    imageURL: String,
    sections: [sectionSchema],
    created_at: Date,
    updated_at: Date
});

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    company: String,
    projects: [projectSchema],
    created_at: Date,
    updated_at: Date
});

pieceSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});
sectionSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});
projectSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});
userSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

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