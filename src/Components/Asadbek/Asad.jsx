import React from 'react';
import './Asad.css'; 

const Asadbek = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="" alt="logo" className="icon" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Features</a></li>
        <li><a href="#">Developers</a></li>
        <li><a href="#">Company</a>
          <ul className="dropdown">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Changelog</a></li>
      </ul>
      <div className="cta">
        <button className="join-waitlist">Join waitlist</button>
      </div>
    </nav>
  );
};

export default Asadbek;
