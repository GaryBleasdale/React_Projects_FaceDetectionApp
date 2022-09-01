import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Logo from './components/Navbar/Logo';
import RankingText from './components/RankingText';
import Input from './components/Input';
import MainImage from './components/MainImage';
import Particle from './components/Particle';



function App() {

  
  return (
    <div className="App">
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
      
    </div>
  );
}

export default App;
