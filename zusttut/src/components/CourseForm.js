import React, { useState } from 'react'
import usecourseStore from '../app/courseStore'

export default function CourseForm() {
    const addCourse=usecourseStore((state)=>state.addCourse);

    const [courseTitle,setCourseTitle]=useState("");

    const handleCourseSubmit=()=>{
        if(!courseTitle)return alert("Please add a course title");
        addCourse({
            id:Math.ceil(Math.random()*100000),
            title:courseTitle
        })
    }
  
    return (
    <div className='form-container'>
        <input value={courseTitle} type="text" 
        onChange={(e)=>{
            setCourseTitle(e.target.value)
        }} className='form-input'
        />
        <button 
        onClick={()=>{
            handleCourseSubmit();
        }}
        >Submit</button>
    </div>
  )
}
