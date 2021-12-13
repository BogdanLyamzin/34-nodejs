const express = require("express");

const products = require("./products");

const app = express();

app.set("json spaces", 8);
app.set("views engine", "ejs");
app.set("views", "views");

app.get("/", (req, res)=> {
    res.render("homepage", {title: "Home page"})
});

app.get("/products", (req, res)=> {
    // res.json(null);
    // res.send(null);
    res.json(products);
    // res.send(products);
});


app.listen(3000, ()=> console.log("Server running"));

