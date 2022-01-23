const {Schema, model} = require("mongoose");
const Joi = require("joi");

const codeRegexp = /^[0-9]{9}$/;

const productSchema = Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    price: {
        type: Number,
        required: true,
        min: 0.01
    },
    active: {
        type: Boolean,
        default: true
    },
    // ["basic", "sale", "stock"]
    status: {
        type: String,
        required: true,
        enum: ["basic", "sale", "stock"],
        default: "basic"
    },
    code:{
        type: String,
        required: true,
        match: codeRegexp,
        unique: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
    name: Joi.string().min(2).required(),
    price: Joi.number().min(0.01).required(),
    active: Joi.bool,
    status: Joi.string().valueOf("basic", "sale", "stock"),
    code: Joi.string().pattern(codeRegexp)
})

const Product = model("product", productSchema);

// Product.watch().on("change", data => {

// })
// categories => category
// mice => mouse

module.exports = {
    Product,
    joiSchema
};