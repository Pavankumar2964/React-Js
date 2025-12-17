import axios from "axios";
import { useEffect, useState } from "react";


export function UserOne(params) {
    const [userInfo, setUserInfo] = useState({ Name: "", Age: "", Email: "", City: "" });
    const [allUserInfo, setAllUserInfo] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        getDataFromServer();
    }, []);

    const handleChange = (e) => {
        const newUserInfo = { ...userInfo };
        newUserInfo[e.target.name] = e.target.value;
        setUserInfo(newUserInfo);
        console.log(newUserInfo);
    };
    const createUser = () => {
        axios.post("http://localhost:3000/users", userInfo).then(function (res) {
            console.log("User Created Successfully");
            getDataFromServer();
            clearForm();

        });
    };
    const getDataFromServer = () => {
        axios.get("http://localhost:3000/users").then((resp) => {
            console.log(resp.data);
            setAllUserInfo(resp.data);
        });
    };

    const clearForm = () => {
        setUserInfo({
            Name: "",
            Age: "",
            Email: "",
            City: "",
        });
    };

    const handleDelete = (user) => {
        axios.delete("http://localhost:3000/users/" + user.id).then(() => {
            getDataFromServer();
        });
    };
    const handleEdit = (user) => {
        setUserInfo(user);
        setIsEdit(true);

    };
    const updateUser = () => {
        axios.put("http://localhost:3000/users/" + userInfo.id, userInfo)
            .then(function () {
                clearForm();
                setIsEdit(false);
                getDataFromServer();
            });
    };
    return (
        <>
            <h2>
                Hello from UserOne Component
            </h2>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" name="Name" value={userInfo.Name} onChange={handleChange} />  {" "}
                <br />
                <label htmlFor="">Age</label>
                <input type="number" name="Age" value={userInfo.Age} onChange={handleChange} />  {" "}
                <br />

                <label htmlFor="">Email</label>
                <input type="email" name="Email" value={userInfo.Email} onChange={handleChange} />  {" "}
                <br />
                <label htmlFor="">City</label>
                <input type="text" name="City" value={userInfo.City} onChange={handleChange} />  {" "}
                <br />
                {isEdit ? (
                    <button type="button" onClick={updateUser}>UpdateUser</button>
                ) : (
                    <button type="button" onClick={createUser}>AddUser</button>
                )}
            </form>
            <br />
            <table border={2}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                        <td>City</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {allUserInfo.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.Name}</td>
                                <td>{user.Age}</td>
                                <td>{user.Email}</td>
                                <td>{user.City}</td>
                                <td><button onClick={() => {
                                    handleEdit(user)
                                }}>Edit</button></td>
                                <td><button onClick={() => {
                                    handleDelete(user)
                                }}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}