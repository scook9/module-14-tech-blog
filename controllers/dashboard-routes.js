const router = require("express").Router();
const { Post, User, Comment} = require('../models')

// http://localhost:3001/dashboard
router.get("/dashboard", async (req, res) => {
  const allMyPost = await Post.findAll({
    where: {
      author_id: req.session.author_id
    },
    // attributes: [
    //   'id',
    //   'title',
    //   'content'
    // ],
    include: [{
      model: Comment
    }]
  })
  try {
    res.status(200).render("dashboard", {allMyPost});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
