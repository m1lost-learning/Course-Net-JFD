const View = require('../views/view');
const ToDo = require('../models/ToDo');

class TodoController {
    static help() {
        View.help();
    }   

    static show() {
        //request data dari model
        const datas = ToDo.getTodo();

        //response data ke view
        View.show(datas);
    }
}
module.exports = TodoController;