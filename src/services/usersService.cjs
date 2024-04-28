const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const usersPath = path.join(__dirname, '../model/users.json');

const getAllUsers = async () => {
    try {
        const users = await fs.readFile(usersPath, 'utf-8');
        const parsedUsers = JSON.parse(users);
        return parsedUsers;
    } catch (error) {
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const users = await getAllUsers();
        const userById = users.find((user) => user.id === id);
        return userById;
    } catch (error) {
        throw error;
    }
};

const addNewUser = async (userData) => {
    try {
        const users = await getAllUsers();
        const newUser = { id: uuidv4(), ...userData };
        const newUsersList = [...users, newUser];
        await fs.writeFile(usersPath, JSON.stringify(newUsersList), 'utf-8');
        return newUser;
    } catch (error) {
        throw error;
    }
};

const updateUser = async (id, body) => {
    try {
        const initialUser = await getUserById(id);
        const users = await getAllUsers();
        const updatedUser = { ...initialUser, ...body };
        const updatedUserList = users.map((user) =>
            user.id === id ? updatedUser : user
        );
        await fs.writeFile(usersPath, JSON.stringify(updatedUserList), 'utf-8');
        return updatedUser;
    } catch (error) {
        throw error;
    }
};

const removeUser = async (id) => {
    try {
        const users = await getAllUsers();
        const newUsersList = users.filter((user) => user.id !== id);
        await fs.writeFile(usersPath, JSON.stringify(newUsersList), 'utf-8');
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
