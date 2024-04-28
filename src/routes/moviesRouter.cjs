const express = require('express');
const moviesRouter = express.Router();

const {
    getAllMoviesHandler,
    getOneMovieHandler,
} = require('../controllers/moviesController.cjs');

moviesRouter.get('/', getAllMoviesHandler);
moviesRouter.get('/:id', getOneMovieHandler);

module.exports = moviesRouter;
