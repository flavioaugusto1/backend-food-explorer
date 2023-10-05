class UserController {
  create(request, response) {
    const { name, email, isAdmin } = request.body;

    return response.status(201).json({ name, email });
  }
}

module.exports = UserController;
