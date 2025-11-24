import {Component, createContext} from "react";
import { MessageAccessProvider } from "./ContextCompFive";
import ChildComponentFive from "./ChildComponentFive";


export default class MainComponentFive extends Component{
    constructor(props){
        super(props);
        this.state={
            Students:[
                {Name:"Pavan",age:"21",Id:"22pk29"},
                {Name:"Kumar",age:"21",Id:"22kr22"},
                {Name:"Yaswant",age:"21",Id:"22yk23"},
            ]
        }
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
