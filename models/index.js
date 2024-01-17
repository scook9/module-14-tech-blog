const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Comment, {
  foreignKey: "author_username",
  onDelete: "CASCADE",
});
User.hasMany(Post, {
  foreignKey: "author_username",
  onDelete: "CASCADE",
});
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "author_username",
});

Post.belongsTo(User, {
  foreignKey: "author_username",
});

module.exports = { Comment, Post, User };
