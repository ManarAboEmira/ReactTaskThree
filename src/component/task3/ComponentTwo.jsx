import React ,{ Component }from "react"; 
import ComponentThree from "./ComponentThree";

class ComponentTwo extends Component {
    render(){
        return( <div>
            <h2>Component Two</h2>
            <ComponentThree></ComponentThree>
        </div>)
       
    }
}


export default ComponentTwo;