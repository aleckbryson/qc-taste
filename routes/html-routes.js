// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

const db = require("../models")

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }

    res.render("signup")
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login")
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {

    db.Review.findAll({
      include: [db.Restaurant, db.User]
    })
    .then(reviews => {
      console.log(reviews)
      res.render("members", { reviews: reviews})
    })
    .catch(err => {
      console.log(err)
    })


  });

  app.get("/members_post", isAuthenticated, (req, res) => {

    db.Category.findAll({
    })
    .then(categories => {
      console.log(categories)
      res.render("members_post", { categories: categories})
    })
    .catch(err => {
      console.log(err)
    })


  });

  // app.get ("/members")
};