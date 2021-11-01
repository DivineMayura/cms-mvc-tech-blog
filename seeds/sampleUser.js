const { User } = require("../models");

const userData = [
    {
        id: 1,
        name: "bird believer 1",
        email: "birdsarereal@gmail.com",
        password: "password"
    },
    {
        id: 2,
        name: "government drone bird",
        email: "birdsarefake@gmail.com",
        password: "password"
    }
]

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;