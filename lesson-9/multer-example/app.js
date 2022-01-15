const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const {v4} = require("uuid");

const app = express();

app.use(cors());
app.use(express.static("public"));

const tempDir = path.join(__dirname, "temp");
const productsDir = path.join(__dirname, "public/products");

const multerConfig = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, tempDir);
    },
    filename: (req, file, cb)=> {
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 2048
    }
});

const upload = multer({
    storage: multerConfig
});

const products = [];

app.get("/api/products", async(req, res, next)=> {
    res.json(products);
})

app.post("/api/products", upload.single("image"), async(req, res, next)=> {
    try {
        const {path: tempUpload, filename} = req.file;
        const fileUpload = path.join(productsDir, filename);
        await fs.rename(tempUpload, fileUpload);
        const image = path.join("products", filename);
        const product = {...req.body, _id: v4(), image};
        products.push(product);
        res.status(201).json(product);
    } catch (error) {
        await fs.unlink(tempUpload);
    }
})

app.listen(3000)