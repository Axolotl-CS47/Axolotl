import React, { useState, useEffect } from "react";
import countryCityObj from "../../seeds/countryCapital.js";
import '../styles.css';
const TootipModal = (props) => {
  const [city, setCity] = useState("");
  const [curr, setCurr] = useState("");

  useEffect(() => {
    let val = findCountry(countryCityObj, props.NAME);
    setCity(val);
  }, [props.NAME]);
  useEffect(() => {
    setCurr(props.currentCity);
  }, [props.currentCity, curr]);

  const findCountry = (arr, val) => {
    const res = arr.filter((element) => element.country === val);
    return res[0]?.city;
  };
  return (
    <>
<span>
      <table className="tool-tip">
        <tr>
          <td>Country</td>
          <td>Capital City</td>
          <td>Population Size</td>
        
          <td>Total GDP</td>
     
          <td>Population Rank</td>
        </tr>
        <tr>
          <td>{props.details.NAME_LONG}</td>
          <td>{city}</td>
          <td>{(Number(props.details.POP_EST)/1000000).toFixed(3) } million</td>
       
          <td>${props.details.GDP_MD_EST}</td>
          <td>{props.details.POP_RANK}</td>
        </tr>
      </table>
      </span>

    </>
  );
};

export default TootipModal;
