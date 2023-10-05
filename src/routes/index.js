const { Router } = require("express");
const usersRouter = require("./users.routes")
const adminRouters = require("./usersAdmin.routes")

const routes = Router();

routes.use("/", usersRouter)
routes.use("/admin", adminRouters)

module.exports = routes;