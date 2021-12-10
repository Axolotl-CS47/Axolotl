import React, { useState, useEffect } from "react";
import { Country, City } from "country-state-city";
import store from "../store";
const ToDo = () => {
  const [arrayTestState, setArrayTestState] = useState([]);
  const [cities, setCities] = useState([]);
  const [citySelected, setCitySelected] = useState("");
  const [dataFetch, setDataFetch] = useState("");
  const allCountriesObj = Country.getAllCountries();
  const allCountries = allCountriesObj?.map((obj) => (
    <option>{obj.name}</option>
  ));

  let citySelectedInMap = store.getState().currentCity;
  let countrySelectedInMap = store.getState().currentCountry;
  useEffect(() => {
    setCitySelected(citySelectedInMap);
  }, [citySelectedInMap]);

  useEffect(() => {
    fetch(
      `https://api.opentripmap.com/0.1/en/places/geoname?name=${citySelectedInMap}&apikey=5ae2e3f221c38a28845f05b63e95fc09f0bc72578a5aa05f060e818b`
    )
      .then((res) => res.json())
      .then((data) => {
        const lon = data.lon;
        const lat = data.lat;
        fetch(
          `https://api.opentripmap.com/0.1/en/places/radius?radius=1500&lon=${lon}&lat=${lat}&apikey=5ae2e3f221c38a28845f05b63e95fc09f0bc72578a5aa05f060e818b`
        )
          .then((response) => response.json())
          .then((dataFetchResponse) => setDataFetch(dataFetchResponse));
      })
      .then((res) => res.json())
      .then((data) => {
        const arr = data.features?.map((element) => element.properties.xid);

        for (let i = 0; i < 5; i++) {
          fetch(
            `https://api.opentripmap.com/0.1/en/places/xid/${arr[i]}?apikey=5ae2e3f221c38a28845f05b63e95fc09f0bc72578a5aa05f060e818b`
          )
            .then((res) => res.json())
            .then((dataXXID) => {
              arrayTest.push(dataXXID);
              setArrayTestState([...dataXXID]);
            });
        }
      })
      .catch((err) => console.log(err));
  }, [citySelectedInMap]);

  useEffect(() => {
    fetch(
      `https://api.opentripmap.com/0.1/en/places/geoname?name=${citySelected}&apikey=5ae2e3f221c38a28845f05b63e95fc09f0bc72578a5aa05f060e818b`
    )
      .then((res) => res.json())
      .then((data) => {
        const lon = data.lon;
        const lat = data.lat;
        fetch(
          `https://api.opentripmap.com/0.1/en/places/radius?radius=1500&lon=${lon}&lat=${lat}&apikey=5ae2e3f221c38a28845f05b63e95fc09f0bc72578a5aa05f060e818b`
        )
          .then((response) => response.json())
          .then((dataFetchResponse) => setDataFetch(dataFetchResponse));
      })
      .then((res) => res.json())
      .then((data) => {
        const arr = data.features?.map((element) => element.properties.xid);

        for (let i = 0; i < 5; i++) {
          fetch(
            `https://api.opentripmap.com/0.1/en/places/xid/${arr[i]}?apikey=5ae2e3f221c38a28845f05b63e95fc09f0bc72578a5aa05f060e818b`
          )
            .then((res) => res.json())
            .then((dataXXID) => {
              console.log("dataXXID", dataXXID);
              arrayTest.push(dataXXID);
            });
        }
      })
      .catch((err) => console.log(err));
  }, [citySelected]);

  const allTheCities = cities.map((element, index) => {
    return <option key={`element${index}`}>{element}</option>;
  });

  const handleClick = (value) => {
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

  const arrDisplay = [];
  dataFetch["features"]?.forEach((element, index) =>
    arrDisplay?.push(
      <tr>
        <td key={`element${index}`}>{element?.properties?.name}</td>
      </tr>
    )
  );

  return (
    <>
      <h1>Things to do in {`${countrySelectedInMap}`}</h1>
      <hr />
      <select id="todo" onChange={(e) => handleClick(e.target.value)}>
        <option>Country</option>
        {allCountries}
      </select>
      <select onChange={(e) => setCitySelected(e.target.value)}>
        <option>City</option>
        {allTheCities}
        <br />
      </select>
      <table className='travelInfo'>{dataFetch && arrDisplay}</table>
    </>
  );
};

export default ToDo;
