import React from "react";
import './index.scss'
import HeroSection from "../../Components/HeroSection";
import PlanFlight from "../../Components/PlanFlight";
import Memberships from "../../Components/Memberships";

export default function Home(){
    return(
        <body className="home">
            <div>
                <HeroSection/>
                <PlanFlight/>
                <Memberships/>
            </div>
        </body>
    )
}