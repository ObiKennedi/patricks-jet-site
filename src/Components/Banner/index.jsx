import React from "react";
import './index.scss'
import { Link } from "react-router-dom";

export default function Banner({head, bodyText, imageURl, buttonText, to}){
    return(
        <div className="banner">
            <div>
                <img src={imageURl} alt="banner" />
            </div>
            <div>
                <h1 className="sub--heading">{head}</h1>
                <div>{bodyText}</div>
                <div>
                    <button className="button-links">
                        <Link to={to}>{buttonText}</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}