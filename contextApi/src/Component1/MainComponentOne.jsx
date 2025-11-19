import { Component } from "react";
import { MesssageAccessProvider } from "./ContextComponentOne";
import ChildComponentOne from "./ChildComponentOne";





export default class MainComponentOne extends Component{
    constructor(props){
        super(props);
        this.state={
            message:"Main Component Message sending to parent Component",
            person:{
                name:"Pavan",
                student:{
                    Name:"Pavan",
                    Id:"22PK29",
                    Email:"Pavankumar29ctr@gamil.com",
                    Age:"21",
                }
            },
        };
    }
    render(){
        return(
            <div>
                <MesssageAccessProvider value={this.state}
                >
                    
                    <ChildComponentOne/>
                </MesssageAccessProvider>
            </div>
        )
    }
}