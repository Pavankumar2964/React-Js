import { Component } from "react";
import { MessageAccessProvider } from "./ContextCompFive";
import ChildComponentFive from "./ChildComponentFive";


export default class MainComponentFive extends Component{
    constructor(props){
        super(props);
        this.state={Student:[
            {Name:"Pavan",age:"21",Id:"22pk29"},
            {Name:"Koushik",age:"6",Id:"22kk18"},
            {Name:"Advik",age:"3",Id:'22ad09'},
        ]}
    }
    render(){
        return(
            <div>
                <MessageAccessProvider value={this.state}>
                 <ChildComponentFive/>   
                </MessageAccessProvider>
            </div>
        )
    }
}