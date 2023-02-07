import { Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import { Data } from './Data'


export const Materialcard = () => {
  
// const arr=[
//   {image_name:"./bike1.jpg" },
//   {image_name:"./bike2.jpg"},
//   {image_name:"./bike3.jpg"},
//   {image_name:"./bike4.jpg"},
//   {image_name:"./bike5.jpg"},
//   {image_name:"./bike6.jpg"},
//   {image_name:"./bike7.jpg"},
//   {image_name:"./bike8.jpg"},
//   {image_name:"./bike9.jpg"},
//   {image_name:"./bike10.jpg"},
//   {image_name:"./bike11.jpg"},
//   {image_name:"./bike12.jpg"},
//   {image_name:"./bike13.jpg"},
//   {image_name:"./bike14.jpg"},
//   {image_name:"./bike15.jpg"},
//   {image_name:"./bike16.jpg"},
// ]

// const arr= new Array(10)

// arr.fill(0)

  return (
    <div>
   <h1>Material card</h1>
 
        <Grid container spacing={3}>
       
          {Data.map((item,index)=>{
            return(
              // <Grid item xs={4}> <CardContent> <img src={item.image_name} alt="" width={300} height={300 } /> </CardContent>
              // </Grid>
              <Grid item xs={4}>
                <Card>
                 <CardContent style={{backgroundColor: "green"}}> <img src={item.image} alt="" width={300} height={300 } /> </CardContent>
                </Card>
              </Grid> 

            )
          })}


            <Grid item xs={4}> 
            <Card><CardContent style={{backgroundColor: "gray"}}> <img src='./shirt_image1.jpg' alt=''   width={300} height={300}/> </CardContent> </Card></Grid>

             <Grid item xs={4}>
            <Card> <CardContent style={{backgroundColor: "green"}}> <img src="./shirt_image2.webp" alt=""  width={300} height={300}/> </CardContent> </Card></Grid>

             <Grid item xs={4}>
            <Card> <CardContent style={{backgroundColor: "black"}}> <img src="./image5.jpg" alt=""  width={300} height={300}/> </CardContent> </Card></Grid>
               
   </Grid>
    </div>
  )
}
