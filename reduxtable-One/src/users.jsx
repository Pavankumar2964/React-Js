import React from "react";
import {useSelector } from "react-redux";
import Userstable from "./Userstable";

const Users=()=>{
    const userDetails =useSelector((state)=>state.userInfo.usersArray);
console.log(userDetails);
return(
    <div>
        <h2>Welcome to Users From Table</h2>
        <Userstable displayUsers={userDetails}/>
    </div>
)
}
export default Users;
