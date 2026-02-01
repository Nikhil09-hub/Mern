//Inheritance = properties of parent -> child
//Parent or BaseClass
class Person{
    constructor(name,age,address){
        this.name=name;
        this.age=age
        this.address=address
    }
}

//Student is a person
//Child or Subclass or Derived class
class Student extends Person{
    constructor(name,age,address,marks,fee){
        //super refers to parent class constructor
        super(name,age,address)
        this.marks = marks
        this.fee= fee
    }
}
//Employee is a person
class Employee extends Person{
    constructor(name,age,address,companyName,salary){
        super(name,age,address)
        this.companyName=companyName
        this.salary=salary

    }
}
let s1 = new Student('Anand',19,'Hyderabad',97,100000)
console.log(s1);
//object(datatype)
//Object (root constructor)->Parent of every class