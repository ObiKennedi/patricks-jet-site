import React, { useState } from "react";
import './index.scss';

export default function PlanFlight() {
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [showFromDropDown, setShowFromDropDown] = useState(false);
    const [showToDropDown, setShowToDropDown] = useState(false);
    const locations = ['Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5'];

    const handleFromChange = (event) => {
        setFromLocation(event.target.value);
    };

    const handleToChange = (event) => {
        setToLocation(event.target.value);
    };

    const toggleFromDropDown = () => {
        setShowFromDropDown(!showFromDropDown);
    };

    const toggleToDropDown = () => {
        setShowToDropDown(!showToDropDown);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    return (
        <div className="plan--flight">
            <h1 className="sub--heading">PLAN A FLIGHT</h1>
            <div>
                <div className="write--up">Enter your flight details below and our team will contact you shortly. Private jet charter flight prices are subject to the market rate and start from $11,000 per hour.</div>
                <form onSubmit={handleSubmit}>
                    <div className="plan--flight--form">
                        <input type="text" placeholder="First Name"/>
                    </div>
                    <div className="plan--flight--form">
                        <input type="text" placeholder="last Name"/>
                    </div>
                    <div className="plan--flight--form">
                        <input type="text" value={fromLocation} onChange={handleFromChange} placeholder="From"  onClick={toggleFromDropDown}/>
                        {showFromDropDown && (
                            <ul>
                                {locations.map((loc) => (
                                    <li key={loc} onClick={() => setFromLocation(loc)}>{loc}</li>
                                ))}
                            </ul>
                         )}
                    </div>
                    <div className="plan--flight--form">
                        <input type="text" value={toLocation} onChange={handleToChange} placeholder="To" onClick={toggleToDropDown}/>
                        {showToDropDown && (
                            <ul>
                                {locations.map((loc) => (
                                    <li key={loc} onClick={() => setToLocation(loc)}>{loc}</li>
                                ))}
                            </ul>
                            )}
                    </div>
                    <div className="plan--flight--form">
                        <input type="date" placeholder="Date"/>
                    </div>
                    <div className="plan--flight--form">
                        <input type="number" placeholder="Passengers"/>
                    </div>
                    <button type="submit" className="button-for-forms">SUBMIT</button>
                </form>
            </div>
        </div>
    );
}
