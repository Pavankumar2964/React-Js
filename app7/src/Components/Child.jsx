import { Component } from "react";


export default class Child extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.newmessage}</h1>
            </div>
        )
    }

}