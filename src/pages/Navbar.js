import React from "react";
import { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";
import ReactSwitch from "react-switch";

function Navbar() {
  const { theme } = useContext(ThemeContext);
  const {toggleTheme} = useContext(ThemeContext);
  
  return (
    <div className="navbar">
      <h1>Fimple Final Case</h1>
      <div className="toggle">
        <span className="switch-span">Dark Mode</span> 
        {/* dark mode switch create here; function in App component. for state management used ThemeContext */}
        <ReactSwitch onChange={toggleTheme} checked={theme === "light"}/> 
      </div>
           
    </div>
  );
}

export default Navbar;
