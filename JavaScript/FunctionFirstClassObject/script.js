// Function can be stored in a variable
let a = function(){
}

// Function can be passed as an argument
function test(x){
    console.log(x);
}

test(a)

//fucntion can also return a function -> used to create factory functions
//factory functions - > functions which create another function
 let createGreeter = function(time){

    return function(name){
        console.log(`Good ${time} to ${name}`);
    }
 }
let morningGreeter = createGreeter('morning')
morningGreeter('Ravi')

