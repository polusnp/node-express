const express = require('express');
const usersRouter = express.Router();
const {
    validateData,
    userSchema,
} = require('../middlewares/usersValidations.cjs');

const {
    getAllUsersHandler,
    getOneUserHandler,
    postNewUserHandler,
    putOneUserHandler,
    deleteUserHandler,
} = require('../controllers/usersController.cjs');

usersRouter.get('/', getAllUsersHandler);
usersRouter.get('/:id', getOneUserHandler);
usersRouter.post('/', validateData(userSchema), postNewUserHandler);
usersRouter.put('/:id', validateData(userSchema), putOneUserHandler);
usersRouter.delete('/:id', deleteUserHandler);

module.exports = usersRouter;
