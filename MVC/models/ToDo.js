const fs = require('fs');

class ToDo{
    constructor(id, task, status) {
        this.id = id;
        this.task = task;
        this.status = status;
    }

    static getTodo() {
        // read data json
        let todo = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
        todo = todo.map(todo => {
            const {id, task, status} = todo;
            return new ToDo(id, task, status);
        });
        return todo;
    }   
}

module.exports = ToDo;