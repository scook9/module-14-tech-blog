const router = require("express").Router();


// http://localhost3001/api/user
router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports(router);