import React ,{ Component }from "react"; 
import ComponentFive from "./ComponentFive";

class ComponentFour extends Component {
    render(){
        return(
            <div>
            <h4>Component Four</h4>
            <ComponentFive></ComponentFive>
        </div>
        )
     
    }
}


export default ComponentFour;