import React from "react";
import {useSelector} from "react-redux";
import Usertable from "./Userstable";


const Users=()=>{
    const userDetails=useSelector((state)=>state.userInfo.usersArray);
    console.log(userDetails);
    return(
        <div>

            <h2>Welcome to UserForm Table</h2>
<Usertable displayUsers={userDetails}/>
        </div>
    )
}
export default Users;