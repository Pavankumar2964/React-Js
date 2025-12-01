import React from "react";

export default function Userstable({displayUsers}){
    return(
        <div>
            <h2>users list</h2>
            <table border={1}>
                <thead>
                    <tr style={{background:"white"}}>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Role</th>
                    </tr>
                    
                </thead>
                <tbody >
                    {displayUsers.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}