import { Component } from "react"
import { MessageAccessConsumer } from "./ContextComponentTwo"



export default class ChildComponentTwo extends Component{
render(){
    return(
        <div>
            
            <MessageAccessConsumer>
                {(value)=>{
                    console.log(value);
                    
                    return(
                        <div>
                            <h2>{value.message}</h2>
                            <ul>
        
        
                                <li>{value.person.Name}</li>
                                <li>{value.person.Age}</li>
                                <li>{value.person.Id}</li>
                            </ul>
                        </div>
                    )
                }}
            </MessageAccessConsumer>
        </div>
    )
}
} 