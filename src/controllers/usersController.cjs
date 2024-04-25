const {
    getAllUsers,
    addNewUser,
    updateUser,
    getUserById,
    removeUser,
} = require('../services/usersService.cjs');

const getAllUsersHandler = async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getOneUserHandler = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await getUserById(id);
        if (!user) {
            return next({
                status: 404,
                message: `Not found user with id ${id}`,
            });
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

const postNewUserHandler = async (req, res, next) => {
    try {
        const userData = req.body;
        const newUser = await addNewUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

const putOneUserHandler = async (req, res, next) => {
    try {
        const id = req.params.userId;
        const user = await getUserById(id);
        if (!user) {
            return next({
                status: 400,
                message: `Not found user with id ${id}`,
            });
        }
        const updatedUser = await updateUser(id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

const deleteUserHandler = async (req, res, next) => {
    try {
        const id = req.params.userId;
        const users = await getAllUsers();
        const userToDelete = users.find((user) => user.id === id);
        if (!userToDelete) {
            return next({
                status: 400,
                message: `Not found user with id ${id}`,
            });
        }
        const removedUserList = await removeUser(id);
        res.status(204).json(removedUserList);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsersHandler,
    getOneUserHandler,
    putOneUserHandler,
    postNewUserHandler,
    deleteUserHandler,
};
