//Array of objects
let student = [{sno: 1, name: "Ravi",marks:98},{sno: 1,name: "Anand",marks:97},{sno: 1,name: "Deva",marks:94}]
let emps =[
    {
        eno:1,
        name:'Raja',
        age:24,
        salary:60000,
        skills:['react','java']
    },
    {
        eno:2,
        name:'Venky',
        age:34,
        salary:80000,
        skills:['nextjs','nodejs']
    },{
        eno:3,
        name:'Manasa',
        age:27,
        salary:20000,
        skills:['angular','python']
    }
]
for(empObj of emps){
    console.log(empObj);
    for(k in empObj){
        console.log(k ," is ",empObj[k]);
    }
}