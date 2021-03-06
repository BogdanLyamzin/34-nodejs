const express = require("express");
const {NotFound, BadRequest} = require("http-errors");
const Joi = require("joi");

const {joiSchema} = require("../../models/product");
const {Product} = require("../../models");

const router = express.Router();

router.get("/", async(req, res, next)=> {
    try{
        const products = await Product.find({}, "_id name price status active code");
        res.json(products);
    }
    catch(error){
        next(error);
    }
});

router.get("/:id", async (req, res, next)=> {
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
})

router.post("/", async(req, res, next)=> {
    try {
        const {error} = joiSchema.validate(req.body);
        if(error){
            throw new BadRequest(error.message);
        }
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        if(error.message.includes("validation failed")){
            error.status = 400;
        }
        next(error);
    }
})

router.put("/:id", async(req, res, next)=> {
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
});

router.patch("/:id/active", async(req, res, next)=> {
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
})

router.delete("/:id", async(req, res, next)=> {
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
})

module.exports = router;

/*
1. ???????????????? ???????? ???? mongodb.com.
2. ???????????????? ???????? .env ???? ?????????????? ?????????????????????? ?? ????????.
3. ???????????????? ???????? .env.example ?????? devOps.
4. ?????????????? dotenv ?? mongoose.
5. ???????????????????? ???????????? ?????????????????????? ?? ???????? ?? ???????????????????? ?????????????????? ?? ??????????????
require("dotenv").config()
6. ?????????????????????? ???????? ???????????????????? ?? ???????? ???????????? ?? ?????????????? mongoose.connect.
7. ???????????????? ??????????.
8. ???????????????? ????????????.
9. ???????????????????????? ???????????? ?? ?????? ????????.
10. ?????????????????? ???????????? ???????????? ?? .json ???? ???????????? ?????????????? ????????????. 
*/