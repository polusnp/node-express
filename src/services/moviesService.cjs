const { Movie } = require('../model/movieModel.cjs');

const getAllMovies = async () => {
    try {
        const movies = await Movie.find();
        return movies;
    } catch (error) {
        throw error;
    }
};

const getMovieById = async (id) => {
    try {
        const movie = await Movie.findById(id);
        return movie;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllMovies,
    getMovieById,
};
