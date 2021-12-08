const {v4} = require("uuid");

const updateProducts = require("./updateProducts");
const getAll = require("./getAll");

const add = async(data)=> {
    const newProduct = {...data, id: v4()};
    const products = await getAll();
    products.push(newProduct);
    await updateProducts(products);
    return newProduct;
}

module.exports = add;