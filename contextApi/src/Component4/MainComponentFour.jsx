import { Component } from "react";
import { MessageAccessProvider } from "./ContextCompomnentFour";
import ChildComponentFour from "./ChildCompoonentFour";




export default class MainComponentFour extends Component{
    constructor(props){
        super(props);
        this.state={
            Student:[
                {Name:"Pavan",age:"21",Id:"22pk29"},
                {Name:"Koushik",age:"6",Id:"2273jd"},
                {Name:"Adhvik",age:"3",Id:"22jkd22"},
            ]
            
        }
    }
    render(){
        return(
            <div>
                <MessageAccessProvider value={this.state}>
                    <ChildComponentFour/>
                </MessageAccessProvider>
            </div>
        )
    }
}