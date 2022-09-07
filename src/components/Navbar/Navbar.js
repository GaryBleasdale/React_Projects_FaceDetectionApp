import React from "react"
import Button from '@mui/material/Button';
import './navbar.scss'
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar({SignedIn}){
  return (
    <div className='navbar'>
      <Button variant="contained" className='signout-btn' size='large' endIcon={< LogoutIcon/>}
      onClick = {() => {SignedIn(true)}}
      >Sign out</Button>
    </div>
  )
}