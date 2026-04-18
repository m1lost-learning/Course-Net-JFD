
const product= [
    { 
    name: "Laptop",
    price: 15000
    },
    {
    name: "Mouse",
    price: 200
    },
    {
    name: "Keyboard",
    price: 500
    },
    {
    name: "Monitor",
    price: 3000
    }

];
 
// function filter
const productFilter = product.filter(
    function(item){ 
        return item.price > 1000;
    }
);

console.log(productFilter);
console.log();

// function forEach
productFilter.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name}`);
});
console.log();

// view by index
console.log(product[0].name);
console.log();

// function map
const productMap = product.map(
    function(item){
        return item.name;
    }
);

console.log(productMap);
console.log();

productMap.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});
console.log();

