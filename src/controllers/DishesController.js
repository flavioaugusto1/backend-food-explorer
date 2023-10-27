const AppError = require("../utils/AppError");
const knex = require("../database/knex/index.js");

class DishesController {
  async create(request, response) {
    const { name, description, image, price, category, ingredients } =
      request.body;

    const [dishes_id] = await knex("dishes").insert({
      name,
      description,
      price,
      category,
    });

    const insertIngredients = ingredients.map(ingredient => {
      return{
        name: ingredient,
        dishes_id
      }
    })

    await knex("ingredients").insert(insertIngredients)

    return response.status(201).json({message: "Prato criado com sucesso!"})
  }
}

module.exports = DishesController;
