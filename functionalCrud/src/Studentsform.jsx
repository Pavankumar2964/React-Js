import React from "react";

export const Studentform = ({
    student, handleChange, handleSubmit, handleUpdateStudent, editIndex,
}) => {
    return (
        <div>
            <h2>Welcome to StudentsForm</h2>

            <form>
                <label htmlFor="">First Name :</label>
                <input type="text" name="fName" value={student.fName} onChange={handleChange} />{" "}
                <br />
                <label htmlFor="">Last Name :</label>
                <input type="text" name="lName" value={student.lName} onChange={handleChange} />{" "}
                <br />
                <label htmlFor="">Email:</label>
                <input type="email" name="email" value={student.email} onChange={handleChange} />{" "}
                <br />
                {editIndex == null ? (
                    <button type="button" onClick={handleSubmit}>{" "} Add Student {" "}</button>
                ) : (
                    <button type="button" onClick={handleUpdateStudent}>{" "}Update Student {" "}</button>
                )}
            </form>
        </div>
    )
}