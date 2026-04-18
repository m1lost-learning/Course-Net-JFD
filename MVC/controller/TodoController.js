const View = require('../views/view');
const ToDo = require('../models/ToDo');
const { todo } = require('node:test');

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

    static add(params) {
        ToDo.add(params);
    }

    static edit(params) {
        ToDo.edit(params);
    }

    static delete(params) {
        ToDo.delete(params);
    }

    static changeStatus(params) {
        ToDo.changeStatus(params);
    }

}
module.exports = TodoController;