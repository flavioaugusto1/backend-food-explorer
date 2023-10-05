const { Router } = require("express");
const UserAdminController = require("../controllers/UserAdminController")

const adminRouters = Router();
const userAdminController = new UserAdminController();

adminRouters.post("/register", userAdminController.create);

module.exports = adminRouters