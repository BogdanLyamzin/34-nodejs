const {program} = require("commander");

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

program
    .option("-a, --action <type>", "action type")
    .option("-i, --id <type>", "product id")
    .option("-n, --name <type>", "product name")
    .option("-p, --price <type>", "product price")

program.parse(process.argv);

const options = program.opts();

invokeAction(options);

