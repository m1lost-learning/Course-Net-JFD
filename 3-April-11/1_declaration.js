
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
    name: "monitor",
    price: 3000
    }

];
 
const productFilter = product.filter(
    function(item){ 
        return item.price > 1000;
    }
);

console.log(productFilter);

console.log(product[0].name);