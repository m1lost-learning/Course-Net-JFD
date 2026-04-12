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
        const [task] = params;
        const status = false;   
        const newData = new ToDo(id, task, status);
        datas.push(newData);

        // write data json
        fs.writeFileSync('./data.json', JSON.stringify(datas, null, 2));
        console.log(`Data dengan id ${id} berhasil ditambahkan`);
    }

    static edit(params) {
        let datas = this.getTodo();
        const id = params[0];
        let task = params[1];

        datas = datas.map(data => {
            if(data.id == id) {
                data.task = task || data.task;
            }
            return data;
        });

        // write data json/save data json
        fs.writeFileSync('./data.json', JSON.stringify(datas, null, 2));
        console.log(`Data dengan id ${id} berhasil diubah`);
    }

    static delete(params) {
        let datas = this.getTodo();
        const id = params[0];
        datas = datas.filter(data => data.id != id); 
     
        // write data json/save data json
        fs.writeFileSync('./data.json', JSON.stringify(datas, null, 2));
        console.log(`Data dengan id ${id} berhasil dihapus`);
    }

     //toogle status
    static changeStatus(params) {
        let datas = this.getTodo();
        const id = +params[0];

        datas = datas.map(data => {
            if(data.id === id) {
                data.status = !data.status;
            }
            return data;
        });

        // write data json/save data json
        fs.writeFileSync('./data.json', JSON.stringify(datas, null, 2));
        console.log(`Status dengan id ${id} berhasil diubah`);
    }
}
module.exports = ToDo;