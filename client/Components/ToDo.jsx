import React, {useState, useEffect} from "react";
import { Country, City } from 'country-state-city';

const ToDo = () => {
  const [country, setCountry] = useState('');
  const [result, setResult] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [cities, setCities] = useState([]);
  const [citySelected, setCitySelected] = useState('')
  const [toDo, setToDo] = useState('');
  const [newArray, setNewArray] = useState([]);
  const allCountriesObj = Country.getAllCountries();
  const allCountries = allCountriesObj?.map(obj =>
    <option>{obj.name}</option>
  )


  const allTheCities = cities?.map(element => {
    return <option>{element}</option>
  })

  const arrToDo = []
  useEffect(() => {

    fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${citySelected}&apikey=5ae2e3f221c38a28845f05b63e95fc09f0bc72578a5aa05f060e818b`)
    .then((res) => res.json())
    .then(data => {
        const lon = data.lon;
        const lat = data.lat; 
        return fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=1500&lon=${lon}&lat=${lat}&apikey=5ae2e3f221c38a28845f05b63e95fc09f0bc72578a5aa05f060e818b`)
    })
    .then(res => res.json())
    .then(data => {
      const arr = data.features?.map(element => element.properties.xid);
      const arrayTest = []
      for (let i = 0; i<5; i++) {
        fetch(`https://api.opentripmap.com/0.1/en/places/xid/${arr[i]}?apikey=5ae2e3f221c38a28845f05b63e95fc09f0bc72578a5aa05f060e818b`)
        .then(res => res.json())
        .then(dataXXID => {
         arrayTest.push(dataXXID)
         console.log('dataxxid', arrayTest)
        })
      }
    })
    .catch(err => console.log(err));      
  }, [citySelected])


  const handleClick = (value) => {
    const arr = allCountriesObj.filter((element) => {
      return element.name === value;
    })
    console.log('arr[0].isoCode',arr[0].isoCode)
    const code = arr[0].isoCode;
    const allCitiesObj = City.getAllCities();
    const allCities = allCitiesObj.filter(obj => {
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
      <select onChange={(e) => setCitySelected(e.target.value)}>
        <option>City</option>
        {allTheCities}
      </select>
    </>
  )
}

export default ToDo;