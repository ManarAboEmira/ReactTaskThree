import React ,{ Component }from "react"; 
import ComponentFour from "./ComponentFour";
import { MyConsumer } from "./ContexFile";

class ComponentThree extends Component {
    render(){
        return(
             <div>
                <MyConsumer>
                    {
                        (value)=>{
                            return(<>
                                <h3>Component Three {value}</h3>
                                <ComponentFour></ComponentFour>
                            </>


                            )
                        }
                    }
                </MyConsumer>

        </div>
    )}
       
}


export default ComponentThree;