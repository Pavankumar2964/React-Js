import { Component } from "react";
import { MessageAccessProvider } from "./ContextComponentTwo";
import ChildComponentTwo from "./ChildComponentTwo";




export default class MainComponentTwo extends Component{
    constructor(props){
        super(props);
        this.state={
            message:"Main ComponentTwo Messagemsending to ChildComponentTwo",
        person:{
            Name:"Pavankumar",
            Age:"21",
            Id:"22pk29",
        }
        }
    }
    render(){
        return(
            <div>
                <MessageAccessProvider value={this.state}>
                    <ChildComponentTwo/>
                </MessageAccessProvider>
            </div>
        )
    }
}