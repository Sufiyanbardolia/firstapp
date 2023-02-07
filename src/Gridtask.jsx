import { Grid } from '@mui/material'
import React from 'react'
import {TextField} from '@mui/material'

export const Gridtask = () => {
  return (
    <div>
        <Grid container spacing={3}>
        <Grid item xs={3}> <TextField label=" First Name"></TextField> </Grid>
   
   </Grid>
    </div>
  )
};

