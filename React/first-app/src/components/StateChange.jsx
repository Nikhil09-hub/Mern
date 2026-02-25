import {useState} from 'react'
function StateChange(){
    //State
    //useState(intialState)
    let [counter,setCounter]=useState(0)//[State,function to change state]
    const counterIncrement=()=>{
        setCounter(counter+1)
    }
    return(
        <div>
           <h1 className="text-info  bg-white display-3">State Demo</h1> 
           <h1 className="text-danger display-4">{counter}</h1>
           <button className="btn btn-sm btn-info" onClick={()=>{counterIncrement()}}>Click</button>
        </div>
    )
}

export default StateChange