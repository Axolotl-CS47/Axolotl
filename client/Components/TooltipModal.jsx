import React, { useState, useEffect } from "react";
import countryCityObj from '../../seeds/countryCapital.js'

const Trip = (props) => {
  const [city, setCity] = useState("");
  const [curr, setCurr] = useState("");

  useEffect(() => {
    let val = findCountry(countryCityObj, props.NAME);
    setCity(val);
  }, [props.NAME]);

  useEffect(() => {
  setCurr(props.currentCity);
<<<<<<< HEAD:client/Components/Trip.jsx
  console.log("props.currentCity", props.geo);
=======
>>>>>>> d9475f875d1b6f333051bcd32ae17516f4cccc3e:client/Components/TooltipModal.jsx
  }, [props.currentCity, curr]);

  useEffect(() => {
   
    console.log("props.currentCity", props.geo);
    }, []);

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
          <a href={`https://www.wikipedia.com/?${city}`}>WikiLink</a>
      <div />
    </>
  );
};

export default TootipModal;
