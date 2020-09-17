// Creating our Review model
module.exports = function(sequelize, DataTypes) {
  const Restaurant = sequelize.define("Restaurant", {
    name: DataTypes.STRING
  });

  Restaurant.associate = function(models) {
    Restaurant.belongsTo(models.User);
    Restaurant.hasMany(models.Review);
    Restaurant.hasOne(models.Categories)
  };

  return Restaurant;
};
