const router = require("express").Router();
const { Post, User, Comment } = require("../models");

//get all posts for the logged in user
// http://localhost:3001/dashboard
router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    const allMyPost = await Post.findAll({
      where: {
        user_id: req.session.userId,
      },
      include: [
        {
          model: Comment,
        },
      ],
    });
    const posts = allMyPost.map((post) => post.get({ plain: true }));
    try {
      res
        .status(200)
        .render("dashboard", { posts, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log("error is in dashboard route");
      res.status(500).json(err);
    }
  }
});

//need to update to get a single post, id or other key, id to change
router.get("/:id", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    const aPost = await Post.findByPk(
      req.session.userId
    );

    const OnePost = aPost.get({ plain: true });

    try {
      res
        .status(200)
        .render("viewPost", { OnePost, loggedIn: req.session.loggedIn });
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

// http://localhost:3001/dashboard/update/:id
//route to update a post
router.put("update/:id", (req, res) => {
  const requestedId = req.params.id;
  console.log(req.body);
  Post.findOneAndUpdate(
    {
      id: requestedId, // Query Part
    },
    {
      $set: {
        title: req.body.title, // Fields which we need to update
        content: req.body.content,
      },
    },
    {
      new: true, // option part ( new: true will provide you updated data in response )
    },
    (err, post) => {
      if (!err) {
        res
          .status(200)
          .render("updatepost", { OnePost, loggedIn: req.session.loggedIn });
      }
    }
  );
});

module.exports = router;
