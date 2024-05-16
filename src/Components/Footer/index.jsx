import React from "react";
import './index.scss'

export default function Footer(){
    return(
        <div className="footer">
            <div>
                <img src={require('../../Assets/logo.png')} alt="logo" className="random--image" />
            </div>
            <p>English (United States)
                © VistaJet 2024 . VistaJet®, Vista®, and the VistaJet logo® are registered trademarks of VistaJet. All rights reserved. VistaJet and its subsidiaries are not U.S. direct air carriers. VistaJet US Inc. and VistaJet Online and Mobile Services are air charter brokers that do not operate aircraft. VistaJet Limited is a European air carrier that operates 9H registered aircraft under its Maltese Air Operator Certificate No. MT-17 and is incorporated in Malta under Company Number C 55231. VistaJet-owned and U.S. registered aircraft are operated by properly licensed U.S. air carriers.
            </p>
        </div>
    )
}