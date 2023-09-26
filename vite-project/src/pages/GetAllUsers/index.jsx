import React from "react";
import { useEffect, useState } from "react";
import './styles.css'

const GetAllUsers = () => {
  const [data, setData] = useState([]);

  const getAllUsers = async () => {
    const response = await fetch("http://localhost:3000/admin/getAllUser", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });
    console.log(response)
    const holala = await response.json()
    setData(holala)
    console.log(holala);
    // console.log(data)
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return(
    <>
    {data.map((values)=>{
        return(
            <div>
                <h3>{values.fName}</h3>
            </div>
        )
    })}
    </>
  )
  
};

export default GetAllUsers;
