const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const DishesController = require("../controllers/DishesController");
const DishesLogoController = require("../controllers/DishesLogoController");

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const dishesController = new DishesController();
const dishesLogoController = new DishesLogoController();

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.post(
  "/register",
  verifyUserAuthorization(["customer"]),
  dishesController.create
);

dishesRoutes.put(
  "/update/:id",
  verifyUserAuthorization(["customer"]),
  dishesController.update);

dishesRoutes.patch(
  "/image/:id",
  upload.single("image"),
  verifyUserAuthorization(["customer"]),
  dishesLogoController.update
);

dishesRoutes.get("/details/:id", dishesController.show);
dishesRoutes.get("/all", dishesController.index);

dishesRoutes.delete(
  "/delete/:id",
  verifyUserAuthorization(["customer"]),
  dishesController.delete
);

module.exports = dishesRoutes;
