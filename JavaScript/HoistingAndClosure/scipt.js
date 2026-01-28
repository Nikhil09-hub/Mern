//  declarations are conceptually moved to the top during the compilation phase
let a = 10;
 

let sum = function(){

}

sum()



// let a;
// a = 10

// let sum
sum() 
//sum = function(){}

//closure- function can be stored returned and stored (functional prograpping in js)
//closure - function + its outside state
function test(){
    let a = 10;
    return function sum(){
        b = 20
        return a+b
    }
}
console.log(test);
console.log(test());
result = test()
console.log(result());