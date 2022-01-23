const {NotFound} = require("http-errors");

const {Product} = require("../../models");

const removeById = async(req, res, next)=> {
    try {
        const {id} = req.params;
        const deleteProduct = await Product.findByIdAndRemove(id);
        if(!deleteProduct){
            throw new NotFound();
        }
        res.json({message: "product delete"})
    } catch (error) {
        next(error);
    }
}

module.exports = removeById;