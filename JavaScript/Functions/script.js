//Functions ->camelCase(lower)

//3.Types
//1.Funtion Declaration
function findSum(a,b){
    return a+b;
}
//calling function
let sum = findSum(5,6)
console.log(sum)
console.log(findSum(20,30))

//function expression
let findDiff = function(a,b){
    return a-b
}
console.log(findDiff(20,30))
//or
diff=findDiff(60,40)
console.log(diff)

//arrowfunction(simplyfying fun expression)
let findProduct=(a,b)=>a*b
product = findProduct(3,9)
console.log(product)