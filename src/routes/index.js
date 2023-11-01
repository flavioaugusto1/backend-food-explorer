const { Router } = require('express');

const usersRouter = require('./users.routes')
const dishesRouter = require('./dishes.routes')
const sessionRouter = require('./sessions.routes')

const routes = Router();

routes.use("/", usersRouter)
routes.use("/dishes", dishesRouter)
routes.use("/sessions", sessionRouter)

module.exports = routes;