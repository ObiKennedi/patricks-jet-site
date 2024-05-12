import React from "react";
import './index.scss'
import { NavLink } from "react-router-dom";
import { useState, useEffect} from "react";

export default function Header(){

    const [activeMenu, setActiveMenu] = useState(null);
    const handleClick = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };
    const [headerWidth, setHeaderWidth] = useState(window.innerWidth);
    const [headerClass, setHeaderClass] = useState('header');
    useEffect(() =>{
        const handleResize = () =>{
            setHeaderWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () =>{
            window.removeEventListener('resize', handleResize)
        };
    },[])
    useEffect(()=>{
        if (window.innerWidth <= 900){
            setHeaderClass('header-mobile')
        }else{
            setHeaderClass('header')
        }
    }, [headerWidth])
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    const menuClass = isMenuVisible ? 'toggle-open' : 'toggle-close';

    return(
        <div className={headerClass}>
            <div className="logos">
                <img src={require('../../Assets/logo.png')} alt="" />
            </div>
            <div className={menuClass}>
                <ul>
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" onClick={() => handleClick('memberships')} className={activeMenu === 'memberships' ? 'close' : 'open'}>Membership</NavLink>
                        {activeMenu === 'memberships' && (
                            <ul>
                                <li><NavLink>Memberships</NavLink></li>
                                <li><NavLink>Program</NavLink></li>
                                <li><NavLink>VJ25</NavLink></li>
                                <li><NavLink>Corporate</NavLink></li>
                            </ul>
                        )}
                    </li>
                    <li>
                    <NavLink to="#" onClick={() => handleClick('fleet')} className={activeMenu === 'fleet' ? 'close' : 'open'}>Fleet</NavLink>
                    {activeMenu === 'fleet' && (
                            <ul>
                                <li><NavLink>Fleet</NavLink></li>
                                <li><NavLink>Bombardier</NavLink></li>
                                <li><NavLink>Gulfstream</NavLink></li>
                                <li><NavLink>Cessna</NavLink></li>
                                <li><NavLink>Embrear</NavLink></li>
                                <li><NavLink>Dassault</NavLink></li>
                            </ul>
                    )}
                    </li>
                    <li>
                    <NavLink to="#" onClick={() => handleClick('private-world')} className={activeMenu === 'private-world' ? 'close' : 'open'}>Private World</NavLink>
                    {activeMenu === 'private-world' && (
                        <ul>
                            <li><NavLink>Private World</NavLink></li>
                            <li><NavLink>Experience</NavLink></li>
                            <li><NavLink>Events</NavLink></li>
                            <li><NavLink>Destinations</NavLink></li>
                        </ul>
                    )}
                    </li>
                    <li>
                    <NavLink to="#" onClick={() => handleClick('about-us')} className={activeMenu === 'about-us' ? 'close' : 'open'}>About Us</NavLink>
                    {activeMenu === 'about-us' && (
                        <ul>
                            <li><NavLink>About Us</NavLink></li>
                            <li><NavLink>Safety</NavLink></li>
                            <li><NavLink>Experience</NavLink></li>
                            <li><NavLink>Executive</NavLink></li>
                            <li><NavLink>Sustainability</NavLink></li>
                        </ul>
                    )}
                    </li>
                    <li>
                    <NavLink to="#" onClick={() => handleClick('contact-us')} className={activeMenu === 'contact-us' ? 'close' : 'open'}>Contact Us</NavLink>
                    {activeMenu === 'contact-us' && (
                        <ul>
                            <li><NavLink>Contact Us</NavLink></li>
                            <li><NavLink>Facebook</NavLink></li>
                            <li><NavLink>Instagram</NavLink></li>
                            <li><NavLink>Linked In</NavLink></li>
                            <li><NavLink>X-twitter</NavLink></li>
                        </ul>
                    )}
                    </li>
                </ul>
            </div>
            <div>
                <button className="button-links">
                    <a href="/">REQUEST A QUOTE</a>
                </button>
            </div>
            <div className="hamburger--menu--icon" onClick={toggleMenu}>
                <img src={require('../../Assets/white.png')} alt="menu-icon"/>
            </div>
        </div>
    )
}