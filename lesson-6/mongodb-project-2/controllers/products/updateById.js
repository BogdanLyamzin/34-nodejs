const { Product } = require("../../models");

const updateById = async (req, res, next) => {
    const { id } = req.params;
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updateProduct) {
        throw new NotFound();
    }
    res.json(updateProduct);
}

module.exports = updateById;