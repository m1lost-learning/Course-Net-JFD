const express = require('express');
const app = express.Router();
const userRoutes = require('../contollers/userController');


//ini routers
app.get('/', userRoutes.getAllUsers);
app.get('/users/:id', userRoutes.getUser);
app.post('/users', userRoutes.createUser);
app.put('/users/:id', userRoutes.updateUser);
app.delete('/users/:id', userRoutes.deleteUser);

module.exports = routers;