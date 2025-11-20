import { Component } from "react";
import { MessageAccessConsumer } from "./ContextCompomnentFour";


export default class ChildComponentFour extends Component{
    render(){
        return(
            <div>
                <MessageAccessConsumer >
                    {(value)=>{
                        console.log(value)
                        return(
                            <div>
                                {value.Student.map((result)=>{
                                    return(
                                        <ul>{Object.values(result).map((val)=>{
                                            return<li>{val}</li>
                                        })}</ul>
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