const { User } = require('../model/userModel.cjs');

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw error;
    }
};

const addNewUser = async (userData) => {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        throw error;
    }
};

const updateUser = async (id, body) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: body },
            { new: true }
        );
        return updatedUser;
    } catch (error) {
        throw error;
    }
};

const removeUser = async (id) => {
    try {
        const newUsersList = await User.findByIdAndDelete(id);
        return newUsersList;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    addNewUser,
    updateUser,
    removeUser,
};
