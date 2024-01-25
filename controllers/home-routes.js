const router = require("express").Router();
const { Post } = require("../models");

// http://localhost:3001/
router.get("/", async (req, res) => {
  try {
    const dbBlogPostData = await Post.findAll();
    if (!dbBlogPostData) {
      return res.status(404).json({ message: "Blog posts not found" });
    }
    const posts = dbBlogPostData.map((postList) =>
      postList.get({ plain: true })
    );
    console.log(posts);

    res.render("homepage", { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/create", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      res.render("createpost");
    } catch {
      res.status(500).json(err);
    }
  }
});

// router.get("/update", async (req, res) => {
//   if (!req.session.loggedIn) {
//     res.redirect("/login");
//   } else {
//     try {
//       res.render("updatepost");
//     } catch {
//       res.status(500).json(err);
//     }
//   }
// });

module.exports = router;
