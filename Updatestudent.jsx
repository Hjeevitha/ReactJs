import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios  from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FaRegEdit } from "react-icons/fa";


const Updatestudent = () => {
   let [student,setstudent]=useState({
     studentname:"",
     studentemail:""
   })

   let navigate=useNavigate()

let {studentname,studentemail}=student;

//    updation

let {id}=useParams()

let getapi=async()=>{
    let {data}=await axios.get("http://localhost:5000/student/"+id)
    setstudent(data)
}

useEffect(()=>{
try{
getapi();
}catch(e){
    console.log(e);
}
},[])

  

   let handlename=(event)=>{
         let {name,value}=event.target;
         setstudent({...student,[name]:value})
   }
   let handleemail=(event)=>{
    console.log(event);
    let {name,value}=event.target;
    setstudent({...student,[name]:value})
   }
   
    let handlesubmit=(event)=>{
         event.preventDefault()
         try{
          if(studentname==="" && studentemail===""){
            alert("both the firlds are empty please fill the content")
          }else if(studentname===""){
                 alert("please fill name")
          }else if(studentemail===""){
            alert("please fill email field")
          }
          else{
            let payload={
              studentname,studentemail
             }
             axios.put("http://localhost:5000/student/"+id,payload)
             navigate("/viewall")
             toast.success('Successfully updated!')

          }
               
         }catch(e){
                 console.log(e);
         }
         finally{
          setstudent({
            studentname:"",
            studentemail:""
          })
         }
    }
  return (
    <>
    <Navbar/>
    <h1 className='welcomehome'>update page</h1>
    <form onSubmit={handlesubmit}>
        <legend>update student deatiles</legend>
        <div>
          <input type="text" 
          placeholder="enter student's name" 
          value={studentname} 
          name='studentname'
           onChange={handlename}/>
          </div>
        <div><input type="email" 
        placeholder="enter student's mail-id"
        value={studentemail}
        name='studentemail'
         onChange={handleemail}/>
         </div>
        <div><button className='updatebutton' ><span>update</span><span><FaRegEdit /></span></button></div>
    </form>
    </>
  )
}

export default Updatestudent