import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const SchoolForm = () => {
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    const obj = {
      FirstName: name,
      mobile: mobile,
      email: email,
      Password: password,  
    };
    setData([...data, obj]);
  };
  console.log(data); 
  const handleDelete=(index)=>{
    const deleteData=data.filter((item,ind)=>ind !=index)
    setData(deleteData)
  }
  return (
    <div>
      <h1>School Registration Form</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} >
          {" "}
          <TextField
            label=" Name"
            onChange={(e) => setName(e.target.value)}
          ></TextField>{" "}
        </Grid>
        <Grid item xs={12} md={3} >
          {" "}
          <TextField
            label="Mobile"
            type="number"
            onChange={(e) => setMobile(e.target.value)}
          ></TextField>{" "}
        </Grid>
        <Grid item xs={12} md={3} >
          {" "}
          <TextField
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>{" "}
        </Grid>
        <Grid item xs={12} md={3}  >
          {" "}
          <TextField
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>{" "}
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={6}></Grid>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
      <Grid container spacing={4}>
      {data.map((item,index)=>{
        return (
          
            <Grid item xs={12} md={6} >
            <Card>
              <CardContent>
                <h3>name: {item.FirstName}</h3>
                <h3>mobile:{item.mobile}</h3>
                <h3>email:{item.email}</h3>
                <h3>password:{item.Password}</h3>
                <Button variant="contained" color="error" onClick={()=>handleDelete(index)}>Delete</Button>
              </CardContent>
            </Card>
            </Grid>
          
        )
      })}
      </Grid>
     
    </div>
  );
};
