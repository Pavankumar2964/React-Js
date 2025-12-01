import React from "react";
import Users from "./Users";

export default function Usertable({displayUsers}){
    return(
        <div>
            <h2>
                userslist
            </h2>
            <table border={2}>
                <thead>
                    <tr>
                       <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Role</th>  
                    </tr>
                </thead>
                <tbody>
                    {displayUsers.map((User)=>(
                        <tr key={User.id}>
                             <td>{User.id}</td>
              <td>{User.name}</td>
              <td>{User.email}</td>
              <td>{User.age}</td>
              <td>{User.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}