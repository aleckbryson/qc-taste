const db = require("../models");

module.exports = function (app) {
  app.get("/api/restaurants", (req, res) => {
    db.Restaurant.findAll({ include: [db.Review] })
      .then(restaurants => {
        res.json(restaurants);
      });
  });

  app.get("/api/restaurants/:id", (req, res) => {
    db.Restaurant.findOne({
      where: { id: req.params.id },
      include: [db.Review]
    })
      .then(restaurant => {
        res.json(restaurant);
      });
  });

  app.post("/api/restaurants", (req, res) => {
    db.Restaurant.create({
      // UserId: req.user.id,
      UserId: 1,
      name: req.body.name
    }).then(newRestaurant => {
      res.json(newRestaurant);
    });
  });
};