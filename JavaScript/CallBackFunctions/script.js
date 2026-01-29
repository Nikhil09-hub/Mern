function test(a){
    console.log(a);
}
//a callback function is a function passed as an argument to another funtion
test(function(){
    console.log("This is anonyomous function");
});
function test1(a){
    a()
}
test1(function(){
    console.log("This is anonyomous function");
});
//sync callbacks

let arr = [23,12,45,-17,67,91]
//Filter (selection)
let resultOfFilter = arr.filter((element)=>element >20 && element<70)
console.log(resultOfFilter);
 
//Map(modification)
let resultOfMap =arr.map((element) => {element +10;} )
console.log(resultOfMap);

//find->returns no if found else undefined
let resultOfFind = arr.find((element)=>element == 67)
let resultOfFind1 = arr.find((element)=>element == 69)
console.log(resultOfFind);
console.log(resultOfFind1);
//Search by index
let resultOfFindIndex = arr.findIndex(element => element==45)
console.log(resultOfFindIndex);
let resultOfFindIndex1 = arr.findIndex(element => element==47)
console.log(resultOfFindIndex1);//returns -1
//reduce --> (previous value,current value)
let resultOfReduce = arr.reduce((accumulator,element) =>accumulator+element )
//foreach(iteration)
arr.forEach((element,index)=>{
    console.log("Element:",element);
    console.log("Index: ",index);
})
//sort -->
//let resultOfSort = arr.sort((a,b)=> a<b?-1:a>b?1:0)
//console.log(resultOfSort);
console.log(arr);
//tosorted --> returns a new sorted array and keeps original array same
let resultOfToSorted = arr.toSorted((a,b)=>a-b)
console.log(resultOfToSorted);



