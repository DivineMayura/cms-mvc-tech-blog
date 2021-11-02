const { Comment } = require("../models");

const commentData= [
    {
        content: "Yeah I agree, cows are kinda sus.",
        blog_id: 1,
        user_id: 1,
        commenter: "bird believer 1"
    },
    {
        content: "Birds? Government drones? What's the difference!?!?",
        blog_id: 2,
        user_id: 2,
        commenter: "government drone bird"
    },
    {
        content: "What.",
        blog_id: 1,
        user_id: 2,
        commenter: "government drone bird"
    },
    {
        content: "Lmao y'all crazy.",
        blog_id: 2,
        user_id: 1,
        commenter: "bird believer 1"
    },
]

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;