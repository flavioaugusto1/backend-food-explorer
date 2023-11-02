const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const DishesController = require("../controllers/DishesController");
const DishesLogoController = require("../controllers/DishesLogoController");

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const dishesController = new DishesController();
const dishesLogoController = new DishesLogoController();

dishesRoutes.post("/register", dishesController.create);
dishesRoutes.put("/update/:id", dishesController.update);
dishesRoutes.patch("/image/:id", upload.single("image"),dishesLogoController.update);
dishesRoutes.get("/details/:id", dishesController.show);
dishesRoutes.get("/all", dishesController.index);
dishesRoutes.delete("/delete/:id", dishesController.delete);

module.exports = dishesRoutes;
