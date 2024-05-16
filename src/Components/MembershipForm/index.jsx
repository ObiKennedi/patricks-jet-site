import React, { useState } from 'react';
import './index.scss'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export default function MembershipForm() {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <div className="membership--form">
        <h1 className="sub--heading">DISCUSS YOUR MEMBERSHIP</h1>
        <form action="">
            <div>
                <input type="text" name="firstName" placeholder="First Name"/>
                <input type="text" name="lastName" placeholder="Last Name"/>
            </div>
            <div>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={setPhoneNumber} className='input'/>
                <input type="e-mail" name="eMailAddress" placeholder='E-mail Address'/>
            </div>
            <div>
                <textarea name="message" placeholder="Message"/>
            </div>
            <div>
                <CountryDropdown
                  value={country}
                  onChange={(val) => setCountry(val)}
                  className="country-dropdown"
                />
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={(val) => setRegion(val)}
                  className="region-dropdown"
                />
            </div>
            <div>
                <button className="button-for-forms">Submit</button>
            </div>
        </form>
    </div>
  );
}
