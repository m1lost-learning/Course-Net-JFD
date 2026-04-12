class View {
    static help() {
        console.log('Task List :');
    }

    static show(datas) {
     datas.forEach((data) =>{
            const { id, task } = data;

            if(data.status){
                console.log(`${id}. [x] ${task}`);
            }else{
                console.log(`${id}. [ ] ${task}`);
            }
        })   
    }
     
}
module.exports = View;
