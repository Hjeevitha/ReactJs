import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ViewSingleStudent = () => {
    // storing single value
    let [Student,setstudent]=useState("")

    let navigate=useNavigate();
    let goback=()=>{
        navigate(-1)
    }
    let home=()=>{
        navigate("/")
    }
// useparam hook()
    let {id}=useParams();
    console.log(id);

    let getapi=async ()=>{
                  let {data} = await  axios.get("http://localhost:5000/student/"+id);
                //   console.log(data);
                setstudent(data)
    }
    // to prevent multple excution we use []
    useEffect(()=>{
       try{
           getapi();
       }catch(e){
console.log(e);
       }
    },[])
  return (
    <>
    <section className='viewsinglesection'>
        <h1 className='details'>sl.no: {Student.id}</h1>
        <h1 className='details'>Student name: {Student.studentname}</h1>
        <h1 className='details'>student email: {Student.studentemail}</h1>
        <div className='divbuttons'>
            <button onClick={goback}>go back</button>
             <button onClick={home}>Home page</button>
        </div>
    </section>
    </>
  )
}

export default ViewSingleStudent