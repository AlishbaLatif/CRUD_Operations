import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const DeleteUser = () => {
  const [data, setData] = useState([]);

  const deleteUser = async () => {
    const response = await fetch("http://localhost:3000/admin/getAllUser", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });
    const holala = await response.json()
    setData(holala)
    console.log(holala);
    // console.log(data)
  };
  const handleDelete =  async(id) => {
    const response = await axios.delete(`http://localhost:3000/admin/deleteUser?id=${id}`)
    console.log(response)
    // alert(response.data)
  }
  useEffect(() => {
    deleteUser();
  }, []);
  return(
    <>
    {data.map((values)=>{
        return(
            <div>
                <h3>{values.fName}{" "}{values.lName}</h3>
                <button onClick={()=>handleDelete(values.id)}>Delete</button>
            </div>
        )
    })}
    </>
  )
  
};

export default DeleteUser;
