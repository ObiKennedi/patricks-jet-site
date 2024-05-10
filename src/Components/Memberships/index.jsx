import React from "react";
import './index.scss';
import data from "../../Data/index.json";
import { NavLink } from "react-router-dom";

// Function to dynamically import images
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};
const images = importAll(require.context('../../Assets', false, /\.(png|jpe?g|svg|webp)$/));

export default function Memberships() {
    return (
        <div className="memberships">
            <h1 className="sub--heading">Memberships</h1>
            <div className="write--up">VistaJet US offers flexible, investment-free solutions to suit your flying requirements. VistaJet US Inc. provides its clients with access to the iconic silver and red fleet of over 80 VistaJet aircraft around the world, including the United States. As a VistaJet US customer, you will enjoy unparalleled 24/7 concierge service provided by a team of aviation experts based in New York and Florida.</div>
            <div>
                {data.memberships.map((item, index) => (
                    <NavLink key={item.id} to={item.to}>
                        <div className="random--images">
                            <img src={images[item.src.replace('../../Assets/', '')]} alt={item.name}/>
                        </div>
                        <div>
                            <h2 className="sub--heading">{item.name}</h2>
                            <div className="write--up">{item.description}</div>
                        </div>
                </NavLink>
            ))}
            </div>
        </div>
    );
}
