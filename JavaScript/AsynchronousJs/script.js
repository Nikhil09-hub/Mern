console.log('first');
console.log('second');
console.log('third');
//network request(2min)
//loops excecute synchronously
//for(i = 0;i<1000000000;i++){}
setTimeout(() => {
    console.log('Message after 3 seconds');
}, 3000);
console.log('last line');
//promise object referts to he eventual completion (or failure ) of asynchronous operation and resulting value
//1. creates promise(creator) --> 2. consumes promise(consumer)

//Promise -> I will call you in 5 minutes
let yourAvailabilityAfter5Min = false;
//create promise


setTimeout(() => {
    console.log("You promise to call your friend after 5 min");
},4000);
let callingPromise = new Promise((fulfilled,rejected)=>{

    setTimeout(() => {
    if (yourAvailabilityAfter5Min === true){
        fulfilled('Hello friend .....')
    }else{
        rejected('Sorry')
    }
    
}, 5000);

})
callingPromise
.then(message => console.log("Fulfilled State:",message))
.catch(message => console.log("Rejected State:",message))