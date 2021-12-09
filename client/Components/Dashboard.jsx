import React, { useState, useEffect } from "react";

import countryCityObj from "../../seeds/countryCapital.js";
import { flightData } from "../../seeds/flightsearch.js";
import { findCityByCountry } from "../utility.js";
import TableRow from "../Components/TableRow.jsx";

const Dashboard = () => {
  const [countryFrom, setCountryFrom] = useState("");
  const [cityFrom, setCityFrom] = useState("");
  const [countryTo, setCountryTo] = useState("");
  const [cityTo, setCityTo] = useState("");
  const [fetchResult, setFetchResult] = useState([]);

  /////

  const [airportCodeDeparture, setAirportCodeDeparture] = useState("MOW");
  const [departureDate, setDepartureDate] = useState("2022-05-11");
  const [airportCodeArrival, setAirportCodeArrival] = useState("NYC");
  const [returnDate, setReturnDate] = useState("2022-05-12");

  useEffect(() => {
    console.log("fetchResult", fetchResult);
  }, [fetchResult]);

  const handleFetch = () => {
    fetch(
      `https://priceline-com-provider.p.rapidapi.com/v1/flights/search?location_departure=${airportCodeDeparture}&itinerary_type=ONE_WAY&sort_order=PRICE&class_type=ECO&date_departure=${departureDate}&location_arrival=${airportCodeArrival}&date_departure_return=${returnDate}&number_of_passengers=1&number_of_stops=1&price_min=100&price_max=20000&duration_max=2051`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "priceline-com-provider.p.rapidapi.com",
          "x-rapidapi-key":
            "a0cd7f0d33msh28094d8c8fbd24bp1633adjsn2310399601b2",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setFetchResult([...data.segment]))
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const currentCity = findCityByCountry(countryCityObj, countryFrom);
    setCityFrom(currentCity);
  }, [countryFrom]);

  useEffect(() => {
    const currentCity = findCityByCountry(countryCityObj, countryTo);
    setCityTo(currentCity);
  }, [countryTo]);

  const countryFromOptionList = [];
  countryCityObj.map((element) =>
    countryFromOptionList.push(<option>{element.country}</option>)
  );

  const cityFromOptionList = [];
  countryCityObj
    .filter((element) => !!element.city)
    .filter((element) => element.country === countryFrom)
    .map((element) => cityFromOptionList.push(<option>{element.city}</option>));

  const countryToOptionList = [];
  countryCityObj.map((element) =>
    countryToOptionList.push(<option>{element.country}</option>)
  );

  const cityToOptionList = [];
  countryCityObj
    .filter((element) => element.country === countryTo)
    .map((element) => cityToOptionList.push(<option>{element.city}</option>));

  const tableRowArray = [];
  fetchResult.map((element) =>
    tableRowArray.push(<TableRow rowData={element} />)
  );

  return (
    <>
      <div>
        <h3>Dashboard</h3>
        <h4>From</h4>
        <label>Country</label>
        <br />
        <button onClick={() => handleFetch()}>Search</button>
        <select
          className="dashDropdown"
          onChange={(e) => setCountryFrom(e.target.value)}
        >
          <option>--Select--</option>
          {countryFromOptionList}
        </select>
        <label>City</label>
        <select className="dashDropdown">
          <option>--Select--</option>
          {cityFromOptionList}
        </select>
        <h4>Destination</h4>
        <select
          className="dashDropdown"
          onChange={(e) => setCountryTo(e.target.value)}
        >
          <option>--Select--</option>
          {countryToOptionList}
        </select>
        <select
          className="dashDropdown"
          onChange={(e) => setCityTo(e.target.value)}
        >
          <option>--Select--</option>--
          {cityToOptionList}
        </select>
        <hr />

        <label>Departure Date</label>
        <input
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          type="text"
        />

         <label>Departure Location Code</label>
        <select
          className="dashDropdown"
          onChange={(e) => setAirportCodeDeparture(e.target.value)}
        >
          <option>--Airport Departure Code --</option>
          <option>SVO</option>
          <option>JFK</option>
          <option>DME</option>
          <option>EWR</option>
          <option>VKO</option>
          <option>LGA</option>
          <option>CDG</option>
          <option>ORY</option>
        </select>

        <label>Arrival Airport Code</label>
        <select
          className="dashDropdown"
          onChange={(e) => setAirportCodeArrival(e.target.value)}
        >
       
          <option>SVO</option>
          <option>JFK</option>
          <option>DME</option>
          <option>EWR</option>
          <option>VKO</option>
          <option>LGA</option>
          <option>CDG</option>
          <option>ORY</option>
        </select>


        <table>
          <tr>
            <td>Departure Date</td>
            <td>Arrival Time</td>
            <td>Destination Airport</td>
            <td>Flight Duration</td>
            <td>Flight Number</td>
            <td>
              <button className="tableRowButtons">Flight Details</button>
            </td>
            <td>
              <button className="tableRowButtons">Location Details</button>
            </td>
          </tr>
          {tableRowArray}
        </table>
      </div>
    </>
  );
};

export default Dashboard;
