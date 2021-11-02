const router = require('express').Router();
const dashboard = require("./dashboard");
const userRoutes = require('./userRoutes');

router.use("/userRoute", userRoutes);
router.use("/dashboard", dashboard);

module.exports = router;
