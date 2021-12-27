const { Product } = require("../../models");

const updateActive = async (req, res, next) => {
    const { id } = req.params;
    const { active } = req.body;
    const updateProduct = await Product.findByIdAndUpdate(id, { active }, { new: true });
    if (!updateProduct) {
        throw new NotFound();
    }
    res.json(updateProduct);
}

module.exports = updateActive;