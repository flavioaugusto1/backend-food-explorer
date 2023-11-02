const knex = require("../database/knex/index.js");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage.js");

class DishesLogoController {
  async update(request, response) {
    const { id } = request.params;
    const imageFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    const [dish] = await knex("dishes").where({ id });

    if (!dish) {
      throw new AppError("Prato inexistente.");
    }

    if (dish.image) {
      await diskStorage.deleteFile(dish.image);
    }

    const filename = await diskStorage.saveFile(imageFilename);
    console.log(filename);
    dish.image = filename;

    await knex("dishes").update(dish).where({ id });
    return response.json(dish);
  }
}

module.exports = DishesLogoController;
