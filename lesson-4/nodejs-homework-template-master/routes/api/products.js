const express = require("express");
// const createError = require("http-errors");
const {NotFound, BadRequest} = require("http-errors");
const Joi = require("joi");

const productsOperations = require("../../models/products")

const router = express.Router();

const joiSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().min(0.01).required()
});

/*
1. Получить все товары.
2. Получить товар по id.
3. Добавить товар.
4. Обновить товар по id.
5. Удалить товар по id.
*/

router.get("/", async(req, res, next)=> {
    try{
        const products = await productsOperations.getAll();
        res.json(products);
    }
    catch(error){
        next(error);
        // res.status(500).json({
        //     message: "Server error"
        // })
    }
});
// /api/products/48bd1cd8-72ca-42cc-8457-156bb8c30873
router.get("/:id", async (req, res, next)=> {
    const {id} = req.params;
    try {
        const product = await productsOperations.getById(id);
        if(!product){
            throw new NotFound();
            // throw new createError(404, "Not found");
            // const error = new Error("Not found");
            // error.status = 404;
            // throw error;
            // return res.status(404).json({
            //     message: "Not found"
            // })
        }
        res.json(product);
    }
    catch(error){
        next(error);
        // res.status(status).json({
        //     message
        // })
    }
})
// POST /api/products
router.post("/", async(req, res, next)=> {
    try {
        const {error} = joiSchema.validate(req.body);
        if(error){
            throw new BadRequest(error.message);
            // error.status = 400;
            // throw error;
        }
        const newProduct = await productsOperations.add(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        next(error);
    }
})

router.put("/:id", async(req, res, next)=> {
    try {
        const {error} = joiSchema.validate(req.body);
        if(error){
            throw new BadRequest(error.message);
        }
        const {id} = req.params;
        const updateProduct = await productsOperations.updateById({id, ...req.body});
        if(!updateProduct){
            throw new NotFound();
        }
        res.json(updateProduct);
    } catch (error) {
        next(error);
    }
})

router.delete("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const deleteProduct = await productsOperations.removeById(id);
        if(!deleteProduct){
            throw new NotFound();
        }
        res.json({message: "product delete"})
    } catch (error) {
        next(error);
    }
})

module.exports = router;