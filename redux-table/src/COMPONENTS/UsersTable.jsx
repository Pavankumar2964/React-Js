import React from "react";

export default function UsersTable({displayUsers}){
    return(
        <div style={{padding:"20px"}}>
            <h2>User List</h2>
            <table border={1} cellPadding={10} 
            style={{borderCollapse:"collapse",width:"100%"}}
            >
                <thead>
                    <tr style={{background:"#f2f2f2"}}>
                     <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Role</th>   
                    </tr>
                </thead>
                <tbody>
                    {displayUsers.map((user)=>(
                        <tr key={user.id}>
                            <th>{user.id}</th>
                            <th>{user.name}</th>
                            <th>{user.email}</th>
                            <th>{user.age}</th>
                            <th>{user.role}</th>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}