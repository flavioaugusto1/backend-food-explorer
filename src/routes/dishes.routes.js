const { Router } = require('express');
const DishesController = require('../controllers/DishesController');

const dishesRoutes = Router();
const dishesController = new DishesController();

dishesRoutes.post("/register", dishesController.create);
dishesRoutes.get("/details/:id", dishesController.show);
dishesRoutes.delete("/delete/:id", dishesController.delete);

module.exports = dishesRoutes;
