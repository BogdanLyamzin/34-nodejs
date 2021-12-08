const productsOperations = require("./products");

/*
1. Получить все товары.
2. Получить один товар по id.
3. Добавить товар в список.
4. Обновить товар по id.
5. Удалить товар по id.
*/

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

const id = "48bd1cd8-72ca-42cc-8457-156bb8c30873";

// invokeAction({action: "getAll"});
// invokeAction({action: "getById", id});

// const data = {
//     name: "iPhone X",
//     price: 17000
// }

// invokeAction({action: "add", ...data});

// const updateData = {
//     name: "iPhone X",
//     price: 16000
// };

// const updateId = "03474fa7-a1f3-4af8-b0e4-1b4b26e886ef";

// invokeAction({action: "updateById", ...updateData, id: updateId});
const removeId = "03474fa7-a1f3-4af8-b0e4-1b4b26e886ef";

invokeAction({action: "removeById", id: removeId});