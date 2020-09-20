var db = require("../models");

module.exports = function(app) {
  app.get("/api/restaurants/:id/reviews", function(req, res) {
    db.Review.findAll({ where: { RestaurantId: req.params.id }}).then(data => {
      res.json(data)
    }).catch(err => {
      console.log(err)
    })
  });

  app.post("/api/restaurants/:id/reviews", function(req, res) {
    db.Review.create({
      UserId: req.user.id,
      //UserId: 1,
      RestaurantId: req.params.id,
      body: req.body.body,
    }).then(function(newReview) {
      res.json(newReview);
    });
  });

  app.delete("/api/reviews/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
