export const findCityByCountry = (arr, countryName) => {
    const city = arr.filter((element) => element.country === countryName);
    return city[0]?.city;
  };