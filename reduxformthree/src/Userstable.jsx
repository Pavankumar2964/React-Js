import React from "react";

export default function Userstable({users}){
    return(
        <div style={{padding:"20px"}}>
            <h2>Users List</h2>
            <table border={2}
            cellPadding={10}
            style={{borderCollapse:"collapse",width:"100%"}}
            >
              <thead>
                <tr>
                    <th style={StyleSheet.th}>ID</th>
                    <th style={StyleSheet.th}>Name</th>
                    <th style={StyleSheet.th}>Email</th>
                    <th style={StyleSheet.th}>Role</th>
                    <th style={StyleSheet.th}>Age</th>
                    <th style={StyleSheet.th}>city</th>
                    <th style={StyleSheet.th}>Edit User</th>
                    <th style={StyleSheet.th}>Delete User</th>
                </tr>
                </thead>  
                
                   
<tbody>
    {users.map((user)=>(
        <tr key={user.id}>
            {/* Fix: Change StyleSheet to Styles */}
            <td style={Styles.td}>{user.id}</td>
            <td style={Styles.td}>{user.name}</td>
            <td style={Styles.td}>{user.email}</td>
            <td style={Styles.td}>{user.role}</td>
            
            {/* Fix: Added missing Age column */}
            <td style={Styles.td}>{user.age}</td> 
            
            <td style={Styles.td}>{user.city}</td>
            <td style={Styles.td}>Edit User</td>
            <td style={Styles.td}>DeleteUser</td>
        </tr>
    ))}
</tbody>       
            </table>
        </div>
    )
}


const Styles={
    th:{border:"1px solid #ccc"},
    td:{border:"1px solid #ccc"},
};