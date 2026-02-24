
import './App.css' //linking to css file 
//import Product from './components/Product.jsx';
import FirstComponent from './components/FirstComponent.jsx';   
import StateChange from './components/StateChange.jsx';
// create new component 

function App(){ // funcrion name should be same as component name
    //state -> Dynamic content
    
    //every react component should return react element

    //let productList = [{pid:101,pname:'TV',price:100000,},{pid:102,pname:'Washing Machine',price:200000,},{pid:103,pname:'Fridge',price:300000,}]
    return (
        //<div>
          //  {/* Nest product component */} 
            //<Product data={productList[0]}/>
            //<Product data={productList[1]}/>
            //<Product data={productList[2]}/>
            //{/*<FirstComponent></FirstComponent>*/}
        //</div> 
        <div>
            <StateChange></StateChange>
        </div>
    )

}
export default App
//for ,while,for of ... etc(Cannot return)
//ForEach(cant return)
//filter(selection) map iterate and return i.e map -> is used