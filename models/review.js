// Creating our Review model
module.exports = function(sequelize, DataTypes) {
  const Review = sequelize.define("Review", {
    body: DataTypes.TEXT
  });

  Review.associate = function(models) {
    Review.belongsTo(models.User);
    Review.belongsTo(models.Restaurant);
  };

  return Review;
};
