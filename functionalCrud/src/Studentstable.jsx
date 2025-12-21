import React from "react";
export const Studentstable = ({
    studentsArray, handleDeleteStudent, handleEditStudent
}) => {
    return (
        <div>
            <h2>Welcome to Studentstable component</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {studentsArray.map((std, i) => {
                        return (
                            <tr key={i}>
                                <td>{std.fName}</td>
                                <td>{std.lName}</td>
                                <td>{std.email}</td>
                                <td><button onClick={() => {
                                    handleEditStudent(i)
                                }}>Edit</button></td>
                                <td><button onClick={() => {
                                    handleDeleteStudent()
                                }}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}