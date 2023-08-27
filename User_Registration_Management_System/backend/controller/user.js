const User = require('../models/user');


async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email }).exec();
        if (user) {
            if (password === user.password) {
                res.send({ message: "User Exists and Password Matched", user: user });
            } else {
                res.send({ message: "Incorrect Password" });
            }
        } else {
            res.send({ message: "User not Exist" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function register(req, res) {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email: email }).exec();
        if (existingUser) {
            res.send({ message: "User Already Exists" });
        } else {
            const newUser = new User({
                name,
                email,
                password
            });
            await newUser.save();
            res.send({ message: "Successfully Registered" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    login,
    register
}
