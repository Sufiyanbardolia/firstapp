import { Button } from '@mui/material'
import React,{useState} from 'react'

export const StateMang = () => {
    const [data,setData]=useState("sufiyan")
    const [data1,setData1]=useState("sufi")
    console.log(data)
    
  return (
    <div>
        <label htmlFor="">First Name</label>
        <input type="text" onChange={(e)=>setData(e.target.value)}/> <br />
        <h1>{data}</h1>
        <label htmlFor="">Second Name</label>
        <input type="text" onChange={(e)=>setData1(e.target.value)}/>
        <h1>{data1}</h1>
      
    </div>
  )
}
