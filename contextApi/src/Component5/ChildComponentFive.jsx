import { Component } from "react";
import { MessageAccessConsumer } from "./ContextCompFive";


// ChildComponentFive.jsx (Corrected)
import { Component } from "react";
import { MessageAccessConsumer } from "./ContextCompFive";


export default class ChildComponentFive extends Component{
    render(){
        return(
            <div>
                <MessageAccessConsumer>{(value)=>{
                     console.log(value) 
                    return (
                        <div>
                           
                            {value.Students.map((result)=>{
                                return(
                                    <ul key={result.Id}> 
                                        {Object.values(result).map((val, index)=>{
                                          
                                            return <li key={index}>{val}</li>
                                        })}
                                    </ul>
                                )
                            })}
                        </div>
                    )
                }}</MessageAccessConsumer>
            </div>
        )
    }
}