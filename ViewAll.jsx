import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const ViewAll = () => {

   let [student,setstudent]=useState([])

  // await and async
  let getapi=async()=>{
    let {data}=await axios.get("http://localhost:5000/student")
  // console.log(data);
  setstudent(data)
  }

  console.log(student);
  // []=>represent componentdidmount: excutes one
  // to avoid excution go to infinte times
  useEffect(()=>{
  try{
    getapi()//only when we call data fecthes or else it wont fecth
  }catch(e){
    console.log(e);
  }
  },[])

  let deleteStu=(id)=>{
    // console.log(id);//here the id called 1 2 3 4 5 without clicking on delete, to avoid it we use arrow fun in fun caller 
        axios.delete("http://localhost:5000/student/"+id);//in these case navigate will not work so we use js
        window.location.assign("/viewall")
  }
  return (
    <>
    <Navbar/>
    <h1>viewall</h1>
    <h1>information about students</h1>
    <table className='tablecontainer'>
      <thead>
        <tr>
          <th>sl.no</th>
          <th>name</th>
          <th>email</th>
          <th colSpan={3}>options</th>
        </tr>
      </thead>
      <tbody>
        {student.map((x)=>{
          console.log(x);
          return(
            <tr>
              <td>{x.id}</td>
              <td>{x.studentname}</td>
              <td>{x.studentemail}</td>
              <td><NavLink to={`/edit/${x.id}`}><button>edit</button></NavLink></td>
              <td><button onClick={()=>deleteStu(x.id)}>delete</button></td>
              <td><NavLink to={`/viewsingle/${x.id}`}><button>view more</button></NavLink></td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default ViewAll