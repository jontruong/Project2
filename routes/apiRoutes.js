var db = require("../models");

module.exports = function(app) {
  // Get all artists
  app.get("/api/artists/", function(req, res) {
    db.Artist.findAll({}).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  app.get("/api/artists/:specialization", function(req, res) {
    db.Artist.findAll({
      where: 
      { 
        specialization: req.params.specialization 
      } 
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  app.get("/api/artists/:gender", function(req, res) {
    db.Artist.findAll({
      where: { 
        gender: req.params.gender 
      } }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  app.get("/api/artists/:location", function(req, res) {
    db.Artist.findAll({where: { spec: req.params.location } }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  app.get("/api/artists/:price", function(req, res) {
    db.Artist.findAll({where: { spec: req.params.price } }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  app.get("/api/artists/:id", function(req, res) {
    db.Artist.findOne({where: { spec: req.params.id } }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  // Create a new artist
  app.post("/api/artists", function(req, res) {
    db.Artist.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    specialization: req.body.specialization,
    gender: req.body.gender,
    price: req.body.price,
    location: req.body.location,
    socialMedia: req.body.socialMedia
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  
  app.post("/api/post", function(req, res) {
    db.Post.create({
    body: req.body.body,
    
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  // Delete an example by id
  app.delete("/api/artists/:id", function(req, res) {
    db.Artist.destroy({ where: { spec: req.params.id } }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });
};
