const {
    getAllUsers,
    addNewUser,
    updateUser,
    getUserById,
    removeUser,
} = require('../services/usersService.cjs');
const { statusCode } = require('../helpers/constants.cjs');

const getAllUsersHandler = async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.status(statusCode.OK).json(users);
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
                status: statusCode.NOT_FOUND,
                message: `Not found user with id ${id}`,
            });
        }
        res.status(statusCode.OK).json(user);
    } catch (error) {
        next(error);
    }
};

const postNewUserHandler = async (req, res, next) => {
    try {
        const userData = req.body;
        const newUser = await addNewUser(userData);
        res.status(statusCode.CREATED).json(newUser);
    } catch (error) {
        next(error);
    }
};

const putOneUserHandler = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await getUserById(id);
        if (!user) {
            return next({
                status: statusCode.BAD_REQUEST,
                message: `Not found user with id ${id}`,
            });
        }
        const updatedUser = await updateUser(id, req.body);
        res.status(statusCode.OK).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

const deleteUserHandler = async (req, res, next) => {
    try {
        const id = req.params.id;
        const removedUserList = await removeUser(id);
        res.status(statusCode.NO_CONTENT).json(removedUserList);
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
