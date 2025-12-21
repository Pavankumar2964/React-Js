import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Studentform } from './Studentsform'
import { Studentstable } from './Studentstable'


function App() {
  const [student, setStudent] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const [studentsArray, setStudentsArray] = useState([
    { fName: "Pavan", lName: "kumar", email: "pavankumar@gmail.com" },
    { fName: "Pavan", lName: "kumar", email: "pavankumar@gmail.com" },
    { fName: "Pavan", lName: "kumar", email: "pavankumar@gmail.com" },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const handleChange = (e) => {
    console.log(e);
    const newStudent = { ...student };
    newStudent[e.target.name] = e.target.value;
    setStudent(newStudent);
  };
  const handleSubmit = () => {
    const newStudentArray = [...studentsArray];
    newStudentArray.push(student);
    setStudentsArray(newStudentArray);
    clearForm();
  };

  const clearForm = () => {
    setStudent({
      fName: "",
      lName: "",
      email: "",
    });
  };

  const handleDeleteStudent = (i) => {
    const newStudents = [...studentsArray];
    newStudents.splice(i, 1);
    setStudentsArray(newStudents);
  };

  const handleEditStudent = (i) => {
    setStudent(studentsArray[i]);
    setEditIndex(i);
  };

  const handleUpdateStudent = () => {
    const newStudents = [...studentsArray];
    newStudents[editIndex] = student;
    setStudentsArray(newStudents);
    clearForm();
    setEditIndex(null);
  };

  return (
    <>
      <Studentform
        student={student}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleUpdateStudent={handleUpdateStudent}
        editIndex={editIndex}
      />
      <hr />
      <Studentstable
        studentsArray={studentsArray}
        handleDeleteStudent={handleDeleteStudent}
        handleEditStudent={handleEditStudent}
      />

    </>
  )
}

export default App
