function getDatafromAPI(){
    //make API req
    fetch('https://jsonplaceholder.typicode.com/posts').then(res=>console.log("Accepted",res)).catch(()=>console.log("Rejected:"))
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())//convert json into javascript it returns another promise
    .then(data =>console.log(data)).catch(err => console.log(err))
}
getDatafromAPI()
console.log("Asynchronous Events");