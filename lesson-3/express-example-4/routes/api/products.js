const express = require("express");

const products = require("../../products")

const router = express.Router();

router.get("/", (req, res)=> {
    res.json(products);
})

router.get("/:id", (req, res)=> {
    const {id} = req.params;
    const result = products.find(item => item.id === id);
    res.json(result);
})

module.exports = router;