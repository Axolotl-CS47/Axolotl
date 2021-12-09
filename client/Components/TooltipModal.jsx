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

  // useEffect(() => {
  //   fetch(`https://api.opentripmap.com/0.1/en/places/bbox?place=${city}&lon_min=38.364285&lon_max=38.372809&lat_min=59.855685&lat_max=59.859052&src_geom=wikidata&apikey=5ae2e3f221c38a28845f05b6b058d6bf349468b84a740b3cd7042a5f`)
  //   .then(response => response.json())
  //   .then(data => setFetchResult([...data.features])).then((data) => console.log(data));
  // },[])

  useEffect(() => {
<<<<<<< HEAD
  setCurr(props.currentCity);
<<<<<<< HEAD:client/Components/Trip.jsx
  console.log("props.currentCity", props.geo);
=======
>>>>>>> d9475f875d1b6f333051bcd32ae17516f4cccc3e:client/Components/TooltipModal.jsx
=======
    setCurr(props.currentCity);
>>>>>>> e63f88f6275b85252244243641477b12a9ed6d85
  }, [props.currentCity, curr]);

  useEffect(() => {
   
    console.log("props.currentCity", props.geo);
    }, []);

  const findCountry = (arr, val) => {
    const res = arr.filter((element) => element.country === val);
    return res[0]?.city;
  };
  return (
    <>
<<<<<<< HEAD
      <div id="tt-element"></div>
          { city } 
          <br></br>
          <a href={`https://www.wikipedia.com/?${city}`}>WikiLink</a>
=======

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
>>>>>>> e63f88f6275b85252244243641477b12a9ed6d85
      <div />
    </>
  );
};

export default TootipModal;
