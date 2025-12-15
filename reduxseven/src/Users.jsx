import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction, createUserAction } from "./UserSlice";
import UsersForm from "./UsersForm";
import UsersTable from "./UsersTable";

const Users = () => {
  const userDetails = useSelector(
    (state) => state.userInfo.usersArray
  );

  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(deleteUserAction({ id }));
  };

  const addUser = (user) => {
    dispatch(createUserAction(user));
  };

  return (
    <div>
      <h2>Welcome to Users</h2>
      <UsersForm addUser={addUser} />
      <UsersTable users={userDetails} deleteUser={deleteUser} />
    </div>
  );
};

export default Users;
