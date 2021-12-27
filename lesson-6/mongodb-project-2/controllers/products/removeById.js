const { Product } = require("../../models");

const removeById = async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndRemove(id, "-createdAt -updatedAt");
    if (!deleteProduct) {
        throw new NotFound();
    }
    res.json({ message: "product delete" })
}

module.exports = removeById;