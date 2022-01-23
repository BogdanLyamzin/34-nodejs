const express = require("express");

const {authenticate} = require("../../middlewares");
const ctrl = require("../../controllers/products");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/search", authenticate, ctrl.search);

router.get("/:id", authenticate, ctrl.getById)

router.post("/", authenticate, ctrl.add);

router.put("/:id", ctrl.updateById);

router.patch("/:id/active", ctrl.updateActive)

router.delete("/:id", ctrl.removeById)

module.exports = router;
