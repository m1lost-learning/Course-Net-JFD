const { todo } = require("node:test");

class View {
    static help() {
        console.log('Task List :');

        todo.forEach((todo =>{
            if(todo.status){
                console.log(`${id}. [x] ${task}`);
            }else{
                console.log(`${id}. [ ] ${task}`);
            }
        }) 
        );
     }
}
module.exports = View;
