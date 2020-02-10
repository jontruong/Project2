module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    about: DataTypes.STRING,
    specialization: DataTypes.STRING,
    gender: DataTypes.STRING,
    price: DataTypes.STRING,
    location: DataTypes.STRING,
    socialMedia: DataTypes.STRING
  });
  
return Artist;

  };







