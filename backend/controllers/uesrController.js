import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import User from '../model/userModel.js';


// @desc Register User
// @route POST /api/users
// @access Public
export const registerUser = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(404);
        throw new Error('Please add all the feilds');
    }

    // @check If user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already Exsists');
    }

    // @hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    // @create User
    const user = await User.create({
        name,
        email,
        password: hashedpassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            user: name,
            email: email
        })
    } else {
        res.status(400);
        throw new Error('User created Failed');
    }

});

// @desc Authenticate User
// @route POST /api/users/login
// @access Public
export const loginUser = expressAsyncHandler(async (req, res) => {
    res.json({ message: 'Log-In User' });
});

// @desc Get User Data
// @route GET /api/users/me
// @access Public
export const getMe = expressAsyncHandler(async (req, res) => {
    res.json({ message: 'Current User Data' });
});

