const { Product } = require("../../models");

const getById = async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id, "-createdAt -updatedAt");
    if (!product) {
        throw new NotFound();
    }
    res.json(product);
}

module.exports = getById;