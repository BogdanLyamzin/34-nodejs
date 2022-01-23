const {Product} = require("../../models");

const getAll = async(req, res, next)=> {
    try{
        const {page = 1, limit = 10} = req.query;
        const {_id} = req.user;
        const skip = (page - 1) * limit;
        const products = await Product.find({owner: _id}, 
            "-createdAt -updatedAt", {skip, limit: +limit});
        res.json(products);
    }
    catch(error){
        next(error);
    }
}

module.exports = getAll;