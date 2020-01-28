module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    Name: DataTypes.STRING,
    Specialization: DataTypes.STRING,
    Gender: DataTypes.STRING,
    Price: DataTypes.INTEGER,
    Location: DataTypes.STRING,
    SocialMedia: DataTypes.STRING
  });
  
  return Artist;
};
