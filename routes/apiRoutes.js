var db = require("../models");

module.exports = function(app) {
  // Get all artists
  app.get("/api/artists/", function(req, res) {
    db.Artist.findAll({}).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  // Create a new artist
  app.post("/api/artists", function(req, res) {
    db.Artist.create({
    name: req.body.title,
    specialization: req.body.specialization,
    gender: req.body.gender,
    price: req.body.price,
    location: req.body.location,
    socialMedia: req.body.socialMedia
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  // Delete an example by id
  app.delete("/api/artists/:id", function(req, res) {
    db.Artist.destroy({ where: { id: req.params.id } }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });
};
