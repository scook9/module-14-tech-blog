const router = require("express").Router();
const { Comment } = require("../../models");

// http://localhost3001/api/comment/
router.post("/", async (req, res) => {
  try {
    const commentData = await Comment.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
