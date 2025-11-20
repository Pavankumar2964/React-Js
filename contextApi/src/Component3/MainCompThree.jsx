import { Component } from "react";
import { MessageAccessProvider } from "./ContextCompThree";
import ChildComponentThree from "./ChildComponentThree";




export default class MainCompoThree extends Component{
    constructor(props){
        super(props);
        this.state={
            message:"Main ComponentThree Message Sending to ChildComponet",
            Person:{
                Name:"Pavan",
                age:"21",
                Id:"22pk29",
            },
            students : [
    { name: "Pavan", age: 22 },
    { name: "Kumar", age: 21 },
    { name: "Ravi", age: 23 },
]

        }
    }
    render(){
        return(
            <div>
                <MessageAccessProvider value={this.state}>
                    <ChildComponentThree/>
                </MessageAccessProvider>
            </div>
        )
    }
}