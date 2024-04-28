const express = require('express');
const usersRouter = require('./src/routes/usersRouter.cjs');
require('dotenv').config();
const handleNotFound = require('./src/errorHandlers/notFoundErrorHandler.cjs');
const handleGlobalErrors = require('./src/errorHandlers/globalErrorHandler.cjs');

const app = express();

app.use(express.json());
app.use('/users', usersRouter);

//General handle not found errors and all other errors
app.use(handleNotFound);
app.use(handleGlobalErrors);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
