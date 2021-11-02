const { User } = require("../models");

const userData = [
    {
        id: 1,
        name: "bird believer 1",
        email: "birdsarereal@gmail.com",
        password: "$2b$10$c6jSS/0mdN1zanqQK0M2bOV9xPrG7eedR7i2a.fUT6b1yn9YIC6vG"
    },
    {
        id: 2,
        name: "government drone bird",
        email: "birdsarefake@gmail.com",
        password: "$2b$10$c6jSS/0mdN1zanqQK0M2bOV9xPrG7eedR7i2a.fUT6b1yn9YIC6vG"
    }
]

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;