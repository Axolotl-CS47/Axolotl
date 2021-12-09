import React, { useState, useEffect } from "react";
import { Country, City } from "country-state-city";
import store from "../store";
import { useSelector } from "react-redux";
const ToDo = () => {
  const [country, setCountry] = useState("");
  const [result, setResult] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [cities, setCities] = useState([]);
  const [currentCountryFromMap, setCurrentCountryFromMap] = useState();
  let countrySelectedInMap = store.getState();
  const allCountriesObj = Country.getAllCountries();
  const allCountries = allCountriesObj.map((obj) => (
    <option>{obj.name}</option>
  ));

  useEffect(() => {
    console.log("countrySelectedInMap", countrySelectedInMap.currentCountry);
  }, [countrySelectedInMap, currentCountryFromMap]);

  const allTheCities = cities.map((element) => {
    return <option>{element}</option>;
  });

  const handleClick = (value) => {
const todoSelect = document.querySelector('todo');
    const arr = allCountriesObj.filter((element) => {
      return element.name === value;
    });

    const code = arr[0].isoCode;
    const allCitiesObj = City.getAllCities();
    const allCities = allCitiesObj
      .filter((obj) => {
        return obj.countryCode === code;
      })
      .map((element) => {
        return element.name;
      });

    setCities([...allCities]);
  };
  return (
    <>
      <h1>Things to do in {`${country}`}</h1>
      <select
      id="todo"
        onChange={(e) => handleClick(e.target.value)}
      >
        {allCountries}
      </select>
      <select>
        <option>City</option>
        {allTheCities}
      </select>
      <input type = 'text' value={countrySelectedInMap.currentCountry}/>
    </>
  );
};

export default ToDo;
