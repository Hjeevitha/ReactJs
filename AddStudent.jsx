// home page
import React, { useState } from 'react'
import Navbar from './Navbar'
import axios  from "axios"
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const AddStudent = () => {
   let [student,setstudent]=useState({
     studentname:"",
     studentemail:""
   })

   let navigate=useNavigate()

   let {studentname,studentemail }=student;

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
             axios.post("http://localhost:5000/student",payload)
             navigate("/viewall")
             toast.success('Successfully toasted!')

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
    <h1 className='welcomehome'>Welcome to Home page</h1>
    <form onSubmit={handlesubmit}>
        <legend>Add Students</legend>
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
        <div><button >Add Student</button></div>
    </form>
    </>
  )
}

export default AddStudent