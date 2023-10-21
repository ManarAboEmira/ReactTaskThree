import React ,{ Component }from "react"; 
import {MyConsumer} from './ContexFile'

class ComponentFive extends Component {
    render(){
        return(
            <div>
                <MyConsumer>{
                    (value) =>{
                        return( <h5>Component Five{value}</h5>)
                    }
                    }</MyConsumer>
           
        </div>
    )

    }
}


export default ComponentFive;