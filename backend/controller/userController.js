import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Task from './../models/Task.js';

// @desc   Get all the users
// @route  get /api/users/
// @access private -> admin
export const getUsers = async (req, res) => {
  try {
    const roleFilter = req.query.role; // e.g., ?role=member or ?role=admin

    const query = roleFilter ? { role: roleFilter } : {}; // if no query, return all users

    const users = await User.find(query).select("-password");

    const userWithTaskCount = await Promise.all(
      users.map(async (user) => {
        const pendingTask = await Task.countDocuments({
          assignedTo: user._id,
          status: "Pending",
        });
        const inProgressTask = await Task.countDocuments({
          assignedTo: user._id,
          status: "In Progress",
        });
        const completedTask = await Task.countDocuments({
          assignedTo: user._id,
          status: "Completed",
        });

        return {
          ...user._doc,
          pendingTask,
          inProgressTask,
          completedTask,
        };
      })
    );

    res.status(200).json(userWithTaskCount);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// @desc   Login user
// @route  get /api/users/:id
// @access private need Jwt token
export const getuserid = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found. Please retry!",
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


// @desc   Delete user by ID
// @route  DELETE /api/users/:id
// @access Private -> Admin
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await user.remove(); // or await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "User deleted successfully",
      userId: req.params.id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

