import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const GetUserById = () => {
    const [items, setItems] = useState([])

  const getUserById = async (id) => {
    console.log(id)
    const response = await axios.get(`http://localhost:3000/admin/getUserById?id=${id}`);
    
    console.log(response)
    if(response.data =="No User Found"){
      alert(response.data)
    }
    setItems(response.data)
    // console.log(items)
  };

//   useEffect(() => {
//     getUserById();
//   }, []);
  return(
    <>
    <input type="text" onChange={(e)=>getUserById(e.target.value)}/>
    {/* {items.map((item)=>{
        return(
            <div>
                <h3>{item.fName}</h3>
            </div>
        )
    })} */}
    <h2>{items.fName}{" "}{items.lName}</h2>
    </>
  ) 
};

export default GetUserById;
