import React from "react";
import './index.scss'
import HeroSection from "../../Components/HeroSection";
import PlanFlight from "../../Components/PlanFlight";
import Memberships from "../../Components/Memberships";
import WriteUp from "../../Components/WriteUps";
import Banner from "../../Components/Banner";

export default function Home(){
    return(
        <body className="home">
            <div>
                <HeroSection/>
                <PlanFlight/>
                <Memberships/>
                <WriteUp to={'/'} heading={'PRIVATE JETS'} writeUp={'Renowned for its consistency, the distinctive silver and red fleet is equipped for all needs — whether you need a fully enabled business suite or a restful home away from home space. As a Part 295 air charter broker, VistaJet US arranges these flights with its preferred air carrier partners, including affiliates VistaJet Limited, VistaJet GmbH, as well as the Part 135 U.S. direct air carriers that trade under the "Vista America" brand.'} buttonLetters={'EXPLORE THE FLEET'}/>
                <Banner head={'THE GLOBAL 7500'} imageURl={require('../../Assets/take--off.webp')} bodyText={'VistaJet unlocks the world with the first Global 7500 fleet, the largest and longest-range business jet. The Global 7500 offers four true living spaces, including a full-size kitchen and a permanent bedroom.'} buttonText={'EXPLORE THE GLOBAL 7500'}/>
                <WriteUp to={'/'} heading={'A PRIVATE WORLD FOR VISTAJET MEMBERS'} writeUp={"VistaJet Members get access to the world's most incredible bespoke experiences through our global network of specially selected partners and advisors.Private World is hospitality in its truest sense, providing every Member with the benefits of an integrated team ready to support at any step."} buttonLetters={'EXPLORE OUR PARTNERSHIPS'}/>
                <WriteUp to={'/'} heading={'BE AT YOUR BEST ON BOARD AND AT DESTINATION'} writeUp={'Wellness is important to us all and means something different to each of us. In partnership with world leading and trusted experts in wellness, VistaJet invites you to discover new perspectives of wellness on board and at destination.'} buttonLetters={'DISCOVER WELLNESS'}/>
                <WriteUp to={'/'} heading={'SERVICE'} writeUp={'To ensure passengers enjoy unrivaled service as standard, every VistaJet flight has at least one Cabin Hostess as well as two crew in the flight deck. Our crew is trained by the British Butler Institute, Norland College, and Wine & Education Trust.'} buttonLetters={'ATTENTION TO DETAIL'}/>
                <Banner head={'GLOBAL REACH'} bodyText={"Through its preferred air carrier partners, VistaJet has arranged for clients to fly to 1,900 airports in 96% of the world's countries. Much like the travel plans of our clients, our horizons and resources are always expanding."} to={'/'} buttonText={'LEARN MORE'} imageURl={require('../../Assets/experience--banner.jpg')}/>
            </div>
        </body>
    )
}