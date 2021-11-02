const router = require('express').Router();
const { Comment, User, Blog } = require('../models');
// const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
    try {
        const dbBlogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ["name"]
                }
            ]
        });

        const blogs = dbBlogData.map((bloggies) =>
            bloggies.get({ plain: true })
        );

        res.render("homepage", {
            blogs,
            loggedIn: req.session.loggedIn,
        });
        // res.send("OKAY")
        // res.status(200).json(dbBlogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/blog/:id", async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            const dbBlogData = await Blog.findByPk(req.params.id, {
                include: [Comment]
            });

            const dataSet = dbBlogData.get({ plain: true });
            res.render("comments", { comment });
            console.log(dataSet);

        } catch (err) {
            res.status(500).json(err);
        }
    }
});

router.get('/dashboard', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            // Find the logged in user based on the session ID
            const userData = await User.findByPk(req.session.user_id, {
                attributes: { exclude: ['password'] },
                include: [{ model: Blog }],
            });

            const user = userData.get({ plain: true });

            res.render('dashboard', {
                ...user,
                loggedIn: true
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }
});



router.get("/login", async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    res.render("login");
});

module.exports = router;