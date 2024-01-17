const router = require("express").Router();
const { Post, User, Comment} = require('../models')

// http://localhost:3001/dashboard
router.get("/dashboard", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    const allMyPost = await Post.findAll({
      where: {
        author_username: req.session.author_username
      },
      include: [{
        model: Comment
      }],
    });
    const posts = allMyPost.map((post) =>
      post.get({ plain: true })
    );
    try {
      res.status(200).render("dashboard", {posts, loggedIn: req.session.loggedIn});
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

router.get("/dashboard", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
  const aPost = await Post.findOne({
    where: {
      author_username: req.session.author_username
    },
    include: [{
      model: Comment
    }],
  });
  const OnePost = aPost.map((post) =>
      post.get({ plain: true })
    );
  try {
    res.status(200).render("dashboard", {OnePost, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
  }
});

module.exports = router;
