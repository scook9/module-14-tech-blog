const router = require("express").Router();
const loginRoutes = require('./login-routes.js')
const dashboardRoutes = require('./dashboard-routes.js')
const homeRoutes = require('./home-routes.js')
const apiRoutes = require('./api')

// http://localhost:3001
router.use("/", homeRoutes);
router.use("/login", loginRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
