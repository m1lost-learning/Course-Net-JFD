//function sycronous
function main(param1, param2, callback) {
    console.log(param1, param2);
    callback();
}

function callback() {
    console.log('callback function');
}   

main(1, 2, callback);

//function asycronous
function p1(){
    console.log('Done p1');
}

function p2(){
    setTimeout(() => {
        console.log('Done p2');
    }, 600);   
}

function p3(){
    console.log('Done p3');
}

p1();
p2();
p3();
