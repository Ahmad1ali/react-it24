
import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkeMode.css";
// function for ark mode with Arow funtion
const DarkMode = () => {
    const setDarkMode = ()=>{
        document.querySelector("body").setAttribute('data-theme','dark')
    };
    const setLightMode = ()=>{
        document.querySelector("body").setAttribute('data-theme','light')
    };
   const toggleThema = e =>{
      if (e.target.checked) setDarkMode();
      else setLightMode();

   };
   
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleThema}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
