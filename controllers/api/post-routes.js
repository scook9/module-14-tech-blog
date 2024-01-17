const router = require("express").Router();
const { Sequelize } = require("sequelize");
const { Post } = require("../../models");

//route to create a blog post and show post on homepage
router.post("/", async (req, res) => {
  try {
    const dbSingleUserPost = await Post.create({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
    });
    if (dbSingleUserPost) {
      res.status(200).render("homepage").json(dbSingleUserPost);
    }
  } catch {
    res.status(500).json(err);
  }
});

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
