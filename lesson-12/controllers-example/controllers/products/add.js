const {BadRequest} = require("http-errors");

const {Product, joiSchema} = require("../../models/product")

const add = async(req, res, next)=> {
    try {
        const {error} = joiSchema.validate(req.body);
        if(error){
            throw new BadRequest(error.message);
        }
        const {_id} = req.user;
        const newProduct = await Product.create({...req.body, owner: _id});
        res.status(201).json(newProduct);
    } catch (error) {
        if(error.message.includes("validation failed")){
            error.status = 400;
        }
        next(error);
    }
}

module.exports = add;