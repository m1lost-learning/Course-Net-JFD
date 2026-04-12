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

    static add(params) {
        let datas = this.getTodo();
        const id = datas.length > 0 ? Math.max(...datas.map(item => item.id)) + 1 : 1;
        const task = params[0];
        const status = false;   
        const newData = new ToDo(id, task, status);
        datas.push(newData);
        fs.writeFileSync('./data.json', JSON.stringify(datas, null, 2));
    }
}

module.exports = ToDo;