const AppError = require("../utils/AppError");

class UserController {
  create(request, response) {
    const { name, email, role } = request.body;
    const verifyIsAdmin = role ? 'admin' : 'user';

    console.log(verifyIsAdmin)

    if (!name) {
      throw new AppError("Nome do usuário não foi informado.");
    }

    return response.status(201).json({ name, email });
  }
}

module.exports = UserController;