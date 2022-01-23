const {Product} = require("../../models");

const search = async(req, res, next)=> {
    try {
        const {price, name} = req.query; // {name, price}
        const result = await Product.find({price, name});
        res.json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = search;