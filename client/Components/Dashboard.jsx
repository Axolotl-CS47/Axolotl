import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import countryCityObj from "../../seeds/countryCapital.js";
import store from '../store';
import { findCityByCountry } from "../utility.js";


const Dashboard = () => {
  const [country, setCountryFrom] = useState('');
  const [city, setCityFrom] = useState('');
  const [countryTo, setCountryTo] = useState('');
  const [cityTo, setCityTo] = useState('');
  const [flightInformation, setFlightInfo] = useState('');


  const flights = [];
  
  
  const allCountries = () => countryCityObj.map(country => {
    return <option>{country.country}</option>
  })
  
  useEffect(() => {
    const currentCity = findCityByCountry(countryCityObj, country)
    setCityFrom(currentCity)
  }, [country])

  useEffect(() => {
    const currentCity = findCityByCountry(countryCityObj, countryTo)
    setCityTo(currentCity)
  }, [countryTo])

  const cities = findCityByCountry(countryCityObj, country)
  console.log(country, city, countryTo, cityTo)
  // console.log(cities)

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
          <h4>From</h4>
          <select className='dashDropdown' onChange={(e) => setCountryFrom(e.target.value)}>
            <option>Country</option>
            {allCountries()}
            {/* <option>{allCountries()}</option>
            <option>LAX</option> */}
          </select>
          <select className='dashDropdown'>
            <option>City</option>
            <option>{city}</option>

            {/* <option>Select One</option>
            <option>CDG</option> */}
          </select>
          <h4>Destination</h4>
          <select className='dashDropdown' onChange={(e) => setCountryTo(e.target.value)}>
            <option>Country</option>
            {allCountries()}
            {/* <option>{allCountries()}</option>
            <option>LAX</option> */}
          </select>
          <select className='dashDropdown'>
            <option>City</option>
            <option>{cityTo}</option>
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

