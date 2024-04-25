const handleGlobalErrors = (err, _, res, next) => {
    err.status = err.status ? err.status : 500;
    res.status(err.status).json({
        status: err.status === 500 ? 'fail' : 'error',
        code: err.status,
        message: err.message,
        data: err.status === 500 ? 'Internal Server Error' : err.data,
    });
};

module.exports = handleGlobalErrors;
