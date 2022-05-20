const { User } = require('../models');

const userData = [
    {
        username: "gordon54",
        email: "marvelous50@gmail.com",
        password: "scifi2050"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers; 