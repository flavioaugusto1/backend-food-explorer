const { Router } = require('express');
const UserController = require('../controllers/UserController');

const usersRoutes = Router();
const usersController = new UserController();

usersRoutes.post("/register", usersController.create);

module.exports = usersRoutes;