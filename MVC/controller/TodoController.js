const View = require('../views/view');

class TodoController {
    static help() {
        View.help();
    }   

    static show() {
        //request data dari model
        const todo = TogetTodo();

        //response data ke view
        View.show(todo);
    }
}
module.exports = TodoController;