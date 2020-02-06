module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    specialization: DataTypes.STRING,
    gender: DataTypes.STRING,
    price: DataTypes.INTEGER,
    location: DataTypes.STRING,
    socialMedia: DataTypes.STRING
  });
  
  Artist.associate = function(models) {
 
    Artist.hasOne(models.Post, {
      onDelete: "cascade"
    });


  };

return Artist;

};



