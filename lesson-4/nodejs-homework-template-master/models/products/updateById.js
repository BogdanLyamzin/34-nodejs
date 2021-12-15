const updateProducts = require("./updateProducts");
const getAll = require("./getAll");

const updateById = async ({id, name, price}) => {
    const products = await getAll();
    const idx = products.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    }
    products[idx] = {id, name, price};
    await updateProducts(products);
    return products[idx];
}

module.exports = updateById;