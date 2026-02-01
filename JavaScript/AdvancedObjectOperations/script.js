let product = {
    pid:1234,
    name:'TV',
    brand:'Sony',
    price:50000
}
//Get all keys
//Retuens array
console.log(Object.keys(product));
console.log(Object.values(product));

//Freeze ->Restrict modification
Object.freeze(product)
product.brand = 'LG'
product.price=100000
console.log(product);