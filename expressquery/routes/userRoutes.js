const express = require('express');
const app = express.Router();
const controller = require('../contollers/userController');


//ini routers
app.get('/', controller.getUser);
app.get('/:id', controller.getUser);
app.post('/', controller.createUser);
app.put('/:id', controller.updateUser);
app.delete('/:id', controller.deleteUser);

module.exports = routers;