
const product= [
    { 
    name: "Laptop",
    harga: 15000
    },
    {
    name: "Maouse",
    harga: 200
    },
    {
    name: "Keyboard",
    harga: 500
    },
    {
    name: "monitor",
    harga: 3000
    }

];
 
const productFilter = product.filter(
    function(item){ 
        return item.harga > 1000;
    }
);

console.log(productFilter);

console.log(product[0].name);