const express = require("express");
const cors = require("cors");

const productsRouter = require("./routes/api/products");

const app = express();

app.use(cors());

app.use("/products", productsRouter);

app.use((req, res)=> {
    res.status(404).json({
        message: "Not found"
    })
})

app.listen(3000);