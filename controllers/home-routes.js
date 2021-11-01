const router = require('express').Router();
const { Project, User, Blog } = require('../models');
const authorized = require('../utils/auth');

router.get("/", async (req, res) => {
    try {
        const dbBlogData = await Gallery.findAll({
            include: [
                {
                    model: Blog,
                    attributes: [
                        'blog_name',
                        'description'
                    ],
                },
            ],
        });

        const allBlogs = dbBlogData.map((blogs) =>
            blogs.get({ plain: true })
        );
        res.render("homepage", {
            allBlogs,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/blog/:id", authorized, async (req, res) => {
    try {
        const dbBlogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: [
                        "id",
                        "content",
                        "blog_id",
                        "user_id"
                    ],
                },
            ],
        });
        const dataSet = dbBlogData.get({ plain: true });
        res.render("blog", { dataSet, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/comment/:id", authorized, async (req,res) => {
    try {
        const dbCommentData = await Comment.findByPK(req.params.id);
        const com = dbCommentData.get({ plain: true });
        res.render("comment", { com, loggedIn: req.session.loggedIn });
    } catch (err) {
        // console.log(err);
        res.status(500).json(err);
    }
})

router.get("/login", authorized, async (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/profile");
        return;
    }
    res.render("login");
});