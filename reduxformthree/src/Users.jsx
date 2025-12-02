import React from "react";
import Userstable from "./Userstable";
import UserForm from "./UsersForm";
import { useSelector } from "react-redux";

const Users = () => {
    // 1. Get the users array from the Redux store
    // Matches the reducer name "UserInfo" in store.js and "usersArry" in UserSlice.js
    const users = useSelector((state) => state.UserInfo.usersArry);

    return (
        <div>
            <h2>Welcome to Users</h2>
            <hr />
            {/* 2. Pass the actual array variable, not the component name */}
            <Userstable users={users} />
            <br />
            <hr />
            <UserForm />
        </div>
    )
}
export default Users;