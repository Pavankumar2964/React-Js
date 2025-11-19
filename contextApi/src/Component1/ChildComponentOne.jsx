import { Component } from "react";
import { MessageAccessConsumer } from "./ContextComponentOne";


export default class ChildComponentOne extends Component{
    render(){
        return(
            <div>
        <MessageAccessConsumer>
  {(value) => {
    console.log(value)
    return (
      <div>
        <h2>{value.message}</h2>

        <h3>Person Details</h3>
        <ul>
          <li>Name: {value.person.name}</li>
        </ul>

        <h3>Student Details</h3>
        <ol>
          <li>Name: {value.person.student.Name}</li>
          <li>ID: {value.person.student.Id}</li>
          <li>Email: {value.person.student.Email}</li>
          <li>Age: {value.person.student.Age}</li>
        </ol>
      </div>
    );
  }}
</MessageAccessConsumer>


            </div>
        );
    }
}