import { Button, Grid, TextField } from "@mui/material";
import React,{useState} from "react";

export const Todolist=()=>{
    const [text, setText]= useState("");
    const [data, setData]= useState([]);
    const handleSubmit =()=> {
        if(text.trim() !=""){
            setData([...data,text])
        }
        setText('')
       
    };
    const handleDelete=(item)=>{
        const deleteData=data.filter((ele)=>ele !==item)
        setData(deleteData)
      }

    return(
        <div className="b">
          <h1>This Is Todo List </h1>
           <TextField type={"text"} onChange={(e)=>setText(e.target.value)} value={text}></TextField>  <br /><br />
          <Grid container spacing={3}>
            <Grid item xs={12}>
           <Button variant="contained" color="success" onClick={handleSubmit}>Add</Button>  </Grid>
           </Grid>
           
           <ul>
            {data.map((item)=>{
                return (
                    
                   <li  className="a" onClick={()=> handleDelete(item)}>{item} </li>
                    // {/* <Button onClick={()=>handleDelete(item)}>Delete</Button> */}
                    
                )
            })}
            
           </ul>
           

        </div>
    )
}