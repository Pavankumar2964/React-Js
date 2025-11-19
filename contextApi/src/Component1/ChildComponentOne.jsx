import { Component } from "react";
import { MessageAccessConsumer } from "./ContextComponentOne";


export default class ChildComponentOne extends Component{
    render(){
        return(
            <div>
               <MessageAccessConsumer>
  {(value) => {
    console.log(value);
    return (
      <div>
        <h2>{value.message}</h2>

        <h3>Person Name: {value.person.name}</h3>

        <h3>Student Details:</h3>
        <p>Name: {value.person.student.Name}</p>
        <p>ID: {value.person.student.Id}</p>
        <p>Email: {value.person.student.Email}</p>
        <p>Age: {value.person.student.Age}</p>
      </div>
    );
  }}
</MessageAccessConsumer>

            </div>
        );
    }
}