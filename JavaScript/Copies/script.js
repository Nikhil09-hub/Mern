//Copy of primitives
let username = 'Ravi'
let copyUsername = username;
console.log("Original username:",username);
console.log("CopyUsername ",copyUsername);
username = 'Ravi Kumar'
console.log("Original username:",username);
console.log("CopyUsername ",copyUsername);

//Copy of non primitives 
let person = {
    pid:100,
    name:'Anand'
}
//Spread operator ... should be used if not copies for refereces are made not for the objects
let copyPerson = {...person}
console.log("Person Object :",person);
console.log("Perosn object copy",copyPerson);

//deepcopy for nested objects
let emp = {
    empId:100,
    name:'ravi',
    address:{
        city:'hyd',
        pincode:500037
    }
}
let copyEmp = {...emp}
emp.empId = 123
emp.address.city = 'chennai'
console.log("emp :",emp);
console.log("Copy object : ",copyEmp);