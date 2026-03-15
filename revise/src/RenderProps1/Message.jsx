import { Component } from "react";


export default class Message extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.hello}</h2>
                <p>{this.props.sayHello}</p>
                <p>I am from message Component</p>
                <hr/>
                <h2>{this.props.msg}</h2>
            </div>
        )
    }
}
