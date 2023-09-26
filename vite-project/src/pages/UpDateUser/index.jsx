import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const upDateUserById = () => {
 
 const[userId,setUserId]=useState("");
 const[user,setUser]=useState(null);
 const[firstName,setFirstName]=useState("");
 const[lastName,setLastName]=useState("");
 const[email,setEmail]=useState("");
 const[userNotFound,setUserNotFound]=useState(false);

const fetchUser=async()=>{
    try{
        const response=await axios.get(`http://localhost:3000/admin/getUserById?id=${userId}`)
        if(response.data!=="user not exists"){
            console.log(response.data)
            setUser(response.data);
            setFirstName(response.data.fName)
            setLastName(response.data.lName)
            setEmail(response.data.email)
            setUserNotFound(response.data.userNotFound)
        }else{
            setUser(null)
            setUserNotFound(true);
        }
    }catch(error){
        console.log(error)
    }
}
const handleSubmit=async(e)=>
{
    e.preventDefault(); 
    const updatedUser={
        id:userId,
        fName:firstName,
        lName:lastName,
        email:email,
    }
    try{
        const response=await axios.put("http://localhost:3000/admin/updateUser",
        updatedUser)
        console.log(response)
        alert("successfully updated")
    }catch(error){
        console.error(error)
    }
}
return(
    <>
    <div className="update-user-container">
        <h2>UPDATE USER</h2>
        <div className="input-container">
            <input type="text"
                placeholder="Enter user ID"
                value={userId}
                onChange={(e)=>setUserId(e.target.value)}
                required
            />
            <button onClick={fetchUser}>Fetch User</button>
        </div>
        {userNotFound ?(
            <p>user not found...</p>
        ):
        user?(
            <form onSubmit={handleSubmit}
                className="user-form">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit">Update User</button>
            </form>
        ):null}

        

    </div>
    </>
)
  
};

export default upDateUserById;