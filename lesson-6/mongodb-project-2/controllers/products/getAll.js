const {Product} = require("../../models");

const getAll = async(req, res, next)=> {
    const products = await Product.find({}, "_id name price status active code");
    res.json(products);
}

module.exports = getAll;