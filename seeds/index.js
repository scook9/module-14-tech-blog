const sequelize = require("../config/connections");
const { User, Post, Comment } = require("../models/index");

const userData = require("./userData.json");
const commentsData = require("./commentsData.json");
const blogPostData = require("./blogPostData.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: false });

    await User.bulkCreate(userData);
    await Post.bulkCreate(blogPostData);
    await Comment.bulkCreate(commentsData);

    console.log("data seeded successfuly!");
    process.exit(0);
  } catch (error) {
    console.error("error seeding database", error);
    process.exit(1);
  }
};
seedDatabase();
