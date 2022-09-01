import React from "react";
import './navbar.scss';
import Tilt from 'react-parallax-tilt';

export default function Logo(){
  return (
   <div className='logo-container'>
    <Tilt perspective='8000' style={{
      width:'200px',
      height:'200px'
    }}>
      <div className='logo' >
      </div>
    </Tilt>
  </div>
  )
}