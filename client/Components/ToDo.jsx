import React, {useState, useEffect} from "react";
import { Country, City } from 'country-state-city';

const ToDo = () => {
  const [country, setCountry] = useState('');
  const [result, setResult] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [cities, setCities] = useState([]);

  const allCountriesObj = Country.getAllCountries();
  const allCountries = allCountriesObj.map(obj =>
    <option>{obj.name}</option>
  )

  const allTheCities = cities.map(element => {
    return <option>{element}</option>
  })

  const handleClick = (value) => {
    const arr = allCountriesObj.filter((element) => {
      return element.name === value;
    })
    console.log('arr[0].isoCode',arr[0].isoCode)
    const code = arr[0].isoCode;
    const allCitiesObj = City.getAllCities();
    const allCities = allCitiesObj.filter(obj => {
    // console.log('Country Code',countryCode,'Object.country.code',obj.countryCode)
    return obj.countryCode === code;
    }).map(element => {
      return element.name;
    })
    console.log(allCitiesObj)
    setCities([...allCities]);
  }
  console.log('cities', cities)
  console.log('these are cities', cities)

  return (
    <>
      <h1>Things to do in {`${country}`}</h1>
      <select onChange={(e) => handleClick(e.target.value)}>
        {allCountries}
      </select>
      <select>
        <option>City</option>
        {allTheCities}
      </select>
    </>
  )
}

export default ToDo;