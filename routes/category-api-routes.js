const db = require("../models");

module.exports = function (app) {
    app.get("/api/categories/:category?", (req, res) => {
        db.Categories.findAll({
            where: {
                routeName: req.params.category
            },
            include: [db.Review]
        }).then(categories => {
            res.json(categories);
        });
    });

    app.post("/api/categories", (req, res) => {
        db.Categories.create({
            name: req.body.name
        }).then(newCat => {
            res.json(newCat);
        });
    });

};