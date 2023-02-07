import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const MaterialForm = () => {
    const [data,setData]=useState()
    const [data1,setData1]=useState("")
    const [data2,setData2]=useState("")
    const [data3,setData3]=useState("")
    const [data4,setData4]=useState("")
    const [data5,setData5]=useState("")
    const [data6,setData6]=useState("")
    const [data7,setData7]=useState("")
    const handleSubmit=()=>{
        const obj={fname:data, lname:data1, mobile:data2, email:data3, adress:data4, pincode:data5, city:data6, state:data7};
        console.log(obj)
    }
    return (
        <div id='hover'>
        <div >
           <br />
      
         <div id='main'>
       <Grid container spacing={3}>
           <Grid item xs={3}> <TextField label=" First Name"  onChange={(e)=>setData(e.target.value)}></TextField > </Grid>
           <Grid item xs={3}> <TextField label=" Last Name" onChange={(e)=>setData1(e.target.value)}></TextField> </Grid>
           <Grid item xs={3}> <TextField label=" Mobile Number" type={"number"} onChange={(e)=>setData2(e.target.value)}></TextField> </Grid>
           <Grid item xs={3}> <TextField label=" Email" type={"email"} onChange={(e)=>setData3(e.target.value)}></TextField> </Grid>
           <Grid item xs={3}> <TextField label="Adress" onChange={(e)=>setData4(e.target.value)}></TextField></Grid>
           <Grid item xs={3}> <TextField label="Pin Code" type={"number"} onChange={(e)=>setData5(e.target.value)}></TextField></Grid>
           <Grid item xs={3}> <TextField label="City" onChange={(e)=>setData6(e.target.value)}></TextField></Grid>
           <Grid item xs={3}> <TextField label="State" onChange={(e)=>setData7(e.target.value)}></TextField></Grid>
           {/* <Grid item xs={3}> <TextField label=""></TextField></Grid> */}
           <Grid item xs={12}></Grid>
           <Grid item xs={12}></Grid>
           <Grid item xs={12}>
           {/* <FormControl>
           <FormLabel>Gender</FormLabel>
           <RadioGroup row >
           <FormControlLabel value="female" control={<Radio />} label="Female" />
           <FormControlLabel value="male" control={<Radio />} label="Male" />
           <FormControlLabel value="other" control={<Radio />} label="Other" />
           </RadioGroup>
           </FormControl>  */}
           </Grid>
          
           <Grid item xs={12}>
           <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button> <br /> <br />
           <Grid item xs={12}> <Button variant='outlined' color='error'>Reset</Button></Grid>
           </Grid>
      
       </Grid> 
       </div>
      
        </div>
        {/* <h1>First Name:{data}</h1>
        <h1>last Name:{data1}</h1>
        <h1>Mobile :{data2}</h1>
        <h1>Email :{data3}</h1>
        <h1>Adress :{data4}</h1>
        <h1>pin code:{data5}</h1>
        <h1>City:{data6}</h1>
        <h1>state:{data7}</h1> */}
        </div>
    )}
