//creating 
let student = {
    name: 'Ravi',
    age:25,
    basic: 100000,
    mobile:12345,
    updateAge: function(age){
        return age+10
    },
    address :{
        pincode: 500037,
        city:"Hyd"
    } 
}
//accessing - using .key and ['key']
console.log(student.name);
console.log(student['age']);
// inserting newkey 
student.marks = 98
console.log(student.marks);
//deleting key 
delete student.marks
//update 
student.basic = student.basic+8000
console.log(student.basic);
//accesing function
console.log(student.updateAge(student.age));
//accessing obj in obj 
console.log(student.address.city);
console.log(student.address.pincode);
//iterating obj 
for(let v in student){
    console.log(v," is ",student[v]);
}
for(let v in student){
    console.log(v," is ",student.v); // prints undefined
}