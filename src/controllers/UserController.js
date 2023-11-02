const { hash } = require("bcryptjs")
const AppError = require("../utils/AppError");
const knex = require("../database/knex/index.js");

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body;

    if(!password){
      throw new AppError("A senha não foi informada.")
    }

    const checkerUserExists = await knex("users")
      .where("email", email)
      .select("*")
      .first();

    if (checkerUserExists) {
      throw new AppError("Este email já está em uso.");
    }

    const hashedPassword = await hash(password, 8)
    
    await knex("users").insert({
      name,
      email,
      password: hashedPassword,
    })
    
    return response.status(201).json({message: "Usuário criado com sucesso."});
  }
}

module.exports = UserController;
