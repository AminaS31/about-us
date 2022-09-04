import React from "react";
import AboutCard from './AboutCard';
import './AboutCards.css'

let AboutCardWrapper =(props)=>{
    console.log(props)

    return(
        <div className="aboutWrapper">
            <AboutCard />
        </div>
    );

};

export default AboutCardWrapper;