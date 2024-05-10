import React from "react";
import './index.scss'
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
            <div className="logos">
                <img src={require('../../Assets/20-year-logored-v2.webp')} alt="" />
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Memberships</NavLink>
                    </li>
                    <li>
                        <NavLink>Fleet</NavLink>
                    </li>
                    <li>
                        <NavLink>Private World</NavLink>
                    </li>
                    <li>
                        <NavLink>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <button className="button-links">
                    <a href="/">REQUEST A QUOTE</a>
                </button>
            </div>
        </div>
    )
}