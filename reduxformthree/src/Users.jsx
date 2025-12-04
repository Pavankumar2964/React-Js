import React from "react";
import Userstable from "./Userstable";
import UserForm from "./UsersForm";
import { useSelector,useDispatch } from "react-redux";
import { createUserAction, deleteUserAction } from "./userSlice";

const Users = () => {
    // 1. Get the users array from the Redux store
    const users = useSelector((state) => state.UserInfo.usersArry);
    const dispatch=useDispatch();
    
    // FIX 1: Changed userDetails to users
    console.log(users); 

    const deleteUser=(user)=>{
        console.log(user);
        dispatch(deleteUserAction(user));
    };
    const addUser=(user)=>{
        dispatch(createUserAction(user));
    };
    return (
        <div>
            <h2>Welcome to Users</h2>
            <hr />
            {/* FIX 2: Changed userDetails to users */}
            <Userstable users={users} deleteUser={deleteUser} />
            <br />
            <hr />
            <UserForm addUser={addUser} />
        </div>
    )
}
export default Users;