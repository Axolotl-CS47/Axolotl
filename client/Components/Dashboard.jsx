import React, { useState, useEffect } from "react";
import countryCityObj from "../../seeds/countryCapital.js";
import { findCityByCountry } from "../utility.js";
import TableRow from "../components/TableRow.jsx";

const Dashboard = () => {
  const [countryFrom,] = useState("");
  const [, setCityFrom] = useState("");
  const [countryTo,] = useState("");
  const [, setCityTo] = useState("");
  const [fetchResult, setFetchResult] = useState([]);
  const [airportCodeDeparture, setAirportCodeDeparture] = useState("");
  const [departureDate, setDepartureDate] = useState("2022-05-11");
  const [airportCodeArrival, setAirportCodeArrival] = useState("");
  const [returnDate,] = useState("2022-11-11");

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
  countryCityObj.map((element, index) =>
    countryFromOptionList.push(
      <option key={`element${index}`}>{element.country}</option>
    )
  );

  const cityFromOptionList = [];
  countryCityObj
    .filter((element) => !!element.city)
    .filter((element) => element.country === countryFrom)
    .map((element, index) =>
      cityFromOptionList.push(
        <option key={`element${index}`}>{element.city}</option>
      )
    );

  const countryToOptionList = [];
  countryCityObj.map((element, index) =>
    countryToOptionList.push(
      <option key={`element${index}`}>{element.country}</option>
    )
  );

  const cityToOptionList = [];
  countryCityObj
    .filter((element) => element.country === countryTo)
    .map((element, index) =>
      cityToOptionList.push(
        <option key={`element${index}`}>{element.city}</option>
      )
    );

  const tableRowArray = [];
  fetchResult.map((element, index) =>
    tableRowArray.push(<TableRow className="table-rows" key={`element${index}`} rowData={element} />)
  );

  return (
    <>
      <div>
        <h1>Look Up Flights</h1>
        <hr />
        <input
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          type="date"
          className="inputDate"
        />
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
        <select
          className="dashDropdown"
          onChange={(e) => setAirportCodeArrival(e.target.value)}
        >
          <option>--Airport Arrival Code --</option>
          <option>SVO</option>
          <option>JFK</option>
          <option>DME</option>
          <option>EWR</option>
          <option>VKO</option>
          <option>LGA</option>
          <option>CDG</option>
          <option>ORY</option>
        </select>
        <button onClick={() => handleFetch()}>Search</button>
        <div
          style={{
            display: "block",
            backgroundColor:'transparent',
            marginLeft: "2em",
            width: "auto",
            background: "white",
          }}
        >
          <table
            style={{
              display: "block",
              overflowY: "scroll",
              block: "overflow-x:auto;",
              backgroundColor:'transparent',
              border: "1px solid black",
              margin: "auto",
              padding: "1em",
              width: "auto",
              background: "white",
              marginRight:'0.1em'
            }}
          >
            <tr style={{ marinLeft:'2em', border: "1px solid black", width: "auto" ,marginRight:'0.1em'}}>
              <td style={{ border: "1px solid black", width: "auto"}}>
                Departure Date
              </td>
              <td style={{ border: "1px solid black", width: "auto" }}>
                Arrival Time
              </td>
              <td style={{ border: "1px solid black", width: "auto" }}>
                Destination Airport
              </td>
              <td style={{ border: "1px solid black", width: "auto" }}>
                Flight Duration
              </td>
              <td style={{ border: "1px solid black", width: "auto" }}>
                Flight Number
              </td>
            </tr>
            {tableRowArray}
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
