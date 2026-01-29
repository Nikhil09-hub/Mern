testArr = [1,2,3,4,5]
//accessing elements arr[index]
//for loop
for(let index =0;index<testArr.length;index++){
    console.log(testArr[index]);
}
//while loop
index = 0
do{
    console.log(testArr[index]);
    index++
}while(index != testArr.length)
//while - similar syntax 
// for of loop
for( let v of testArr){
    console.log(v);
}
//insering elements
//begin - unshift
testArr.unshift(16,54,43)
//end - push
testArr.push(34,56,76)
//specified index - splice(index,no of elements to delete)
testArr.splice(3,0,433,6554)
console.log(testArr);


//deleting elements
//begin - shift
testArr.shift();
//end - pop
testArr.pop()
//specifiedindex - splice
testArr.splice(3,3)
console.log(testArr)


//Update elements
testArr.splice(4,1,67)
console.log(testArr)
