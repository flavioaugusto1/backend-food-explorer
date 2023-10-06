const AppError = require("../utils/AppError");

class UserController {
  create(request, response) {
    const { name, email, isAdmin } = request.body;
    const verifyIsAdmin = isAdmin ? true : false;

    if (!name) {
      throw new AppError("Nome do usuário não foi informado.");
    }

    return response.status(201).json({ name, email });
  }
}

module.exports = UserController;