module.exports = function(sequelize, DataTypes) {
  const Categories = sequelize.define("Categories", {
    name: DataTypes.STRING
  });

  Categories.associate = function(models) {
    Categories.hasMany(models.Restaurant);
  };

  return Categories;
};