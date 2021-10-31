const User = require("./user");
const Blog = require("./blog");
const Comment = require("./comments");
// const BlogComment = require("./blogComments");
// const UserComment = require("./userComments");

Comment.belongsTo(Blog, {
    foreignKey: "comment_id",
    onDelete: "CASCADE"
});

Blog.hasMany(Comment, {
    foreignKey: "blog_id"
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "comment_id"
})

module.exports = { User, Blog, Comment }