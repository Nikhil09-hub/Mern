
import './App.css' //linking to css file 
import Product from './components/Product.jsx';
import FirstComponent from './components/FirstComponent.jsx';   
// create new component 
function App(){ // funcrion name should be same as component name
    //state -> Dynamic content
    
    //every react component should return react element
    return (
        <div>
            {/* Nest product component */}
            <Product></Product> 
            <FirstComponent></FirstComponent>
        </div>
    )

}
export default App
//for ,while,for of ... etc(Cannot return)
//ForEach(cant return)
//filter(selection) map iterate and return i.e map -> is used