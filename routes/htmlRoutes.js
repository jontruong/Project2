var db = require("../models");

var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  

  app.get("/profile/id/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/profile.html"));
  });

  app.get("/appointments", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/appointments.html"));
  });

  app.get("/searchResults", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/searchResults.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/register.html"));
  });

  app.get("/american", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/american.html"));
  });

  app.get("/japanese", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/japanese.html"));
  });

  app.get("/realism", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/realism.html"));
  });

  app.get("/watercolor", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/watercolor.html"));
  });

  app.get("/black", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/black.html"));
  });

  app.get("/tribal", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/tribal.html"));
  });

  app.get("/portrait", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/portrait.html"));
  });
  // If no matching route is found default to home
  app.use(function(req,res){
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  })
};