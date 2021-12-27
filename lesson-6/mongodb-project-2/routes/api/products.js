const express = require("express");
const {NotFound, BadRequest} = require("http-errors");
const Joi = require("joi");

const {ctrlWrapper} = require("../../middlewares");
const {joiSchema} = require("../../models/product");
const {products: ctrl} = require("../../controllers");
const {Product} = require("../../models");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.put("/:id", ctrlWrapper(ctrl.updateById));

router.patch("/:id/active", ctrlWrapper(ctrl.updateActive));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;

/*
1. Создаете базу на mongodb.com.
2. Создаете файл .env со строкой подключения к базе.
3. Создаете файл .env.example для devOps.
4. Ставите dotenv и mongoose.
5. Добавляете строку подключения к базе в переменные окружения с помощью
require("dotenv").config()
6. Подключаете ваше приложение к базе данных с помощью mongoose.connect.
7. Создаете схему.
8. Создаете модель.
9. импортируете модель в ваш роут.
10. Заменяете методы работы с .json на вызовы методов модели. 
*/