import { Component } from "react";
import { MessageAccessConsumer } from "./ContextComponentOne";


export default class ChildComponentOne extends Component{
    render(){
        // The declaration of StudentList must be inside the consumer function
        // where 'value' is defined and accessible.
        
        return(
            <div>
        <MessageAccessConsumer>
  {(value) => {
    // 'value' is defined here by the Context API.
    console.log(value)
    
    // Move the definition of StudentList here
    const StudentList=Object.entries(value.student) 
    
    return (
      <div>
        <h2>{value.message}</h2>

        <h3>Person Details</h3>
        <ul>
          <li>Name: {value.person.name}</li>
        </ul>

        <h3>Student Details</h3>
        
        <ul>
                        {/* Now StudentList is correctly defined and can be mapped */}
                        {StudentList.map(([Key,val])=>(
                            <li key={Key}>
                                {Key}:{val}
                            </li>
                        ))}
                    </ul>
      </div>
    );
  }}
</MessageAccessConsumer>


            </div>
        );
    }
}