const fs = require('fs');

class ToDo{
    constructor(id, task, status) {
        this.id = id;
        this.task = task;
        this.status = status;
    }

    static getTodo() {
        // read data json
        let getData = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
        let datas = getData.map(getData => {
            const {id, task, status} = getData;
            return new ToDo(id, task, status);
        });
        return datas;
    }   
}

module.exports = ToDo;