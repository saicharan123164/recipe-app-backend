import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// ================= GET ALL USERS =================
export const getUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json(users);

    } catch (err) {

        res.status(500).json({
            message: "Error Fetching Users"
        });
    }
};


// ================= GET USER BY ID =================
export const getUserById = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.status(200).json(user);

    } catch (err) {

        res.status(500).json({
            message: "Error Fetching User"
        });
    }
};


// ================= ADD USER =================
export const addUser = async (req, res) => {

    try {

        const user = await User.create(req.body);

        res.status(201).json({
            message: "User Added Successfully",
            user
        });

    } catch (err) {

        res.status(500).json({
            message: "Error Adding User"
        });
    }
};


// ================= UPDATE USER =================
export const updateUser = async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!user) {

            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.status(200).json({
            message: "User Updated Successfully",
            user
        });

    } catch (err) {

        res.status(500).json({
            message: "Error Updating User"
        });
    }
};


// ================= DELETE USER =================
export const deleteUser = async (req, res) => {

    try {

        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {

            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.status(200).json({
            message: "User Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: "Error Deleting User"
        });
    }
};
export const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Check Existing User
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: "User Already Exists"
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User Registered Successfully",
            user
        });

    } catch (err) {

        res.status(500).json({
            message: "Registration Failed"
        });
    }
};
export const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Find User
        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({
                message: "User Not Found"
            });
        }

        // Compare Password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        // Generate JWT Token
        const token = jwt.sign(

            {
                id: user._id
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            message: "Login Successful",
            token
        });

    } catch (err) {

        res.status(500).json({
            message: "Login Failed"
        });
    }
};
// ================= DELETE USER =================

