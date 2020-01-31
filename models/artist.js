module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    name: DataTypes.STRING,
    specialization: DataTypes.STRING,
    gender: DataTypes.STRING,
    price: DataTypes.INTEGER,
    location: DataTypes.STRING,
    socialMedia: DataTypes.STRING
  });
  
  return Artist;
};
