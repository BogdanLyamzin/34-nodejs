const {BadRequest} = require("http-errors");

const { Product } = require("../../models");

const add = async (req, res) => {
    const { error } = joiSchema.validate(req.body);
    if (error) {
        throw new BadRequest(error.message);
    }
    const newProduct = await Product.create(req.body, "-createdAt -updatedAt");
    res.status(201).json(newProduct);
}

module.exports = add;