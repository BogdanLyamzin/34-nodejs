const fs = require("fs/promises");

const productsPath = require("./productsPath");

const updateProducts = async(products)=> {
    await fs.writeFile(productsPath, JSON.stringify(products, null, 2));
}

module.exports = updateProducts;

