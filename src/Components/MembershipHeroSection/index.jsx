import React from "react";
import './index.scss'
import { Link } from "react-router-dom";

export default function MembershipsHeroSection(){
    return(
        <div className="memberships--hero--section">
            <div>
                <img src={require('../../Assets/banner.webp')} alt="banner"/>
            </div>
            <div>
                <h1>Our private jet memberships</h1>
                <div>Memberships uniquely designed for your flying needs and preferences.</div>
            </div>
        </div>
    )
}
