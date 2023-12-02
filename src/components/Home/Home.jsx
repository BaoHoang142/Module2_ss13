import React from 'react'
import { useId } from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import {action} from "../../action/action"
export default function Home() {
  const data = useSelector(a=>a);
  const dispatch = useDispatch()
  const [users,setUsers] = useState(
    {
      name:"",
      email:"",
      age:"",
      id: ""
    }
)
  
  const changeInput = (e)=>{
    
    setUsers({
      ...users,
      [e.target.name]:e.target.value
    })

  }
  // them || sửa
  const handleAddOrUpdate = () => {
    if (users.id) {
      dispatch(action("UPDATE", users));
    } else {
      dispatch(
        action("ADD", {
          ...users,
          id: Math.floor(Math.random() * 654546544564),
        })
      );
    }
    setUsers({
      id: "",
      name: "",
      age: "",
      email: "",
    });
  };
// xoa
const deleteHandle = (id) => {
  dispatch(action("DELETE", id));
};
//sua
const updateHandle = (item) => {
  setUsers(item);
};
  return (
    <>
        <label htmlFor="">Nhập tên: </label>
        <input type="text" value={users.name} onChange={changeInput} name='name'/> <br />
        <label htmlFor="">Nhập email: </label>
        <input type="text" value={users.email} onChange={changeInput} name='email' /> <br />
        <label htmlFor="">Nhập tuổi: </label>
        <input type="text" value={users.age} onChange={changeInput} name='age' /> <br />
        <button onClick={handleAddOrUpdate}>{users.id ? "Sửa" : "thêm"}</button><br />

        <table style={{border:"2px solid black"}}>
          <thead>
            <tr>
              <th style={{border:"2px solid"}}>Tên</th>
              <th style={{border:"2px solid"}}>Email</th>
              <th style={{border:"2px solid"}}>Tuổi</th>
              <th style={{border:"2px solid"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            
              {data.map((item)=>
              <tr key={item.id}>
                  <td style={{border:"2px solid"}}>{item.name}</td>
                  <td style={{border:"2px solid"}}>{item.email}</td>
                  <td style={{border:"2px solid"}}>{item.age}</td>
                  <td style={{border:"2px solid"}}>
                    <button onClick={()=>updateHandle(item)}>sửa</button>
                    <button onClick={()=>deleteHandle(item.id)}>xóa</button>

                  </td>
              </tr>
              )}
            
          </tbody>
        </table>

    </>
  )
}
