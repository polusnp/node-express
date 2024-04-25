const express = require('express');
const router = express.Router();
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

router.get('/', getAllUsersHandler);
router.get('/:id', getOneUserHandler);
router.post('/', validateData(userSchema), postNewUserHandler);
router.put('/:userId', validateData(userSchema), putOneUserHandler);
router.delete('/:userId', deleteUserHandler);

module.exports = router;
