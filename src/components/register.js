import React from 'react'
import { TextField, Button } from '@mui/material';



export default function Register({StatusSetter}){
  return(
    <form style={{
      display:'flex',
      flexDirection:'column',
      height:'50%',
      justifyContent:'space-around'
    }}>
      <h3>Please leave your details in order to register:</h3>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Surname" variant="outlined" />
      <TextField id="outlined-basic" label="e-mail address" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <Button variant="contained" style={{
        height: '56px',
        width: '100px'
      }} onClick ={(e)=>StatusSetter(false,true,false)} >Register</Button>
    </form>


  )
}