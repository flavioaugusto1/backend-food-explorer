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

    const insertIngredients = ingredients.map((ingredient) => {
      return {
        name: ingredient,
        dishes_id,
      };
    });

    await knex("ingredients").insert(insertIngredients);

    return response.status(201).json({ message: "Prato criado com sucesso!" });
  }

  async show(request, response) {
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();
    const ingredients = await knex("ingredients")
      .where({ dishes_id: id })
      .orderBy("name");

    return response.json({
      ...dish,
      ingredients,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("dishes").where({ id }).delete();

    return response.json({ message: "Prato deletado com sucesso" });
  }
}

module.exports = DishesController;
