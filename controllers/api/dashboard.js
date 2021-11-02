const router = require('express').Router();
const { Blog, User } = require('../../models');

router.post("/", async (req, res) => {
    try {
        const buildABlog = await Blog.create({
            blog_name: req.body.blog_name,
            description: req.body.description,
            user_id: req.session.user_id
        });
    
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.loggedIn = true;
    
          res.status(200).json(buildABlog);
        });
      } catch (err) {
        res.status(400).json(err);
      }
});

module.exports = router;