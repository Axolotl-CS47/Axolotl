import React, { useState, useEffect } from "react";
import countryCityObj from '../../seeds/countryCapital.js'

const Trip = (props) => {
  const [city, setCity] = useState("");
  const [curr, setCurr] = useState("");
  useEffect(() => {
    let val = findCountry(countryCityObj, props.NAME);
    setCity(val);
    console.log("city", city);
  }, [props.NAME]);

  useEffect(() => {
  setCurr(props.currentCity);
  console.log("props.currentCity", props.currentCity);
  }, [props.currentCity, curr]);

  const findCountry = (arr, val) => {
    const res = arr.filter((element) => element.country === val);
    return res[0]?.city;
  };

  // determine city from country passed in from mapChart (from props)
  // const city = findCountry(countryCityObj, props.NAME);

  return (
    <>
      <div id="tt-element"></div>
          { city } 
          <br></br>
          <a href={`https://www.wikipedia.com/?${city}`}>{city}</a>
      <div />
    </>
  );
};

export default Trip;
