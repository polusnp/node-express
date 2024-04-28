const { getAllMovies, getMovieById } = require('../services/moviesService.cjs');
const { statusCode } = require('../helpers/constants.cjs');

const getAllMoviesHandler = async (req, res, next) => {
    try {
        const allMovies = await getAllMovies();
        res.status(statusCode.OK).json(allMovies);
    } catch (error) {
        next(error);
    }
};

const getOneMovieHandler = async (req, res, next) => {
    try {
        const id = req.params.id;
        const movie = await getMovieById(id);
        if (!movie) {
            return next({
                status: statusCode.NOT_FOUND,
                message: `Not found movie`,
            });
        }
        res.status(statusCode.OK).json(movie);
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllMoviesHandler, getOneMovieHandler };
