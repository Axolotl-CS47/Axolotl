import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import countryCityObj from "../../seeds/countryCapital.js";
import store from '../store';
const example = {
  "providerCoverage":"ALL",
  "itineraryType":"ONE_WAY",
  "cheapestFlightNonStop":false,
  "pointOfSale":{
  "requestSourceCountry":"US",
  "country":"US",
  "currency":"USD"
  },
  "airport":[{
  "code":"LAX",
  "name":"Los Angeles Intl Airport",
  "city":"Los Angeles",
  "state":"CA",
  "country":"United States",
  "latitude":33.943108403,
  "longitude":-118.410609209,
  "isoCountryCode":"US",
  "cityId":"1064400022",
  "cityGisId":"3000001947",
  "gmtTimeZoneOffset":"-08:00"
  }]
}

const allCountries = () => countryCityObj.map(country => {
  return <option>{country.country}</option>
})

const allCities = () => countryCityObj.map(country => {
  return <option>{country.city}</option>
})


const Dashboard = () => {
  // const [rows, setRowData] = useState('');
  
  const flightData = [];

  return (
    <>
        <div>
        <h3>Dashboard</h3>
        <button
        onClick={() =>
          store.dispatch({ type: "SET_CURRENT_CITY", payload: "Toronto" })
        }
      >Click me !!</button>
        <hr></hr>
        {/* <input className='dashDropdown' placeholder='FROM'></input>
        <input className='dashDropdown' placeholder='TO'></input>
        <button>Search</button> */}
        <form>
          <p>FROM</p>
          <select className='dashDropdown' >
            <option>Country</option>
            {allCountries()}
            {/* <option>{allCountries()}</option>
            <option>LAX</option> */}
          </select>
          <select className='dashDropdown'>
            <option>City</option>
            {allCities()}
            {/* <option>Select One</option>
            <option>CDG</option> */}
          </select>
          <p>TO</p>
          <select className='dashDropdown'>
            <option>Country</option>
            {allCountries()}
            {/* <option>{allCountries()}</option>
            <option>LAX</option> */}
          </select>
          <select className='dashDropdown'>
            <option>City</option>
            {allCities()}
            {/* <option>Select One</option>
            <option>CDG</option> */}
          </select>
        </form>
        <table>
          <tr>
            <td>current city</td>
            <td>destination city</td>
            <td>destination city</td>
            <td><button className='tableRowButtons'>Flight Details</button></td>
            <td><button className='tableRowButtons'>Location Details</button></td> 
          </tr>
        </table>

        </div>
    </>
  );
};

export default Dashboard;

