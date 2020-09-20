const db = require("../models");
const restaurantApiRoutes = require("./restaurant-api-routes");

module.exports = function (app) {
    app.get("/api/categories/:id", (req, res) => {
        db.Category.findAll({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: db.Restaurant,
                    include: [
                        {
                            model: db.Review,
                            include: [db.User]
                        }
                    ]
                }
            ]
        }).then(categories => {
            res.json(categories);
        });
    });

    app.post("/api/categories", (req, res) => {
        db.Category.create({
            name: req.body.name
        }).then(newCat => {
            res.json(newCat);
        });
    });

};