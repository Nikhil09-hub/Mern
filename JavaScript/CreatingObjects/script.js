//object literal {properties}
let student1 = {
    name:"Ravi",
    age: 14,
    marks:98
}
function Student(name, age, marks){
            this.name=name;
            this.age=age;
            this.marks=marks;
            // this.getName=function(){
              //  return this.name
            //}
        }




//Adding methods to prototype of the constructor
Student.prototype.getName=function(){
    return this.name
}
//Create objects of that blueprint
let s1 = new Student('Anand',18,99)
let s2 = new Student('Manasa',19,81)
console.log(s1)
console.log(s1.getName());

//new syntax class
class Person{
    constructor(name,pid,city){
        this.name = name,
        this.pid = pid,
        this.city = city
    }
     getName=function(){
                return this.name
            }
}