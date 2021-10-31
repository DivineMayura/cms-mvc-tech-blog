const { Blog } = require("../models");

const blogdata = [
    {
        blog_name: "Do Cows Exist?",
        description: "A blog about wether or not cows are real.",
    },
    {
        blog_name: "Are birds government spies?",
        description: "I believe birds are Government spies."
    }
];

const seedBlog = () => Blog.bulkCreate(blogdata);
module.exports = seedBlog;