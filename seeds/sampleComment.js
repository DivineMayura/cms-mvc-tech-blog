const { Comment } = require("../models");

const commentData= [
    {
        content: "Yeah I agree, cows are kinda sus.",
        blog_id: 1,
    },
    {
        content: "Birds? Government drones? What's the difference!?!?",
        blog_id: 2
    },
]

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;