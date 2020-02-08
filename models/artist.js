module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    about: DataTypes.STRING,
    pic1: DataTypes.STRING,
    pic2: DataTypes.STRING,
    pic3: DataTypes.STRING,
    specialization: DataTypes.STRING,
    gender: DataTypes.STRING,
    price: DataTypes.INTEGER,
    location: DataTypes.STRING,
    socialMedia: DataTypes.STRING
  });
  
return Artist;

  };







