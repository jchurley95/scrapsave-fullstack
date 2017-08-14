const express = require('express');
const Piece = require('../models/piece');
const router = express.Router();

router.get("/", (req,res) => {
  Piece.find().then(pieces => {
    res.json(pieces);
  })
});

router.get("/:id", (req,res) => {
  Piece.findById(req.params.id).then((piece) => {
    res.json([piece]);
  });
});

module.exports = router;