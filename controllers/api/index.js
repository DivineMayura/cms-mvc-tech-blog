const router = require('express').Router();
// const dashboard = require("./dashboard");
const userRoutes = require('./userRoutes');

router.use("/userRoutes", userRoutes);
// router.use("/dashboard", dashboard);

module.exports = router;
