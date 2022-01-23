const {NotFound} = require("http-errors");

const {Product} = require("../../models");

const updateById = async(req, res, next)=> {
    try {
        const {id} = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
        if(!updateProduct){
            throw new NotFound();
        }
        res.json(updateProduct);
    } catch (error) {
        if(error.message.includes("validation failed")){
            error.status = 400;
        }
        next(error);
    }
}

module.exports = updateById;