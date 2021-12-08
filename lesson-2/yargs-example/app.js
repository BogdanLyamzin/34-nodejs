const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const productsOperations = require("./products");

const invokeAction = async({action, id, name, price})=> {
    switch(action){
        case "getAll":
            const products = await productsOperations.getAll();
            console.log(products);
            break;
        case "getById":
            const product = await productsOperations.getById(id);
            console.log(product);
            break;
        case "add":
            const newProduct = await productsOperations.add({name, price});
            console.log(newProduct);
            break;
        case "updateById":
            const updateProduct = await productsOperations.updateById({id, name, price});
            console.log(updateProduct);
            break;
        case "removeById":
            const removeProduct = await productsOperations.removeById(id);
            console.log(removeProduct);
            break;
        default:
            console.log("Unknown action");
    }
};

const arr = hideBin(process.argv);
const {argv} = yargs(arr);

invokeAction(argv);