import React from 'react';
import './header.css';
import headerImage from './me.jpg'; 

function Header() {
  return (
    <header className="header">
      
    
    <div className="header-content">
        <img src={headerImage} alt="Header Image" className="header-image" />
      
      </div>
      <div>
      <h1 className="header-name">Shaik Mohammad Kaif</h1>
      <h3 >I am Currentlypersuing btech prefinal year at vellore institute of technology(VIT) in Amaravathi.<br/>
        Hobbies: Enjoys reading Books,browsing internet,playing Games.<br/>
        I am a self motivated ,Honest and Straight forward person.
      </h3>
      </div>
    </header>
  );
}

export default Header;