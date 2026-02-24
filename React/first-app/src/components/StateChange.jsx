function StateChange(){
    //State
    let counter =0
    const counterIncrement=()=>{
        counter = counter+1
        console.log(counter)
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