
import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export default function Input(){
  return (
   <div className='input-container-outer'>
      <h2>This Magic Brain will detect faces in your pictures.  Give it a try!</h2>
      <div className='input-container-inner'>
      <TextField id="filled-basic" label="Insert image URL here" variant="filled" style={{
      maxWidth:'600px',
      width:'100%'
      }}/>  
      <Button variant="contained" style={{
        height: '56px',
        width: '100px'
      }}>Submit</Button>
      </div>
    </div>
  )
}