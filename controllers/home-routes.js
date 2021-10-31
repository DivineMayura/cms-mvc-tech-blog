const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
    try {
        console.log("bacon")

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/placeHolderName/:id", async (req, res) => {
    try {
        console.log("Goats");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/login", (req,res) => {
    if (req.session.logged_in) {
        res.redirect("/profile");
        return;
    }
    res.render("login");
});