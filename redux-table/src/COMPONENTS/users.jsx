import React from "react";
import { useSelector} from "react-redux";
import UsersTable from "./UsersTable";


const Users=()=>{
    const userDetails=useSelector((state)=>state.userInfo.usersArray);
console.log(userDetails);
return(
    <div>
        <h2>welcome to userFromTable</h2>
        <UsersTable displayUsers={userDetails}/>
    </div>
)
}
export default Users;
