const {NotFound} = require("http-errors");

const {Product} = require("../../models");

const updateActive = async(req, res, next)=> {
    try {
        const {id} = req.params;
        const {active} = req.body;
        const updateProduct = await Product.findByIdAndUpdate(id, {active}, {new: true});
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

module.exports = updateActive;