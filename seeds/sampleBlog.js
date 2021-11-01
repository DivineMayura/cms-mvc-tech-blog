const { Blog } = require("../models");

const blogData = [
    {
        blog_name: "Do Cows Exist?",
        description: "A blog about wether or not cows are real.",
        user_id: 1
    },
    {
        blog_name: "Are birds government spies?",
        description: "I believe birds are Government spies.",
        user_id: 2
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);
module.exports = seedBlog;