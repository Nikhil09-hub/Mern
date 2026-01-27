//global scope 
let a = 10

function test(){
    // function scope
    let b=20
    if(true){
    let c =30
    }
    //console.log(c); ->eroor
}
 test()
console.log(a);
//console.log(b); -> eroor

if(true){
    let c =30
}
//global > function > block 