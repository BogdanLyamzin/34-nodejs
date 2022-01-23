const {NotFound} = require("http-errors");

const {Product} = require("../../models");

const getById = async (req, res, next)=> {
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        if(!product){
            throw new NotFound();
        }
        res.json(product);
    }
    catch(error){
        if(error.message.includes("Cast to ObjectId failed")){
            error.status = 404;
        }
        next(error);
    }
}

module.exports = getById;