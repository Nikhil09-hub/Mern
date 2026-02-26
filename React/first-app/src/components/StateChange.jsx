import {useState} from 'react'
function StateChange(){
    //State
    //useState(intialState)
    let [counter,setCounter]=useState(0)//[State,function to change state]
    const counterIncrement=()=>{
        setCounter(counter+1)
    }
    let [username,setUsername]=useState('Ravi')
    const userNameChange=()=>{
        setUsername('Ravi Kumar')
    }
    return(
        <div>
           <h1 className="text-info  bg-white display-3">State Demo</h1> 
           <h1 className="text-danger display-4">{counter}</h1>
           <button className="btn btn-sm btn-info" onClick={()=>{counterIncrement()}}>Click</button>
           <h1 className="text-danger display-4">{username}</h1>
           <button className="btn btn-primary btn-sm" onClick={()=>{userNameChange()}}>ChangeName</button>
        </div>
    )
}

export default StateChange