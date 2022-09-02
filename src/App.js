import './App.css';
import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar';
import Logo from './components/Navbar/Logo';
import RankingText from './components/RankingText';
import Input from './components/Input';
import MainImage from './components/MainImage';
import Particle from './components/Particle';



function App() {
  const [isReady, setIsReady] = React.useState(false);

  useEffect(()=>{
    setIsReady(true)
  },[isReady])
  

  return (
  
    
    
    <div className="App"
    style={{
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height:'100vh',
      width:'100vw'
    }}>
      { isReady === false &&
      <div className='loading-div'>
        <h3 style={{
          fontSize: '34px'
        }}>Loading...</h3>
      </div>
    }
    { isReady === true &&
      <>
      <Particle />
      
      <div className='contents'>
        <Navbar />
        <Logo />
        <div className="main-container">
          <RankingText />
          <Input />
          <MainImage />
  
        </div>
      </div>
      </>
    
   }
  </div>
  );
}

export default App;
