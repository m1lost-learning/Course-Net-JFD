class View {
    static help() {
        console.log('Task List :');
    }

    static show(todos) {
     todos.forEach((todo) =>{
            if(todo.status){
                console.log(`${todo.id}. [x] ${todo.task}`);
            }else{
                console.log(`${todo.id}. [ ] ${todo.task}`);
            }
        }) 
            
    }
     
}
module.exports = View;
