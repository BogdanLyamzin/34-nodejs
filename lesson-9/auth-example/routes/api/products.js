const express = require("express");
const {NotFound, BadRequest} = require("http-errors");

const {authenticate} = require("../../middlewares");
const {joiSchema} = require("../../models/product");
const {Product} = require("../../models");

const router = express.Router();

router.get("/", authenticate, async(req, res, next)=> {
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
});

router.get("/:id", authenticate, async (req, res, next)=> {
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

router.post("/", authenticate, async(req, res, next)=> {
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
1. Создаете базу на mongodb.com.
2. Создаете файл .env со строкой подключения к базе.
3. Создаете файл .env.example для devOps.
4. Ставите dotenv и mongoose.
5. Добавляете строку подключения к базе в переменные окружения с помощью
require("dotenv").config()
6. Подключаете ваше приложение к базе данных с помощью mongoose.connect.
7. Создаете схему.
8. Создаете модель.
9. импортируете модель в ваш роут.
10. Заменяете методы работы с .json на вызовы методов модели. 
*/