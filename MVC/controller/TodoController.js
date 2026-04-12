const View = require('../views/view');
const ToDo = require('../models/ToDo');

class TodoController {
    static help() {
        View.help();
    }   

    static show() {
        //request data dari model
        const todo = ToDo.getTodo();

        //response data ke view
        View.show(todo);
    }
}
module.exports = TodoController;