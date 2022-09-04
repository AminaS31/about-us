import React from "react";
import './Header.css';

let Header = (props)=>{
 
    return(
        <div className="header">
            <span className="logo">ABOUT US</span>
            <nav>
                <button onClick={(e)=>props.onAboutSelect("Amina S")}>Amina S</button>
                <button onClick={(e)=>props.onAboutSelect("Amina Mol S")} >Amina Mol S</button>
                <button onClick={(e)=>props.onAboutSelect("Bismi S")}>Bismi S</button>
                <button onClick={(e)=>props.onAboutSelect("Jithya P")}>Jithya P</button>
                <button onClick={(e)=>props.onAboutSelect("Shilpa A")}>Shilpa A</button>
            </nav>
        </div>
    )
    
};

export default Header;