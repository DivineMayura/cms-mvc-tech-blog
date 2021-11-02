const router = require('express').Router();
const { Blog, User } = require('../../models');

// let  = userData.id

router.post("/", async (req, res) => {
    try {
        const buildABlog = await Blog.create({
            blog_name: req.body.blog_name,
            description: req.body.description,
            user_id: req.session.user_id
        });
    
        //   res.status(200).json(buildABlog);
        const blogs = buildABlog.map((bloggies) =>
        bloggies.get({ plain: true })
    );
          res.render("dashboard", {
              blogs
          })
      } catch (err) {
        res.status(400).json(err);
      }
});

router.put('/:id', async (req, res) => {
    try {
      const blogUpdate = await Tag.update(
        { description: req.body.description },
        { where: {
          id: req.params.id,
        },
      });
  
      if (!blogUpdate) {
        res.status(404).json({ message: "No blog found with that id" });
        return;
      }
      // res.status(200).json(blogUpdate);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.delete("/:id", async (req,res) => {
    try {
        const deleteABlog = await Blog.destroy({
            where: { id: req.params.id },
        });

        if(!deleteABlog) {
            res.status(404).json({ message: "No blog found with that id!" });
            return;
        }
        res.status(200).json(deleteABlog);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;