import React from 'react';
import './Footer.css';

export default function Footer() {

  function showConsoleWarning(e) {
    e.preventDefault();
    console.log("Oh, snap! This isn't supposed to be here.")
  }

  return (
    <div className="footer">
    <div className="aboutTerms">
    <h4 onClick={showConsoleWarning} className="atText">About</h4>
    <h4 onClick={showConsoleWarning} className="atText">Terms of Use</h4>
    </div>
    <div className="byLine">
    <p>Site by Dave Guymon</p>
    </div>
    </div>
  )
}
