const {Product} = require("../../models");

const getAll = async(req, res)=> {
    const products = await Product.find({}, "-createdAt -updatedAt");
    res.json(products);
}

module.exports = getAll;