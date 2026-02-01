//Instance and static variable
class Student{
    constructor(firstname,lastname,id){
        //instance properties i.e part of objects
        this.firstname=firstname,
        this.lastname=lastname,
        this.id=id
    }
    static clgName = 'VNR'
    static pincode = 500037

    getFullName(){
        return this.firstname + " " + this.lastname;
    }
    static getClgName(){
        return Student.clgName
    }
}
//creating obj
let s1 = new Student('Ravi','Kiran',101);
let s2 = new Student('Suresh','Kumar',102);
//console.log(getFullName()); ->Not possible bcz it is instance methods i.e called only on objects
console.log(s1.getFullName());
console.log(s2.getFullName());
console.log(Student.clgName,Student.pincode);
console.log(Student.getClgName());