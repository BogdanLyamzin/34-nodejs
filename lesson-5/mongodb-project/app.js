const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://Bogdan:pBje6ZbFRATcsTq@cluster0.skglp.mongodb.net/online_shop?retryWrites=true&w=majority"

mongoose.connect(DB_HOST)
    .then(()=> {
        console.log("database connect success")
    })
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    })