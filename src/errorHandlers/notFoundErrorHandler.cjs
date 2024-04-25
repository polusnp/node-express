const handleNotFound = (_, res) => {
    res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found',
    });
};

module.exports = handleNotFound;
