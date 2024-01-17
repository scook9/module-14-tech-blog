const sequelize = require("../config/connections");
const { Comments, Post, User } = require("../models/index");

const userData = require("./userData.json");
const commentsData = require("./commentsData.json");
const blogPostData = require("./blogPostData.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: false });

    await Comments.bulkCreate(commentsData);
    await User.bulkCreate(userData);
    await Post.bulkCreate(blogPostData);

    console.log("data seeded successfuly!");
    process.exit(0);
  } catch (error) {
    console.error("error seeding database", error);
    process.exit(1);
  }
};
seedDatabase();
