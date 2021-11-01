const router = require('express').Router();
const { Comment, User, Blog } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
    try {
        const dbBlogData = await Blog.findAll({
            include: [ User ]
        });

        // const allBlogs = dbBlogData.map((blogs) =>
        //     blogs.get({ plain: true })
        // );
        // res.render("homepage", {
        //     allBlogs,
        //     loggedIn: req.session.loggedIn,
        // });
        // res.send("OKAY")
        res.status(200).json(dbBlogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get("/blog/:id", authorized, async (req, res) => {
//     try {
//         const dbBlogData = await Blog.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: Comment,
//                     attributes: [
//                         "id",
//                         "content",
//                         "blog_id",
//                         "user_id"
//                     ],
//                 },
//             ],
//         });
//         const dataSet = dbBlogData.get({ plain: true });
//         res.render("blog", { dataSet, loggedIn: req.session.loggedIn });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get("/comment/:id", withAuth, async (req,res) => {
//     try {
//         const dbCommentData = await Comment.findByPK(req.params.id);
//         const com = dbCommentData.get({ plain: true });
//         res.render("comment", { com, loggedIn: req.session.loggedIn });
//     } catch (err) {
//         // console.log(err);
//         res.status(500).json(err);
//     }
// })





router.get('/profile', async (req, res) => {
    try {
        res.send("HEY");
    } catch (err) {
        res.status(500).json(err);
    }
});





router.get("/login", async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect("/homepage");
        return;
    }
    res.render("login");
});

module.exports = router;