// file system node
// initialisasi

const fs = require('fs');
let data = fs.readFileSync('data.json', 'utf-8');
let dataobject = JSON.parse(data);
console.log(dataobject);

const databaru = [
    {
        nama : "joko dgdgdf",
        alamat : "papua"
    }
];

// konversi object javascript ke json
const jsonData = JSON.stringify(databaru, null, 2);

// write ke file data json
fs.writeFileSync('data.json', jsonData, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully');
    }
});

