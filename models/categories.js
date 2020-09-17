module.exports = function(sequelize, DataTypes) {
  const Categories = sequelize.define("Categories", {
    name: DataTypes.STRING
  });

  Categories.associate = function(models) {
    Categories.belongsToMany(models.Restaurant, {
      through: "RestaurantCatagories"
    });
  };

  return Categories;
};