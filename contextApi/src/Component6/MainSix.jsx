import { Component } from "react";
import { MessageAccessProvider } from "./ContextSix";



export default class MainSix extends Component{
    constructor(props){
        super(props);
        this.state={
            Student:[
                {Name:"Pavan",age:"21"},
                {Name:"Kumar",age:"21"},
                {Name:"Kalyan",age:"23"},
                {Name:"Ashraff",age:"22"},
            ]
        }
    }
    render(){
        return(
            <div>
                <MessageAccessProvider value={this.state}>
                    
                </MessageAccessProvider>
            </div>
        )
    }
}