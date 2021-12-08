import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import countryCityObj from "./countryCapital.js";
import store from '../store';
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

  return (
    <>
     
      <span>{city}</span>
      <span>{curr}</span>
    </>
  );
};

export default Trip;
