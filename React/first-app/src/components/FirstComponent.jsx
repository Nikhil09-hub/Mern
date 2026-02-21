import './FirstComponent.css' //linking to css file 
// create new component 
function FirstComponent(){ // funcrion name should be same as component name
    //state -> Dynamic content
    let username = "Manasa"
    let id = 100
    let person = {
        pid:101,
        city:'Hyderabad'
    }
    let marks = [10,20,30,40,50,10]
    function test(){
        console.log('test called')
    }
    function findSum(a,b){
        console.log(a+b)
    }
    //every react component should return react element
    return (
        <div>
            <h1 className='text-success'>Welcome to react</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Username:{username}</p>
            <p>UserId:{id}</p>
            <h2>{person.pid}</h2>
            <h2>{person.city}</h2>
            {
                marks.map((element,index)=><h3 key={index}>{element}</h3>)
            }
            {/* Dont call the test function */}
            <button onClick={test}>Click</button>
            <button onClick={()=>findSum(5,10)}>Sum</button>
                
        </div>
    )

}
export default FirstComponent;
//for ,while,for of ... etc(Cannot return)
//ForEach(cant return)
//filter(selection) map iterate and return i.e map -> is used