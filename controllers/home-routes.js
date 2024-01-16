const router = require("express").Router();

// http://localhost:3001/
router.get("/", async (req, res) => {
  try {
    res.status(200).render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
