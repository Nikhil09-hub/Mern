//What is error
//console.log(a);
//Uncaught ReferenceError: a is not defined at script.js:2:13
//Excecution stops after error occurs
console.log('one');
console.log('two');
console.log('three');
try{
console.log(a);
}catch(err){
console.log(err);
}

