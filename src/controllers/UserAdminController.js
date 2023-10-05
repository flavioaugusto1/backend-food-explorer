class UserAdminController {
  create(request, response) {
    const { name, email, isAdmin } = request.body

    return response.status(201).json({ name, email, isAdmin })
  }
}

module.exports = UserAdminController;