import { Component } from "react";
import { MessageAccessConsumer } from "./ContextCompThree";



export default class ChildComponentThree extends Component{
    render(){
        return(
            <div>
                <MessageAccessConsumer>
                    {(value)=>{
                        console.log(value);
                        return(
                            <div>
                                <h2>{value.message}</h2>
                                {/* <ul>
                                    <li>{value.Person.Name}</li>
                                    <li>{value.Person.age}</li>
                                    <li>{value.Person.Id}</li>
                                </ul> */}

            
                                {value.students.map((result)=>{
                                    return(
                                        <ul>
                                            {Object.values(result).map((val)=>{
                                                return <li>{val}</li>
                                            })}
                                        </ul>

                                    )
                                })}
                            </div>
                        )
                    }}
                </MessageAccessConsumer>
            </div>
        )
    }
}