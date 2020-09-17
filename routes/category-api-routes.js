const db = require("../models");

module.exports = function (app) {
    app.get("api/:category?", (req, res) => {
        db.Category.findAll({
            where: {
                routeName: req.params.category
            },
            include: [db.Review]
        }).then(categories => {
            res.json(categories);
        });
    });
};