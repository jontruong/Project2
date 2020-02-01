var db = require("../models");

var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/profile.html"));
  });

  app.get("/appointments", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/appointments.html"));
  });

  app.get("/searchResults", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/searchResults.html"));
  });

  // If no matching route is found default to home
  app.use(function(req,res){
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  })
};