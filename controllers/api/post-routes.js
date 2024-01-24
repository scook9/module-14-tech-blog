const router = require("express").Router();
const { Sequelize } = require("sequelize");
const { Post } = require("../../models");

// http://localhost:3001/api/post
//route to create a blog post and show post on homepage
router.post("/", async (req, res) => {
  try {
    console.log("hit post post route");
    console.log(req.session); //this has no id key, but next line gives a value
    console.log(req.session.id); //getting hashed value, why??? should be int
    const dbSingleUserPost = await Post.create({
      title: req.body.title,
      user_id: req.session.id,
      content: req.body.content,
    });
    if (dbSingleUserPost) {
      res.status(200).json(dbSingleUserPost);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// http://localhost:3001/api/post/:id
//route to update blog post
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    // Update the blog post
    blog.title = title;
    blog.content = content;
    await blog.save();

    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// http://localhost:3001/api/post/blog/:id

router.delete("/blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    // Delete the blog post
    await blog.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
