import React from 'react';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";


const Login =({StatusSetter})=>{
  return (
    <div className='sign-in-div' style={{
      display:'flex',
      flexDirection: 'column',
      height:'400px',
      justifyContent:'space-around',
      alignItems: 'center',
      position:'relative',
      zIndex: '100'
    }}>
    <h1>Welcome to the Facescanner app.  Please log in to continue</h1>
    <TextField id="filled-basic" label="Username" variant="filled" style={{
      width:'100%'
    }} />
    <TextField id="filled-basic" label="Password" variant="filled" style={{
      width:'100%'
    }} />
    <div style={{
      display:'flex',
      width:'60%',
      justifyContent:'space-around'
    }}>
      <Button variant="contained" style={{
          height: '56px',
          width: '100px'
        }} onClick ={(e)=>StatusSetter(false, true, false)} >Log in</Button>
      <Button variant="contained" style={{
        height: '56px',
        width: '100px'
      }} onClick ={(e)=>StatusSetter(false,false,true)} >Register</Button>
    </div>
    </div>
  )
}

export default Login