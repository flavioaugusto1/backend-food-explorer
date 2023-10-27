const AppError = require("../utils/AppError");
const knex = require("../database/knex/index.js");

class DishesController {
  async create(request, response) {
    const { name, description, image, price, category, ingredients } = request.body;
    
    
    return response.status(201)
  }
}

module.exports = DishesController;