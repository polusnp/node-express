# Users CRUD RESTful API

npm start
npm run dev

This is a simple CRUD RESTful API for managing user data. The API provides endpoints to perform CRUD operations on user data.

## Features

Get a list of all users.
Get data of a single user by their ID. If the user is found, return the user object in JSON format. Otherwise, return a JSON object { "message": "Not found user with id <userId>" } with a status code of 404.
Create a new user. The user object must contain fields: name, email, phone, age. The id field should be generated automatically. All fields must be validated. Return the created user object with a status code of 201.
Update user data. All fields that come in the request body are optional. If the user to be updated by ID is not found, return a JSON object { "message": "Not found user with id <userId>" } with a status code of 404. Otherwise, return the updated user object with a status code of 200.
Delete a user. If the user to be deleted by ID is not found, return a JSON object { "message": "Not found user with id <userId>" } with a status code of 404. Otherwise, return a status code of 204.
Middleware should be used for validating the request body of the message object.

## Endpoints

GET /users: Get a list of all users.
GET /users/:id: Get data of a single user by their ID.
POST /users: Create a new user.
PUT /users/:userId: Update user data.
DELETE /users/:userId: Delete a user.

## Technologies Used

-   **Node.js**: A JavaScript runtime environment for running server-side JavaScript code.
-   **Express.js**: A web application framework for Node.js used for building APIs and web applications.
-   **Joi**: A powerful schema description language and data validator for JavaScript.
-   **JSON**: A lightweight data interchange format used for representing data in API requests and responses.
-   **Git**: A version control system used for tracking changes in the project's source code.
-   **GitHub**: A platform for hosting Git repositories and collaborating on software development projects.
