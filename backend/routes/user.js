require("dotenv").config();
const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../config/passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");

const signToken = (userID) => {
    return JWT.sign(
        {
            iss: "process.env.JWT_KEY",
            sub: userID,
        },
        "process.env.JWT_KEY",
        { expiresIn: "1h" }
    );
};

userRouter.post("/register", (req, res) => {
    const { password, firstName, lastName, email } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err) res.status(500).json({ message: { msgBody: "Error has occurred", msgError: "error" } });
        if (user) res.status(400).json({ message: { msgBody: "Email is already taken", msgError: "error" } });
        else {
            const newUser = new User({ password, firstName, lastName, email });
            newUser.save((err) => {
                if (err) res.status(500).json({ message: { msgBody: "Error has occurred", msgError: "error" } });
                else res.status(201).json({ message: { msgBody: "Account successfully created", msgError: "" } });
            });
        }
    });
});

userRouter.post("/login", passport.authenticate("local", { session: false }), (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, email } = req.user;
        const token = signToken(_id);
        res.cookie("access_token", token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: { email } });
    }
});

userRouter.get("/logout", passport.authenticate("jwt", { session: false }), (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { email: "" }, success: true });
});

userRouter.get("/authenticated", passport.authenticate("jwt", { session: false }), (req, res) => {
    const { email } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { email } });
});

module.exports = userRouter;
