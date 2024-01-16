const router = require("express").Router();

// http://localhost:3001/dashboard
router.get("/", async (req, res) => {
  try {
    res.status(200).render();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
