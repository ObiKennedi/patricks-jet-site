import React from "react";
import './index.scss'
import { Link } from "react-router-dom";

export default function WriteUp({heading, writeUp, to, buttonLetters}){
    return(
        <div className="write--up--component">
            <h1 className="sub--heading">{heading}</h1>
            <div className="write--up">{writeUp}</div>
            <div>
                <button className="button-links">
                    <Link to={to}>{buttonLetters}</Link>
                </button>
            </div>
        </div>
    )
}