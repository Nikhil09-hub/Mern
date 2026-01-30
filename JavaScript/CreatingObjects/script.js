//object literal {properties}
let student1 = {
    name:"Ravi",
    age: 14,
    marks:98
}
//constructor function ->blueprint
class Person{
        //a special method to initilize current object
        constructor(pid, name, city){
            this.pid=pid;
            this.name=name;
            this.city=city;
        }

        getName(){
            return this.name;
        }
    }
//Create objects of that blueprint
let p1 = new Person(1, 'ravi', 'hyd',)
let p2 = new Person(2, 'kiran', 'chennai')
console.log(p1.getName())
console.log(p2)
