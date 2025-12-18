import React,{useEffect,useState} from "react";

export const Users =()=>{
    const[usersValues,setUsersValues] =useState({
        fName:"",
        lName:"",
    });

    const handleChange=(e)=>{
        const newUsersValues={...usersValues};
        newUsersValues[e.target.name]=e.target.value;
        setUsersValues(newUsersValues);
        console.log(e)
    };
    useEffect(()=>{
        if(usersValues.fName.length>=8 && usersValues.lName.length>=6) {
            document.querySelector("button").removeAttribute("disabled",true);
        } else {
            document.querySelector("button").setAttribute("disabled",true)
        }
        [usersValues];
    })
    return(
        <div>
            <h2>Welcome to User Component</h2>
            <hr/>
            <form>
                <label htmlFor="">First Name</label>
                <input type="text" name="fName" value={usersValues.fName}
                onChange={handleChange}/>
                <br/>
                 <label htmlFor="">Last Name</label>
                <input type="text" name="lName" value={usersValues.lName}
                onChange={handleChange}/>
                <br/>{" "}
                <br/>
                <button disabled>Add User</button>
            </form>
        </div>
    )
}