import React from "react";
import './index.scss'

export default function HeroSection(){
   return(
    <div className="hero--section">
        <h1>Flying made simple</h1>
        <div>
            <p>MEMBERSHIP WITHOUT JOINING FEES.</p>
            <p>SIMPLY PAY FOR THE HOURS YOU NEED.</p>
        </div>
        <div>
            <button className="button-links">
                <a href="/">PLAN A FLIGHT</a>
            </button>
            <button className="button-links">
                <a href="/">MEMBERSHIP</a>
            </button>
        </div>
    </div>
   )
}