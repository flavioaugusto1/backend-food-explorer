const { Router } = require('express');
const DishesController = require('../controllers/DishesController');

const dishesRoutes = Router();
const dishesController = new DishesController();

dishesRoutes.post("/register", dishesController.create);
dishesRoutes.put("/update/:id", dishesController.update);
dishesRoutes.get("/details/:id", dishesController.show);
dishesRoutes.get("/all", dishesController.index);
dishesRoutes.delete("/delete/:id", dishesController.delete);

module.exports = dishesRoutes;
