// membuat todo list dengan menggunakan konsep MVC

// node index.js
// node index.js help
// node index.js help
// node index.js add <task>
// node index.js edit <id> <task>
// node index.js delete <id>

const command = process.argv[2]
const params = process.argv.slice(3)
const TodoController = require('./controller/TodoController');


switch(command) {
    case 'help':
        console.log('Perintah yang tersedia:');
        TodoController.help();
        break;
    case 'show':
        TodoController.show();
        break;
    case 'add':
        break;
    case 'edit':     
        break;
    case 'delete':
        break;  
    default:
        console.log('Selamat Datang');
        break;
}