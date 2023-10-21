import React ,{ Component }from "react"; 
import ComponentTwo from "./ComponentTwo";
import { MyConsumer } from "./ContexFile";

class ComponentOne extends Component {
    render(){
        return(     
        <div>
            <MyConsumer>
                {
                    (value)=>{
                        return(
                            <>
                             <h1>Component One{value}</h1>
            
                             <ComponentTwo></ComponentTwo>
                            </>
                        )
                    }
                }
            </MyConsumer>

        </div>)

    }
}


export default ComponentOne;